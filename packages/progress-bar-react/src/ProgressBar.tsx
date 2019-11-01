import React from "react";

interface Props {
    progress: { current: number; total: number };
    className?: string;
    progressRole?: string;
}

export const calculatePercentage = ({ current, total }: { current: number; total: number }) =>
    total === 0 ? 0 : (current * 100) / total;

/**
 *  Jøkul ProgressBar component
 * @param progress
 * @param className
 * @param progressRole if set screen readers will read this string, if not the percentage is read
 */
export const ProgressBar: React.FC<Props> = ({ progress, progressRole, className }) => {
    const width = `${calculatePercentage(progress)}%`;

    return (
        <aside
            className={`jkl-progress-bar ${className}`}
            role="progressbar"
            aria-valuenow={progress.current}
            aria-valuemin={0}
            aria-valuetext={progressRole}
            aria-valuemax={progress.total}
            data-testid="jkl-progress-bar"
        >
            <span className="jkl-progress-bar__tracker" style={{ width }} data-testid="jkl-progress-bar__tracker" />
        </aside>
    );
};
