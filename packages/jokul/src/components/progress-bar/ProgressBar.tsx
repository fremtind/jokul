import React, { type FC } from "react";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { ProgressBarProps } from "./types.js";

export const calculatePercentage = (current: number, total: number): number =>
    total === 0 ? 0 : (current * 100) / total;

export const ProgressBar: FC<ProgressBarProps> = ({
    "aria-valuenow": value,
    "aria-valuemin": min = 0,
    "aria-valuemax": max = 100,
    title = "Fremdrift",
    className,
    tracking,
    ...rest
}) => {
    const trackerWidth = `${calculatePercentage(value, max)}%`;

    return (
        <div
            tabIndex={0}
            className={`jkl-progress-bar ${className ?? ""}`}
            role="progressbar"
            title={title}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            data-testid="jkl-progress-bar"
            {...rest}
            {...getExtraTrackingAttributes(tracking?.extra)}
            data-track-component-name={COMPONENT_NAMES.ProgressBar}
            data-track-id={tracking?.id}
            data-track-label={title}
            data-track-value={value}
            data-track-max={max}
        >
            <span
                className="jkl-progress-bar__tracker"
                style={{ width: trackerWidth }}
                data-testid="jkl-progress-bar__tracker"
            />
        </div>
    );
};
