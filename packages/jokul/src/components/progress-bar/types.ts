import type { CSSProperties } from "react";
import type { Tracking } from "../types.js";

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
    /**
     * Hvor langt prosessen har kommet, mellom `aria-valuemin` og `aria-valuemax`.
     * Utelat verdien når fremdriften er ukjent. Da vises en linje som glir frem og tilbake.
     */
    "aria-valuenow"?: number;
    /**
     * @default 100
     */
    "aria-valuemax"?: number;
    style?: CSSProperties;
    trackingProps?: Tracking;
}
