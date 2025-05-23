import type { HTMLAttributes } from "react";
import type { Density } from "../../core/types.js";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    density?: Density;
}
