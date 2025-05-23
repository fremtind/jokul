import type { ButtonHTMLAttributes } from "react";
import type { Density } from "../../core/types.js";

export interface IconButtonProps
    extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    density?: Density;
}
