import { ButtonHTMLAttributes } from "react";
import { Density } from "../../core/types.js";

export interface IconButtonProps
    extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    density?: Density;
}
