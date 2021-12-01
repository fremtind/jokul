import { useState, useEffect } from "react";

const PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: no-preference)";
const getInitialState = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
        return !window.matchMedia(PREFERS_REDUCED_MOTION).matches;
    }
    return false;
};

/**
 * @deprecated Foretrekk useBrowserPreferences for ny kode
 */
export const useReducedMotion = (): boolean => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState());

    useEffect(() => {
        let mediaQueryList: MediaQueryList;
        let listener: (event: MediaQueryListEvent) => void;
        if (typeof window !== "undefined" && window.matchMedia) {
            mediaQueryList = window.matchMedia(PREFERS_REDUCED_MOTION);
            listener = (event: MediaQueryListEvent) => setPrefersReducedMotion(!event.matches);
            mediaQueryList?.addListener(listener);
        }

        return () => {
            mediaQueryList?.removeListener(listener);
        };
    }, []);

    return prefersReducedMotion;
};
