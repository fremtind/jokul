import React, { FC } from "react";

interface Progress {
    current: number;
    total: number;
}

interface Props {
    progress: Progress;
    title?: string;
    className?: string;
    progressTextValue?: string;
}

export const calculatePercentage = ({ current, total }: Progress): number =>
    total === 0 ? 0 : (current * 100) / total;

/**
 *  Jøkul ProgressBar component
 * @param progress
 * @param className
 * @param progressTextValue if set screen readers will read this string, if not the percentage is read
 */
export const ProgressBar: FC<Props> = ({ progress, title = "Fremdrift", progressTextValue, className }) => {
    const width = `${calculatePercentage(progress)}%`;

    return (
        <div
            className={`jkl-progress-bar ${className ?? ""}`}
            role="progressbar"
            title={title}
            aria-valuenow={progress.current}
            aria-valuemin={0}
            aria-valuetext={progressTextValue}
            aria-valuemax={progress.total}
            data-testid="jkl-progress-bar"
        >
            <span className="jkl-progress-bar__tracker" style={{ width }} data-testid="jkl-progress-bar__tracker" />
        </div>
    );
};
