import { useEffect, RefObject } from "react";

type ValueOf<T> = T[keyof T];

interface Props {
    ref: RefObject<ValueOf<HTMLElementTagNameMap>>;
    timeout?: number;
    autoScroll?: boolean;
    options?: ScrollIntoViewOptions;
}

export const useScrollIntoView = ({ ref, timeout = 0, autoScroll = true, options = { behavior: "smooth" } }: Props) => {
    const scrollIntoView = () => {
        if (ref?.current) {
            ref.current.scrollIntoView(options);
        }
    };
    useEffect(() => {
        if (!autoScroll) {
            return;
        }
        const scrollFn = setTimeout(scrollIntoView, timeout);
        return () => clearTimeout(scrollFn);
    }, [ref, timeout, autoScroll]);

    return [scrollIntoView];
};
