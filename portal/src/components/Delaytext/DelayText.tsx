import React, { useState, useEffect, useRef, useMemo } from "react";
import classNames from "classnames";
import "./delay-text.scss";

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
};

export const DelayText = ({ text, delay }) => {
    const [index, setIndex] = useState(-1);
    const [isRunning, setIsRunning] = useState(true);
    const [animated, setIsAnimated] = useState(0);
    const noiseMap = Array.from(new Array(text.length)).map(() => Math.random() * 600);

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

    const containerClassName = classNames("jkl-delay-text", "jkl-delay-text__underscore", {
        "jkl-delay-text__underscore--done": !isRunning,
    });

    const textClassName = classNames("jkl-delay-text__text", {
        "jkl-delay-text__text--fadeout": !isRunning,
    });

    return (
        <div className={containerClassName}>
            {!!animated && animated === filteredText.length ? (
                <h1>YOLO SWAG</h1>
            ) : (
                filteredText.map((c, i) => (
                    <span
                        key={c + i}
                        className={textClassName}
                        style={{ transitionDelay: noiseMap[i] + "ms" }}
                        onTransitionEnd={() => setIsAnimated(animated + 1)}
                    >
                        {c}
                    </span>
                ))
            )}
        </div>
    );
};
