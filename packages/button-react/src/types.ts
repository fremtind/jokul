import { Density } from "@fremtind/jkl-core";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface Props extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    density?: Density;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    children: ReactNode;
}

export type ValidButtons = "primary" | "secondary" | "tertiary";
