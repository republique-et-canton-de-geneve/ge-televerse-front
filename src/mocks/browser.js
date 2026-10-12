export const startMocks = async () => {
    if (process.env.MOCK_API !== 'true') return;

    const [{ setupWorker }, { handlers }, { installEventSourceMock }, { installUploadProgressSimulator }] = await Promise.all([
        import('msw/browser'),
        import('./handlers'),
        import('./sse'),
        import('./uploadProgress'),
    ]);

    installEventSourceMock();
    installUploadProgressSimulator();

    const worker = setupWorker(...handlers);
    await worker.start({
        serviceWorker: { url: '/mockServiceWorker.js' },
        onUnhandledRequest: 'bypass',
        quiet: false,
    });

    console.info('[Mock] MSW worker started');
};
