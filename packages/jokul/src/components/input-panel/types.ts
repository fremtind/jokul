import type { InputHTMLAttributes, ReactNode } from "react";

export type InputPanelProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children"
> & {
    label: string;
    name: string;
    value: string;
    type: "radio" | "checkbox";
    /**
     * Viser pris til høyre i panelet
     */
    amount?: string;
    description?: ReactNode;
};
