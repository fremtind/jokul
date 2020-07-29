import { useState, useEffect } from "react";

const PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: no-preference)";
const getInitialState = () => {
    if (typeof window !== "undefined") {
        return !window.matchMedia(PREFERS_REDUCED_MOTION).matches;
    }
    return false;
};

export const useReducedMotion = (): boolean => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitialState());

    useEffect(() => {
        const mediaQueryList = window?.matchMedia(PREFERS_REDUCED_MOTION);
        const listener = (event: MediaQueryListEvent) => setPrefersReducedMotion(!event.matches);

        mediaQueryList?.addListener(listener);
        return () => {
            mediaQueryList?.removeListener(listener);
        };
    }, []);

    return prefersReducedMotion;
};
