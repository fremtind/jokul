import { RefObject, useEffect, useMemo, useRef, useState } from "react";

// TODO: Denne er sikkert nyttig flere steder enn her!
// eslint-disable-next-line
function throttle<R, A extends any[]>(fn: (...args: A) => R, delay: number) {
    let wait = false;

    return (...args: A) => {
        if (wait) return undefined;

        const result = fn(...args);

        if (delay !== 0) {
            wait = true;
            window.setTimeout(() => {
                wait = false;
            }, delay);
        }

        return result;
    };
}

export type Dimensions = {
    height: number;
    width: number;
};

/**
 * Lar deg måle størrelsen på et element, og oppdatere målene når vinduet endrer størrelse.
 * @param throttleDelay Antall milisekunder som skal gå mellom hver gang dimensjonene oppdateres.
 * @returns Ref til elementet som skal måles, og dimensjonene til elementet.
 */
export function useElementDimensions<T extends HTMLElement>(
    throttleDelay = 200,
): [RefObject<T>, Dimensions] {
    const elementRef = useRef<T>(null);
    const [dimensions, setDimensions] = useState<Dimensions>({
        height: 0,
        width: 0,
    });

    const throttledSetDimensions = useMemo(
        () =>
            throttle(
                () =>
                    setDimensions({
                        height: elementRef.current?.scrollHeight || 0,
                        width: elementRef.current?.scrollWidth || 0,
                    }),
                throttleDelay,
            ),
        [throttleDelay],
    );

    useEffect(() => {
        setDimensions({
            height: elementRef.current?.scrollHeight || 0,
            width: elementRef.current?.scrollWidth || 0,
        });

        typeof window !== "undefined" &&
            window.addEventListener("resize", throttledSetDimensions);

        return () => {
            typeof window !== "undefined" &&
                window.removeEventListener("resize", throttledSetDimensions);
        };
    }, [throttledSetDimensions]);

    return [elementRef, dimensions];
}
