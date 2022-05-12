import { RefObject, useCallback, useEffect, useMemo, useState } from "react";

function throttle<R, A extends any[]>(fn: (...args: A) => R) {
    let wait = false;

    return (...args: A) => {
        if (wait) return undefined;

        const result = fn(...args);

        wait = true;
        window.setTimeout(() => {
            wait = false;
        }, 200);

        return result;
    };
}

export const usePillStyles = (ref: RefObject<HTMLLabelElement>, shouldTransform: boolean) => {
    const [width, setWidth] = useState(0);
    const [distance, setDistance] = useState(0);

    const setStyles = useCallback(() => {
        if (ref.current && ref.current.parentElement) {
            setWidth(ref.current.clientWidth);

            const translateDistance = shouldTransform
                ? ref.current.parentElement.clientWidth - ref.current.clientWidth
                : 0;

            setDistance(translateDistance);
        }
    }, [ref, shouldTransform]);

    const throttledSetStyles = useMemo(() => throttle(setStyles), [setStyles]);

    useEffect(() => {
        setStyles();
        typeof window !== "undefined" && window.addEventListener("resize", throttledSetStyles);
        return () => {
            typeof window !== "undefined" && window.removeEventListener("resize", throttledSetStyles);
        };
    }, [setStyles, throttledSetStyles]);

    return {
        width,
        transform: `translateX(${distance}px)`,
    };
};
