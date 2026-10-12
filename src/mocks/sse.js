// MSW does not intercept EventSource, so we shim window.EventSource directly
// and expose emitSseEvent() for handlers to push events to the active connection.

const HEARTBEAT_INTERVAL_MS = 15000;

let activeInstance = null;
let heartbeatsPaused = false;

class MockEventSource {
    constructor(url) {
        this.url = url;
        this.listeners = {};
        this.readyState = 0; // CONNECTING
        activeInstance = this;
        setTimeout(() => { this.readyState = 1; }, 100); // OPEN

        this.heartbeatTimer = setInterval(() => {
            if (this.readyState !== 1 || heartbeatsPaused) return;
            const handlers = this.listeners['heartbeat'] || [];
            for (const handler of handlers) {
                handler({ data: '' });
            }
        }, HEARTBEAT_INTERVAL_MS);
    }

    addEventListener(type, handler) {
        (this.listeners[type] ??= []).push(handler);
    }

    removeEventListener(type, handler) {
        this.listeners[type] = this.listeners[type]?.filter((h) => h !== handler);
    }

    close() {
        this.readyState = 2; // CLOSED
        clearInterval(this.heartbeatTimer);
        if (activeInstance === this) activeInstance = null;
    }
}

export const installEventSourceMock = () => {
    window.MockEventSource = MockEventSource;
    window.__originalEventSource = window.EventSource;
    window.EventSource = MockEventSource;
    window.pauseMockHeartbeats = pauseMockHeartbeats;
    window.resumeMockHeartbeats = resumeMockHeartbeats;
};

export const emitSseEvent = (type, data) => {
    if (activeInstance && activeInstance.readyState === 1) {
        const handlers = activeInstance.listeners[type] || [];
        for (const handler of handlers) {
            handler({ data: JSON.stringify(data) });
        }
    }
};

export const pauseMockHeartbeats = () => { heartbeatsPaused = true; };
export const resumeMockHeartbeats = () => { heartbeatsPaused = false; };
