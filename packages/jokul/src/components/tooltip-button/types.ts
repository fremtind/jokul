import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TooltipButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "content"> & {
    /**
     * Tittel på knappen som åpner infoen. 
     * Vises også i Popoveren.
     */
    title: string;
    /**
     * Innholdet i tooltipen.
     */
    content: ReactNode;
    /**
     * Plassering av tooltipen i forhold til triggeren. Tooltipen vil automatisk
     * bytte posisjon dersom det ikke er plass.
     * @default "top"
     */
    position?: "top" | "bottom" | "left" | "right";
    /**
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#value
     */
    popover?: "hint" | "auto" | "manual";
};
