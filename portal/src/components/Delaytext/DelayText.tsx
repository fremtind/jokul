import React, { useState, useEffect, useRef, useMemo } from "react";
import classNames from "classnames";
import "./delay-text.scss";
import { VisibleDetector } from "../VisibleDetector";

const useInterval = (callback: () => void, delay: number | null) => {
    const savedCallback = useRef<() => void>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    // @ts-ignore: should be improved, temporarily escaped
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
}

export const DelayText: React.FunctionComponent<Props> = ({ text, delay, children }) => {
    const [index, setIndex] = useState(-1);
    const [isRunning, setIsRunning] = useState(true);
    const [charactersAnimated, setCharactersAnimated] = useState(0);
    const [hidden] = useState(false);
    const noiseMap = Array.from(new Array(text.length)).map(() => Math.random() * 500 + 250);
    const textRef = useRef();

    const filteredText = useMemo(() => {
        const splitText = text.split("");
        return splitText.filter((char, i) => {
            return i <= index;
        });
    }, [index, text]);

    const onEnd = () => {
        const elRef = (textRef.current as unknown) as {
            parentElement: HTMLElement;
            offsetHeight: number;
            getPropertyValue: (s: string) => number;
        };

        if (!elRef) {
            return;
        }

        const parentEl = elRef.parentElement;

        let elHeight = elRef.offsetHeight;
        // @ts-ignore: should be improved, temporarily escaped
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("margin-top"));
        // @ts-ignore: should be improved, temporarily escaped
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("margin-bottom"));
        // @ts-ignore: should be improved, temporarily escaped
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("padding-top"));
        // @ts-ignore: should be improved, temporarily escaped
        elHeight += parseInt(window.getComputedStyle(elRef).getPropertyValue("margin-bottom"));
        elHeight += parseInt(window.getComputedStyle(parentEl).getPropertyValue("padding-top"));

        const options: ScrollToOptions = {
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

    const onLeft = () => {
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
                onLeave={() => onLeft()}
                threshold={[0]}
                // @ts-ignore: should be improved, temporarily escaped
                ref={textRef}
                // @ts-ignore: should be improved, temporarily escaped
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
