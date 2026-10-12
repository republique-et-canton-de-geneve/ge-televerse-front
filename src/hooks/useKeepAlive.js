import { useEffect, useRef } from 'react';
import { keepAlive } from '../api/endpoints';

// Renew the session whenever the user interacts with the page, but throttle so
// we never hit the backend more than once per this interval.
const THROTTLE_MS = 60 * 1000;

// Events that count as deliberate user activity. Deliberately avoiding noisy
// ones like mousemove/scroll — those fire constantly on modern trackpads.
const ACTIVITY_EVENTS = ['mousedown', 'keydown', 'touchstart', 'wheel'];

const useKeepAlive = (token) => {
    const lastSentRef = useRef(0);

    useEffect(() => {
        if (!token) return undefined;

        const maybeSend = () => {
            const now = Date.now();
            if (now - lastSentRef.current < THROTTLE_MS) return;
            lastSentRef.current = now;
            // expiresAt sync is handled by the response interceptor in client.js.
            keepAlive(token).catch(() => {
                // Swallow errors; next activity event will retry.
            });
        };

        for (const evt of ACTIVITY_EVENTS) {
            window.addEventListener(evt, maybeSend, { passive: true });
        }
        return () => {
            for (const evt of ACTIVITY_EVENTS) {
                window.removeEventListener(evt, maybeSend);
            }
        };
    }, [token]);
};

export default useKeepAlive;
