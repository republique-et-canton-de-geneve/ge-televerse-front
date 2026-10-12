import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { getSession, phoneConnect, isServerError } from '../api/endpoints';
import { serverNow } from '../api/client';
import useUploadStore from '../store/uploadStore';
import i18n from '../i18n';

const useSession = (token) => {
    const { setSession, setError, setExpired } = useUploadStore();
    const phoneConnectCalled = useRef(false);

    const query = useQuery({
        queryKey: ['session', token],
        queryFn: () => getSession(token),
        enabled: !!token,
        retry: 1,
        staleTime: Infinity,
    });

    useEffect(() => {
        if (!query.data) return;

        const { status, isSecondary } = useUploadStore.getState();
        if (status !== 'loading' && status !== 'ready') return;

        const expiresAt = new Date(query.data.expiresAt).getTime();
        if (expiresAt <= serverNow()) {
            setExpired(true);
            return;
        }

        setSession(query.data);

        // Signal phone-connect once for secondary devices
        if (isSecondary && !phoneConnectCalled.current) {
            phoneConnectCalled.current = true;
            phoneConnect(token).catch(() => {});
        }

        // No setTimeout here: SessionExpiryDialog's per-second tick reads
        // the current store expiresAt (which keepAlive updates) and, when it
        // reaches zero, re-verifies the deadline server-side before calling
        // setExpired(). A one-shot timeout based on the initial value would
        // fire even after the session was renewed.
    }, [query.data]);

    useEffect(() => {
        if (!query.error) return;
        if (query.error.response?.status === 404) {
            setExpired(true);
            return;
        }
        setError(isServerError(query.error) ? i18n.t('errors.server') : i18n.t('errors.loadSession'));
    }, [query.error]);

    return query;
};

export default useSession;
