import { ButtonHTMLAttributes } from "react";

export interface Props extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    forceCompact?: boolean;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    arrow?: "left" | "right";
}

export type ValidButtons = "primary" | "secondary" | "tertiary";
