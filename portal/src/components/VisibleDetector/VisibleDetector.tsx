import { useIntersectionObserver } from "@fremtind/jkl-react-hooks";
import {
    useRef,
    useState,
    forwardRef,
    RefObject,
    MutableRefObject,
    ReactElement,
} from "react";

type RenderFunction<T extends HTMLElement> = (
    ref: ((instance: T | null) => void) | MutableRefObject<T | null> | null,
) => ReactElement | null;

interface Props {
    render: RenderFunction<HTMLDivElement>;
    onEnter?: (entries: IntersectionObserverEntry[]) => void;
    onLeave?: (entries: IntersectionObserverEntry[]) => void;
    threshold?: Array<number>;
}

export const VisibleDetector = forwardRef<HTMLDivElement, Props>(
    ({ onEnter, onLeave, render, threshold = [0.7] }, ref) => {
        const [isInViewport, setIsInViewport] = useState(false);
        const internalRef = useRef<HTMLDivElement>(null);
        const targetRef = ref || internalRef;

        const onIntersect = (entries: IntersectionObserverEntry[]) => {
            // check if element is intersecting
            const isIntersecting = entries.some(
                (entry) => entry.isIntersecting,
            );

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

        const fallback = () =>
            console.log("IntersectionObserver not supported");
        const options = { rootMargin: "0px", threshold };

        useIntersectionObserver(
            targetRef as RefObject<HTMLElement>,
            onIntersect,
            fallback,
            options,
        );

        return render(targetRef);
    },
);

VisibleDetector.displayName = "VisibleDetector";
