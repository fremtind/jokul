import type { HTMLAttributes } from "react";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "neutral" | "info" | "error" | "warning" | "success";
}
