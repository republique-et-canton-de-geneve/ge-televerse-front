import api from '../api/client';
import { MOCK_DELAY, delay } from './db';

const STEPS = 10;

// MSW intercepts at the network layer, so axios's natural onUploadProgress
// fires near-instantly. To preserve the slow-fill animation in demos, we
// drive progress manually here, then strip the callback so XHR can't
// double-fire it.
export const installUploadProgressSimulator = () => {
    api.interceptors.request.use(async (config) => {
        if (!/^\/upload\/[\w-]+$/.test(config.url || '') || !config.onUploadProgress) {
            return config;
        }
        const onProgress = config.onUploadProgress;
        delete config.onUploadProgress;
        for (let i = 0; i <= STEPS; i++) {
            await delay(MOCK_DELAY / STEPS);
            onProgress({ loaded: (100 / STEPS) * i, total: 100, lengthComputable: true });
        }
        return config;
    });
};
