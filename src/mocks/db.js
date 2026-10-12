const STORAGE_KEY = 'mock-televerse-state';

const SIZE_PROFILES = {
    S: 25 * 1024 * 1024,
    M: 100 * 1024 * 1024,
    L: 250 * 1024 * 1024,
    XL: 500 * 1024 * 1024,
};

export const MAX_PAGES = 100;
export const MOCK_DELAY = 600;

export const createMockSession = (token, sizeProfile = 'S') => ({
    token,
    documentId: `${token}.pdf`,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    pages: [],
    pageCounter: 0,
    phoneConnected: false,
    totalBytes: 0,
    maxTotalBytes: SIZE_PROFILES[sizeProfile] || SIZE_PROFILES.S,
    maxPages: MAX_PAGES,
    sizeProfile,
});

const loadPersistedState = () => {
    try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            return {
                session: parsed.mockSession || createMockSession('mock-token-123'),
                pages: parsed.mockPages || [],
                uploadCount: parsed.uploadCount || 0,
            };
        }
    } catch (e) {
        // ignore
    }
    return { session: createMockSession('mock-token-123'), pages: [], uploadCount: 0 };
};

const initial = loadPersistedState();

export const db = {
    session: initial.session,
    pages: initial.pages,
    uploadCount: initial.uploadCount,
};

export const persist = () => {
    try {
        sessionStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ mockSession: db.session, mockPages: db.pages, uploadCount: db.uploadCount }),
        );
    } catch (e) {
        // ignore
    }
};

export const clearPersisted = () => {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
};

export const refreshExpiresAt = () => {
    db.session.expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
};

export const totalBytes = () => db.pages.reduce((sum, p) => sum + (p.fileSize || 0), 0);

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const resetSession = (token, sizeProfile) => {
    db.session = createMockSession(token, sizeProfile);
    db.pages = [];
    db.uploadCount = 0;
    persist();
};
