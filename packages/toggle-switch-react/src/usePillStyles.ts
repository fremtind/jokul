import { RefObject, useCallback, useEffect, useState } from "react";

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

    useEffect(() => {
        setStyles();
        window.addEventListener("resize", setStyles);
        return () => {
            window.removeEventListener("resize", setStyles);
        };
    }, [setStyles]);

    return {
        width,
        transform: `translateX(${distance}px)`,
    };
};
