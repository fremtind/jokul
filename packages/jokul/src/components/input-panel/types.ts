import type { InputHTMLAttributes } from "react";

export type InputPanelProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    value: string;
    type: "radio" | "checkbox";
    /**
     * Viser pris til høyre i panelet
     */
    amount?: string;
};
