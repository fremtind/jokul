import type { InputHTMLAttributes, ReactNode } from "react";

export type InputPanelProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "children"
> & {
    label: string;
    type: "radio" | "checkbox";
    /**
     * Viser pris til høyre i panelet
     */
    amount?: string;
    description?: ReactNode;
    /**
     * @deprecated fjernet for å gi brukeren den fulle konteksten rundt valget hele tiden.
     */
    alwaysOpen?: boolean;
    /**
     * @deprecated bruk {@link amount} for tilsvarende funksjonalitet.
     */
    extraLabel?: string;
    /**
     * @deprecated bruk {@link description} for tilsvarende funksjonalitet.
     */
    children?: ReactNode;
};
