import React, { type FC } from "react";
import { ProgressBarProps } from "./types.js";

export const calculatePercentage = (current: number, total: number): number =>
    total === 0 ? 0 : (current * 100) / total;

export const ProgressBar: FC<ProgressBarProps> = ({
    "aria-valuenow": value,
    "aria-valuemin": min = 0,
    "aria-valuemax": max = 100,
    title = "Fremdrift",
    className,
    ...rest
}) => {
    const trackerWidth = `${calculatePercentage(value, max)}%`;

    return (
        <div
            className={`jkl-progress-bar ${className ?? ""}`}
            role="progressbar"
            title={title}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            data-testid="jkl-progress-bar"
            {...rest}
        >
            <span
                className="jkl-progress-bar__tracker"
                style={{ width: trackerWidth }}
                data-testid="jkl-progress-bar__tracker"
            />
        </div>
    );
};
