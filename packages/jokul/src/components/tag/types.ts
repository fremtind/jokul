import { HTMLAttributes } from "react";
import { Density } from "../../core/types.js";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    density?: Density;
}
