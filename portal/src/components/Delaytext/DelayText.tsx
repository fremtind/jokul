import React, { useState, useEffect, useRef, useMemo } from "react";
import classNames from "classnames";
import "./delay-text.scss";

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
}

export const DelayText: React.FunctionComponent<Props> = ({ text, delay, children }) => {
    const [index, setIndex] = useState(-1);
    const [isRunning, setIsRunning] = useState(true);
    const [animated, setIsAnimated] = useState(0);
    const noiseMap = Array.from(new Array(text.length)).map(() => Math.random() * 500 + 250);

    const filteredText = useMemo(() => {
        const splitText = text.split("");
        return splitText.filter((char, i) => {
            return i <= index;
        });
    }, [index]);

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

    const textWrapper = classNames("jkl-portal__delay-text__content", "jkl-portal__delay-text__underscore", {
        "jkl-portal__delay-text__underscore--hidden": !isRunning,
    });

    const textClassName = classNames("jkl-portal__delay-text__content-text", {
        "jkl-portal__delay-text__content-text--hidden": !isRunning,
    });

    return !!animated && animated === filteredText.length ? (
        <div className="jkl-portal__delay-text__ending">{children}</div>
    ) : (
        <div className="jkl-portal__delay-text">
            <div className={textWrapper}>
                {filteredText.map((c, i) => (
                    <span
                        key={c + i}
                        className={textClassName}
                        style={{ transitionDelay: noiseMap[i] + "ms" }}
                        onTransitionEnd={() => setIsAnimated(animated + 1)}
                    >
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
};
