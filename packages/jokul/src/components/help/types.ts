import type { ReactNode } from "react";
import type { ButtonProps } from "../button/index.js";

export type HelpProps = Omit<ButtonProps<"button">, "iconPosition" | "icon"> & {
    /**
     * Initiell plassering av popoveren i forhold til triggeren.
     * @default "top"
     */
    position?: "top" | "bottom" | "left" | "right";
    /**
     * @default "left"
     */
    iconPosition?: "left" | "right";
    /**
     * Teksten på knappen som åpner help-popover.
     */
    buttonText: string;
    /**
     * @default false
     */
    showButtonText?: boolean;
    /**
     * Innholdet i tooltipen.
     */
    children: ReactNode;
};
