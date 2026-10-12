import { useEffect, useState } from 'react';

// Aligné sur $upload-breakpoint (main.scss) : les choix faits en JSX
// (variantes de boutons, libellés des FAB) doivent basculer au même seuil
// que les règles CSS qui les accompagnent (pleine largeur, empilement).
const MOBILE_QUERY = '(max-width: 768px)';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(
        () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
    );
    useEffect(() => {
        const mql = window.matchMedia(MOBILE_QUERY);
        const onChange = (e) => setIsMobile(e.matches);
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, []);
    return isMobile;
};

export default useIsMobile;
