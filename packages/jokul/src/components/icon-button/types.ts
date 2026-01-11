import type { ButtonHTMLAttributes } from "react";

export interface IconButtonProps
    extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {}
