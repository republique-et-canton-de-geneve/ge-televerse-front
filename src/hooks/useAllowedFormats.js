import { useQuery } from '@tanstack/react-query';
import { getAllowedFormats } from '../api/endpoints';

// Single source of truth for the upload extension allow-list. Shared across
// FileCapture (accept attribute, drag-drop filter) and useUpload (pre-flight
// rejection), so all three stay aligned with whatever the back returns.
const useAllowedFormats = () => useQuery({
    queryKey: ['upload-formats'],
    queryFn: getAllowedFormats,
    staleTime: Infinity,
    retry: 1,
});

export default useAllowedFormats;
