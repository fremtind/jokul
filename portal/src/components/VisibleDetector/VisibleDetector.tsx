import React, { useRef, useState } from "react";
import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";

interface Props {
    render: Function;
    onEnter?: Function;
    onLeave?: Function;
}

export const VisibleDetector: React.FC<Props> = ({ onEnter, onLeave, render, name }) => {
    const [isInViewport, setIsInViewport] = useState(false);
    const targetRef = useRef(null);

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
        // check if element is intersecting
        const isIntersecting = entries.some((entry) => entry.isIntersecting);

        // trigger onLeave or onEnter if element left or entered
        if (isInViewport && !isIntersecting && onLeave) {
            onLeave(entries);
        } else if (!isInViewport && isIntersecting && onEnter) {
            onEnter(entries);
        }

        // update state
        setIsInViewport(isIntersecting);
    };

    const fallback = () => console.log("IntersectionObserver not supported");
    const options = { rootMargin: "0px", threshold: [0.7] };

    useIntersectionObserver(targetRef, onIntersect, fallback, options);

    return render(targetRef);
};

VisibleDetector.displayName = "VisibleDetector";
