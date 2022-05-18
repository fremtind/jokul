import classNames from "classnames";
import React, { useState, useEffect, useRef, useMemo, useContext } from "react";
import "./delay-text.scss";
import { a11yContext } from "../../contexts/a11yContext";

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<typeof callback>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            if (savedCallback.current) {
                savedCallback.current();
            }
        };

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return;
    }, [delay]);
};

interface Props {
    text: string;
    delay: number;
}

export const DelayText: React.FunctionComponent<Props> = ({ text, delay }) => {
    const { prefersReducedMotion } = useContext(a11yContext);
    const [index, setIndex] = useState(prefersReducedMotion ? text.length : -1);
    const [isRunning, setIsRunning] = useState(!prefersReducedMotion);
    const textRef = useRef<HTMLDivElement>(null);

    const filteredText = useMemo(() => {
        const splitText = text.split("");
        return splitText.filter((_, i) => {
            return i <= index;
        });
    }, [index, text]);

    const onEnd = () => {
        const elRef = textRef.current;

        if (!elRef) {
            return;
        }

        const parentEl = elRef.parentElement;
        const parentHeight = parentEl ? parseInt(window.getComputedStyle(parentEl).getPropertyValue("padding-top")) : 0;
        const elHeight = elRef.offsetHeight + parentHeight;

        const options: ScrollToOptions = {
            top: elHeight,
            left: 0,
            behavior: "smooth",
        };

        window.scrollTo(options);
    };

    useEffect(() => {
        if (isRunning || prefersReducedMotion) {
            return;
        }

        const ref = window && window.setTimeout(onEnd, 500);
        return () => {
            ref && window.clearTimeout(ref);
        };
    }, [isRunning, prefersReducedMotion]);

    const lolRandom = Math.random() * delay + delay / 2;

    useInterval(
        () => {
            if (index >= text.length) {
                setIsRunning(false);
            } else {
                setIndex(index + 1);
            }
        },
        isRunning ? (lolRandom < 50 ? delay : lolRandom) : null,
    );

    const textWrapperClass = classNames("jkl-portal-delay-text__content", {
        "jkl-portal-delay-text__content--done": !isRunning,
    });

    return (
        <section ref={textRef} className="jkl-portal-delay-text">
            <div className={textWrapperClass}>{filteredText}</div>
        </section>
    );
};
