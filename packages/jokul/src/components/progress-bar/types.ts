import type { CSSProperties } from "react";

export interface ProgressBarProps {
    id?: string;
    className?: string;
    /**
     * @default "Fremdrift"
     */
    title?: string;
    "aria-valuetext"?: string;
    /**
     * @default 0
     */
    "aria-valuemin"?: number;
    "aria-valuenow": number;
    /**
     * @default 100
     */
    "aria-valuemax"?: number;
    style?: CSSProperties;
}
