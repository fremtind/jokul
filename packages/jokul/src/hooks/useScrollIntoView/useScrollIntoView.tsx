import { useEffect, type RefObject } from "react";

type ValueOf<T> = T[keyof T];

export interface ScrollIntoViewProps {
    ref: RefObject<ValueOf<HTMLElementTagNameMap>>;
    timeout?: number;
    autoScroll?: boolean;
    options?: ScrollIntoViewOptions;
}

type ScrollFunction = () => void;

export const useScrollIntoView = ({
    ref,
    timeout = 0,
    autoScroll = true,
    options = { behavior: "smooth" },
}: ScrollIntoViewProps): [ScrollFunction] => {
    const scrollIntoView: ScrollFunction = () => {
        if (ref?.current) {
            ref.current.scrollIntoView(options);
        }
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies:
    useEffect(() => {
        if (!autoScroll) {
            return;
        }
        const scrollFn = setTimeout(scrollIntoView, timeout);
        return () => clearTimeout(scrollFn);
    }, [ref, timeout, autoScroll]);

    return [scrollIntoView];
};
