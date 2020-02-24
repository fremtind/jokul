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

    const joinedText = useMemo(() => {
        const splitText = text.split("");
        const strFilteredByLength = splitText.filter((char, i) => {
            return i <= index;
        });

        return strFilteredByLength.join("");
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

    const textClassName = classNames("jkl-delay-text", "jkl-delay-text__text", {
        "jkl-delay-text__text--done": !isRunning,
    });

    return <div className={textClassName}>{joinedText}</div>;
};
