import React, { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver/useIntersectionObserver.js";
export function useTextSpinner<T extends HTMLElement | SVGElement>(
    ref: React.RefObject<T>,
) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [visible, setVisible] = useState(false);

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
        const intersecting = entries.some((entry) => entry.isIntersecting);
        setVisible(intersecting);
        if (intersecting) {
            setHasAnimated(true);
        }
    };
    useIntersectionObserver(ref, onIntersect, () => setVisible(true), {
        rootMargin: "50% 0% 0% 0%",
        threshold: 0.5,
    });

    return { hasAnimated, visible };
}
