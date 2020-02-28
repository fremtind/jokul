import React, { useState, useEffect, useRef, useMemo, forwardRef } from "react";
import { findDOMNode } from "react-dom";
import classNames from "classnames";
import "./delay-text.scss";
import { VisibleDetector } from "../VisibleDetector";

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const tick = () => {
            if (savedCallback && savedCallback.current) {
                savedCallback.current();
            }
        };

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

interface Props {
    text: string;
    delay: number;
    hidden?: boolean;
    ref: React.MutableRefObject<HTMLDivElement | null>;
}

export const DelayText: React.FunctionComponent<Props> = ({ text, delay, children }) => {
    const [index, setIndex] = useState(-1);
    const [isRunning, setIsRunning] = useState(true);
    const [charactersAnimated, setCharactersAnimated] = useState(0);
    const [hidden, setHidden] = useState(false);
    const noiseMap = Array.from(new Array(text.length)).map(() => Math.random() * 500 + 250);
    const textRef = useRef();

    const filteredText = useMemo(() => {
        const splitText = text.split("");
        return splitText.filter((char, i) => {
            return i <= index;
        });
    }, [index]);

    const onEnd = () => {
        const elRef = textRef.current;

        if (!elRef) {
            return;
        }

        const parentEl = elRef.parentElement;

        let elHeight = elRef.offsetHeight;
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("margin-top"));
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("margin-bottom"));
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("padding-top"));
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("margin-bottom"));
        elHeight += parseInt(window.getComputedStyle(parentEl).getPropertyValue("padding-top"));

        const options = {
            top: elHeight,
            left: 0,
            behavior: "smooth",
        };

        window.setTimeout(() => {
            if (window.scrollY > elHeight / 2) {
                return;
            }
            window.scrollTo(options);
        }, 500);
    };

    useEffect(() => {
        if (filteredText.length === text.length) {
            onEnd();
        }
    }, [filteredText, text]);

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

    const onLeft = (e) => {
        //setHidden(true);
    };

    const delayTextClassName = classNames("jkl-portal__delay-text", {
        "jkl-portal__delay-text--hidden": hidden,
    });

    const textWrapper = classNames("jkl-portal__delay-text__content", "jkl-portal__delay-text__underscore", {
        "jkl-portal__delay-text__underscore--hidden": !isRunning,
    });

    const textClassName = classNames("jkl-portal__delay-text__content-text", {
        // "jkl-portal__delay-text__content-text--hidden": !isRunning,
    });

    const childrenClassName = classNames("jkl-portal__delay-text__children");

    return (
        <>
            <VisibleDetector
                onLeave={(e) => onLeft(e)}
                threshold={[0]}
                ref={textRef}
                render={(ref) => (
                    <div ref={ref} className={delayTextClassName}>
                        <div className={textWrapper}>
                            {filteredText.map((c, i) => (
                                <span
                                    key={c + i}
                                    className={textClassName}
                                    style={{ transitionDelay: noiseMap[i] + "ms" }}
                                    onTransitionEnd={() => setCharactersAnimated(charactersAnimated + 1)}
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            />
            <div className={childrenClassName}>{children}</div>
        </>
    );
};
