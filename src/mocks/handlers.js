import { http, HttpResponse } from 'msw';
import {
    db,
    delay,
    persist,
    clearPersisted,
    refreshExpiresAt,
    totalBytes,
    resetSession,
    MAX_PAGES,
    MOCK_DELAY,
} from './db';
import { emitSseEvent } from './sse';

const sizeCap = () => db.session.maxTotalBytes;

export const handlers = [
    // --- Session lifecycle ---

    http.post('/api/sessions', async ({ request }) => {
        await delay(MOCK_DELAY);
        const body = await request.json().catch(() => ({}));
        const sizeProfile = body.sizeProfile || 'S';
        const token = `mock-${crypto.randomUUID().slice(0, 8)}`;
        resetSession(token, sizeProfile);
        return HttpResponse.json({
            token,
            uploadUrl: `${window.location.origin}/scan/${token}`,
            expiresAt: db.session.expiresAt,
            sizeProfile,
            maxTotalBytes: sizeCap(),
            maxPages: MAX_PAGES,
        });
    }),

    // Lecture pure, comme le vrai backend : un GET ne renouvelle PAS le TTL.
    // Sinon la re-vérification d'échéance du SessionExpiryDialog prolongerait
    // la session à chaque contrôle et le flux d'expiration serait intestable
    // en mode mock.
    http.get('/api/sessions/:token', async () => {
        await delay(MOCK_DELAY);
        return HttpResponse.json({
            session: {
                token: db.session.token,
                documentId: db.session.documentId,
                sizeProfile: db.session.sizeProfile,
                createdAt: db.session.createdAt,
                expiresAt: db.session.expiresAt,
                pages: db.pages,
                pageCounter: db.uploadCount,
                phoneConnected: db.session.phoneConnected,
            },
            sizeProfile: db.session.sizeProfile,
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
            maxPages: MAX_PAGES,
        });
    }),

    http.post('/api/sessions/:token/keep-alive', async () => {
        await delay(MOCK_DELAY / 3);
        refreshExpiresAt();
        return HttpResponse.json({ expiresAt: db.session.expiresAt });
    }),

    http.get('/api/sessions/:token/preview.pdf', async () => {
        await delay(MOCK_DELAY);
        if (db.pages.length === 0) {
            return new HttpResponse(null, { status: 404 });
        }
        const pdf = buildBlankPdf(db.pages.length);
        return new HttpResponse(pdf, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'inline; filename="preview.pdf"',
                'Cache-Control': 'no-cache, private',
            },
        });
    }),

    http.post('/api/sessions/:token/finalize', async () => {
        await delay(MOCK_DELAY * 2);
        const documentId = db.session.documentId;
        const totalPages = db.pages.length;
        db.pages = [];
        db.uploadCount = 0;
        clearPersisted();
        emitSseEvent('session-complete', { documentId, totalPages });
        return HttpResponse.json({ documentId, message: 'Session finalized' });
    }),

    // Idempotent teardown for beforeunload cleanup (useBeforeUnloadCleanup).
    // Real backend releases the originator IP binding here; the mock has
    // no such binding, so just clear session state and return 204.
    http.delete('/api/sessions/:token', async () => {
        db.pages = [];
        db.uploadCount = 0;
        clearPersisted();
        return new HttpResponse(null, { status: 204 });
    }),

    // --- Phone connection ---

    http.post('/api/sessions/:token/phone-connect', async () => {
        await delay(MOCK_DELAY / 3);
        db.session.phoneConnected = true;
        refreshExpiresAt();
        persist();
        emitSseEvent('phone-connected', { documentId: db.session.documentId });
        return HttpResponse.json({ message: 'Phone connected', expiresAt: db.session.expiresAt });
    }),

    http.post('/api/sessions/:token/phone-disconnect', async () => {
        await delay(MOCK_DELAY / 3);
        db.session.phoneConnected = false;
        refreshExpiresAt();
        persist();
        emitSseEvent('phone-disconnected', { documentId: db.session.documentId });
        return HttpResponse.json({ message: 'Phone disconnected', expiresAt: db.session.expiresAt });
    }),

    // --- Upload ---

    http.get('/api/upload/formats', async () => {
        await delay(MOCK_DELAY / 3);
        return HttpResponse.json({
            allowedFormats: ['pdf', 'jpg', 'jpeg', 'png', 'tiff'],
        });
    }),

    http.post('/api/upload/:token', async ({ request }) => {
        await delay(MOCK_DELAY / 2);

        const formData = await request.formData();
        const file = formData.get('file');

        // Test hooks for the upload rejection paths (so they can be exercised
        // in mock mode). A filename containing "corrupt" or "broken" (matching
        // the backend test fixtures) mimics an undecodable PDF/image (422); one
        // containing "infected" or "virus" mimics an antivirus detection (422);
        // one containing "manypages" mimics a document over the page limit (429);
        // one containing "partial" mimics the 200 « Upload partiel » (some pages
        // attached, the rest refused under the lock — over the page limit, or
        // over the size quota for "partialsize"); one containing "oversize"
        // mimics a file refused whole over the size quota (413); one containing "expir"
        // mimics an expired/invalid session (400), which routes the app to the
        // terminal "Session expirée" view.
        // Field-name fidelity matters: ErrorResponse bodies (422) carry `error`,
        // UploadResponse bodies (429 page-limit, 200 partiel) carry `errorCode` —
        // mirroring the back so contract drift shows up in mock mode too.
        const filename = file?.name || '';
        if (/corrupt|broken/i.test(filename)) {
            return HttpResponse.json(
                { error: 'CORRUPT_FILE', message: 'Le fichier est illisible ou endommagé.' },
                { status: 422 },
            );
        }
        if (/infected|virus/i.test(filename)) {
            return HttpResponse.json(
                { error: 'INFECTED_FILE', message: 'Fichier rejeté par le contrôle antivirus.' },
                { status: 422 },
            );
        }
        if (/manypages/i.test(filename)) {
            return HttpResponse.json(
                {
                    errorCode: 'PDF_TOO_MANY_PAGES',
                    message: 'PDF de 150 pages dépasse les slots restants',
                    totalBytes: totalBytes(),
                    maxTotalBytes: sizeCap(),
                    pagesAdded: 0,
                },
                { status: 429 },
            );
        }
        if (/oversize/i.test(filename)) {
            return HttpResponse.json(
                {
                    error: 'SESSION_SIZE_EXCEEDED',
                    message: 'Session size limit exceeded',
                    totalBytes: totalBytes(),
                    maxTotalBytes: sizeCap(),
                },
                { status: 413 },
            );
        }
        if (/expir/i.test(filename)) {
            return HttpResponse.json(
                { message: 'Session expired or invalid' },
                { status: 400 },
            );
        }

        const isPdf = file?.name?.toLowerCase().endsWith('.pdf');
        // « partial » : seules 2 pages du PDF tiennent dans la limite — le back
        // répond 200 avec un errorCode pour signaler le surplus refusé, qui porte
        // le motif réel : quota d'octets pour « partialsize », pages sinon.
        const isPartial = isPdf && /partial/i.test(filename);
        const isSizePartial = isPartial && /partialsize/i.test(filename);
        const pagesAdded = isPdf ? (isPartial ? 2 : 3) : 1;

        const addedPageIds = [];
        for (let i = 0; i < pagesAdded; i++) {
            db.uploadCount++;
            const pageId = `page-${String(db.uploadCount).padStart(3, '0')}`;
            const pageKey = `${db.session.token}/${pageId}.pdf`;
            const now = new Date().toISOString();
            db.pages.push({
                pageId,
                s3Key: pageKey,
                originalFilename: isPdf ? `${file.name} (p.${i + 1})` : file?.name || `scan-${db.uploadCount}.jpg`,
                contentType: isPdf ? 'application/pdf' : 'image/jpeg',
                fileSize: 50_000 + Math.floor(Math.random() * 200_000),
                uploadedAt: now,
                lastModifiedAt: now,
                thumbnailKey: `${pageKey}-thumb.jpg`,
            });
            addedPageIds.push(pageId);
        }

        refreshExpiresAt();
        persist();

        const lastPageId = addedPageIds[addedPageIds.length - 1];
        const bytes = totalBytes();

        emitSseEvent('upload-complete', {
            documentId: db.session.documentId,
            pageId: lastPageId,
            totalPages: db.pages.length,
            totalBytes: bytes,
            maxTotalBytes: sizeCap(),
        });

        return HttpResponse.json({
            documentId: db.session.documentId,
            message: isSizePartial ? 'Upload partiel — limite de taille atteinte'
                : isPartial ? 'Upload partiel — limite de pages atteinte'
                    : `Upload successful (${pagesAdded} page${pagesAdded > 1 ? 's' : ''})`,
            pageId: lastPageId,
            pageIndex: db.pages.length - 1,
            totalPages: db.pages.length,
            thumbnailUrl: `/api/sessions/${db.session.token}/pages/${lastPageId}/thumbnail`,
            sizeProfile: db.session.sizeProfile,
            totalBytes: bytes,
            maxTotalBytes: sizeCap(),
            pagesAdded,
            errorCode: isSizePartial ? 'SESSION_SIZE_EXCEEDED' : isPartial ? 'PDF_TOO_MANY_PAGES' : null,
        });
    }),

    // --- Page management ---

    http.delete('/api/sessions/:token/pages/:pageId', async ({ params }) => {
        await delay(MOCK_DELAY);
        const { pageId } = params;
        db.pages = db.pages.filter((p) => p.pageId !== pageId);
        refreshExpiresAt();
        persist();
        const bytes = totalBytes();
        emitSseEvent('page-deleted', {
            documentId: db.session.documentId,
            pageId,
            totalPages: db.pages.length,
            totalBytes: bytes,
            maxTotalBytes: sizeCap(),
        });
        return HttpResponse.json({
            message: 'Page supprimée',
            totalPages: db.pages.length,
            totalBytes: bytes,
            maxTotalBytes: sizeCap(),
        });
    }),

    http.put('/api/sessions/:token/pages/order', async ({ request }) => {
        await delay(MOCK_DELAY / 2);
        const { pageIds = [] } = await request.json().catch(() => ({}));
        const pageMap = Object.fromEntries(db.pages.map((p) => [p.pageId, p]));
        db.pages = pageIds.map((id) => pageMap[id]).filter(Boolean);
        refreshExpiresAt();
        persist();
        emitSseEvent('pages-reordered', {
            documentId: db.session.documentId,
            totalPages: db.pages.length,
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
        });
        return HttpResponse.json({ message: 'Pages réordonnées', totalPages: db.pages.length });
    }),

    // --- Page editing ---

    http.post('/api/sessions/:token/pages/:pageId/rotate', async ({ params }) => {
        await delay(MOCK_DELAY);
        snapshotAndTouch(params.pageId);
        refreshExpiresAt();
        persist();
        emitPageEdited(params.pageId);
        return HttpResponse.json({
            message: 'Page tournée',
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
            expiresAt: db.session.expiresAt,
            undoAvailable: true,
        });
    }),

    http.post('/api/sessions/:token/pages/:pageId/white-balance', async ({ params }) => {
        await delay(MOCK_DELAY);
        snapshotAndTouch(params.pageId);
        refreshExpiresAt();
        persist();
        emitPageEdited(params.pageId);
        return HttpResponse.json({
            message: 'Balance des blancs appliquée',
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
            expiresAt: db.session.expiresAt,
            undoAvailable: true,
        });
    }),

    http.post('/api/sessions/:token/pages/:pageId/deskew', async ({ params }) => {
        await delay(MOCK_DELAY);
        const applied = Math.random() > 0.2;
        if (applied) snapshotAndTouch(params.pageId);
        refreshExpiresAt();
        persist();
        emitPageEdited(params.pageId);
        return HttpResponse.json({
            message: applied ? 'Correction de perspective appliquée' : 'Aucun document détecté — image inchangée',
            applied,
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
            expiresAt: db.session.expiresAt,
            undoAvailable: hasUndo(params.pageId),
        });
    }),

    http.post('/api/sessions/:token/pages/:pageId/crop', async ({ params }) => {
        await delay(MOCK_DELAY);
        const applied = Math.random() > 0.2;
        if (applied) snapshotAndTouch(params.pageId);
        refreshExpiresAt();
        persist();
        emitPageEdited(params.pageId);
        return HttpResponse.json({
            message: applied ? 'Recadrage appliqué' : 'Aucun document détecté — image inchangée',
            applied,
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
            expiresAt: db.session.expiresAt,
            undoAvailable: hasUndo(params.pageId),
        });
    }),

    http.post('/api/sessions/:token/pages/:pageId/undo', async ({ params }) => {
        await delay(MOCK_DELAY);
        const page = db.pages.find((p) => p.pageId === params.pageId);
        if (!page) return new HttpResponse(null, { status: 404 });

        const hadBackup = !!page.previousVersion;
        if (hadBackup) {
            page.fileSize = page.previousVersion.fileSize;
            page.lastModifiedAt = page.previousVersion.lastModifiedAt;
            page.previousVersion = null;
        }
        refreshExpiresAt();
        persist();
        emitPageEdited(params.pageId);
        return HttpResponse.json({
            message: hadBackup ? 'Modification annulée' : 'Aucune modification à annuler',
            totalBytes: totalBytes(),
            maxTotalBytes: sizeCap(),
            expiresAt: db.session.expiresAt,
            undoAvailable: false,
        });
    }),
];

// Miroir du backend : toute action d'édition renouvelle le TTL de la session
// et notifie l'autre appareil via SSE — même quand l'image est inchangée
// (deskew/crop sans détection, undo sans sauvegarde), pour que son compte à
// rebours local suive le renouvellement.
function emitPageEdited(pageId) {
    emitSseEvent('page-edited', {
        documentId: db.session.documentId,
        pageId,
        totalPages: db.pages.length,
        totalBytes: totalBytes(),
        maxTotalBytes: sizeCap(),
    });
}

function snapshotAndTouch(pageId) {
    const page = db.pages.find((p) => p.pageId === pageId);
    if (!page) return;
    // Single-level undo: each new edit overwrites the previous backup, so the
    // user can only revert the most recent change.
    page.previousVersion = {
        s3Key: `${page.s3Key.replace(/\.pdf$/, '-prev.pdf')}`,
        thumbnailKey: page.thumbnailKey ? page.thumbnailKey.replace(/(-thumb)?\.jpg$/, '-prev-thumb.jpg') : null,
        fileSize: page.fileSize,
        lastModifiedAt: page.lastModifiedAt,
    };
    page.lastModifiedAt = new Date().toISOString();
}

function hasUndo(pageId) {
    const page = db.pages.find((p) => p.pageId === pageId);
    return !!(page && page.previousVersion);
}

// Builds a minimal valid PDF with `pageCount` blank A4 pages so the mock
// preview's page count matches the session. Offsets are computed at runtime
// to avoid the brittleness of hand-tuned xref tables.
function buildBlankPdf(pageCount) {
    const pageObjs = Array.from(
        { length: pageCount },
        () => '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << >> >>',
    );
    const kids = pageObjs.map((_, i) => `${3 + i} 0 R`).join(' ');
    const objects = [
        '<< /Type /Catalog /Pages 2 0 R >>',
        `<< /Type /Pages /Kids [${kids}] /Count ${pageCount} >>`,
        ...pageObjs,
    ];

    const offsets = [];
    let body = '%PDF-1.4\n';
    objects.forEach((obj, i) => {
        offsets.push(body.length);
        body += `${i + 1} 0 obj\n${obj}\nendobj\n`;
    });

    const xrefOffset = body.length;
    const size = objects.length + 1;
    body += `xref\n0 ${size}\n0000000000 65535 f \n`;
    for (const off of offsets) {
        body += `${String(off).padStart(10, '0')} 00000 n \n`;
    }
    body += `trailer\n<< /Size ${size} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

    return new TextEncoder().encode(body);
}
