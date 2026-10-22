import type { HTMLAttributes } from "react";
import type { Tracking } from "../types.js";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "neutral" | "info" | "error" | "warning" | "success";
    tracking?: Tracking;
}
