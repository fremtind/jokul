import React, { useState, type CSSProperties, type FC, useEffect } from "react";
import type { CountdownProps } from "./types.js";

export const Countdown: FC<CountdownProps> = ({
    className,
    from,
    isPaused,
    ...rest
}) => {
    const [remainingSeconds, setRemainingSeconds] = useState(
        Math.floor(from / 1000),
    );

    useEffect(() => {
        if (remainingSeconds <= 0) {
            return;
        }

        setTimeout(() => {
            if (!isPaused) {
                setRemainingSeconds((sec) => sec - 1);
            }
        }, 1000);
    }, [isPaused, remainingSeconds]);

    return (
        <div
            className={`jkl-countdown ${className ?? ""}`}
            role="timer"
            data-testid="jkl-countdown"
            {...rest}
        >
            <span
                className="jkl-countdown__tracker"
                role="presentation"
                style={
                    {
                        "--duration": `${from}ms`,
                        "--play-state": isPaused ? "paused" : "running",
                    } as CSSProperties
                }
                data-testid="jkl-countdown__tracker"
            />
            <span className="jkl-sr-only">{remainingSeconds}</span>
        </div>
    );
};
