import React, { useRef, useState, forwardRef } from "react";
import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";

interface Props {
    render: Function;
    onEnter?: Function;
    onLeave?: Function;
    threshold?: Array<number>;
}

export const VisibleDetector: React.FC<Props> = forwardRef<HTMLElement, Props>(
    ({ onEnter, onLeave, render, threshold = [0.7] }, ref) => {
        const [isInViewport, setIsInViewport] = useState(false);
        const targetRef = (ref as React.RefObject<HTMLElement>) || useRef<HTMLElement>(null);

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
