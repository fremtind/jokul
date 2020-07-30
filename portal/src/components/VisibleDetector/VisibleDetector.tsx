import React, { useRef, useState, forwardRef } from "react";
import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";

interface Props {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    // @ts-ignore: Todo: improve visibleDetector type safety
    render: any;
    // @ts-ignore: Todo: improve visibleDetector type safety
    onEnter?: any;
    // @ts-ignore: Todo: improve visibleDetector type safety
    onLeave?: any;
    /* eslint-enable @typescript-eslint/no-explicit-any */
    threshold?: Array<number>;
}

export const VisibleDetector: React.FC<Props> = forwardRef<HTMLElement, Props>(
    ({ onEnter, onLeave, render, threshold = [0.7] }, ref) => {
        const [isInViewport, setIsInViewport] = useState(false);
        const internalRef = useRef<HTMLElement>(null);
        const targetRef = (ref as React.RefObject<HTMLElement>) || internalRef;

        const onIntersect = (entries: IntersectionObserverEntry[]) => {
            // check if element is intersecting
            const isIntersecting = entries.some((entry) => entry.isIntersecting);

            // trigger onLeave or onEnter if element left or entered
            if (isInViewport && !isIntersecting && onLeave) {
                onLeave(entries);
            } else if (!isInViewport && !isIntersecting && onLeave) {
                onLeave(entries);
            } else if (!isInViewport && isIntersecting && onEnter) {
                onEnter(entries);
            }

            // update state
            setIsInViewport(isIntersecting);
        };

        const fallback = () => console.log("IntersectionObserver not supported");
        const options = { rootMargin: "0px", threshold };

        useIntersectionObserver(targetRef, onIntersect, fallback, options);

        return render(targetRef);
    },
);

VisibleDetector.displayName = "VisibleDetector";
