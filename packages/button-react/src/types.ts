import { ButtonHTMLAttributes } from "react";

export interface Props extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    forceCompact?: boolean;
    /** @deprecated */
    inverted?: boolean;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
}

export type ValidButtons = "primary" | "secondary" | "tertiary";
