import clsx from "clsx";
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
    trackingProps,
    ...rest
}) => {
    const isIndeterminate = value === undefined;

    return (
        // biome-ignore lint/a11y/useFocusableInteractive: En fremdriftsindikator er ikke interaktiv og skal ikke være et tabstopp
        <div
            className={clsx(
                "jkl-progress-bar",
                { "jkl-progress-bar--indeterminate": isIndeterminate },
                className,
            )}
            role="progressbar"
            title={title}
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            data-testid="jkl-progress-bar"
            {...rest}
            data-track-component-name={COMPONENT_NAMES.ProgressBar}
            data-track-id={trackingProps?.id}
            data-track-label={title}
            data-track-value={value}
            data-track-max={max}
            {...getExtraTrackingAttributes(trackingProps?.extra, rest)}
        >
            <span
                className="jkl-progress-bar__tracker"
                style={
                    isIndeterminate
                        ? undefined
                        : { width: `${calculatePercentage(value, max)}%` }
                }
                data-testid="jkl-progress-bar__tracker"
            />
        </div>
    );
};
