import { Density } from "@fremtind/jkl-core";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface Props extends Exclude<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    density?: Density;
    className?: string;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
    icon?:
        | "arrow-left"
        | "arrow-right"
        | "plus"
        | "close"
        | "check"
        | "search"
        | "hamburger"
        | "calendar"
        | "arrow-north-east"
        | "arrow-up"
        | "arrow-down"
        | "chevron-down"
        | "chevron-left"
        | "chevron-right"
        | "chevron-up"
        | "copy"
        | "dots"
        | "question"
        | "info"
        | "error"
        | "warning"
        | "success"
        | "link";
    children: ReactNode;
}

export type ValidButtons = "primary" | "secondary" | "tertiary";
