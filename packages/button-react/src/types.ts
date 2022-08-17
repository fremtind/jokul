import { ButtonHTMLAttributes, ReactNode } from "react";

export interface Props extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    compact?: boolean;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    arrow?: "left" | "right";
    children: ReactNode;
}

export type ValidButtons = "primary" | "secondary" | "tertiary";
