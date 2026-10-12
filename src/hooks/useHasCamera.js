// Returns true on phone-class devices, where we show the "Prendre une photo"
// button (which opens the OS camera via `<input capture="environment">`) instead
// of the desktop drag-and-drop zone. This is a UI-routing decision, not a
// hardware check — `<input capture>` degrades gracefully if no camera exists,
// so we don't need enumerateDevices/getUserMedia. Media-query detection via
// any-pointer/any-hover was unreliable on real Android devices that expose
// stylus or Bluetooth-mouse capabilities (e.g. Galaxy S22 with S Pen support).
const MOBILE_UA = /iPhone|iPad|iPod|Android.+Mobile/;

const useHasCamera = () =>
    typeof navigator !== 'undefined' && (
        navigator.userAgentData?.mobile ?? MOBILE_UA.test(navigator.userAgent)
    );

export default useHasCamera;
