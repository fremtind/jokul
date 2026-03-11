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
     *
     * @deprecated siden teksten ikke lenger skal vises vil heller ikke posisjon være relevant
     */
    iconPosition?: "left" | "right";
    /**
     * Teksten på knappen som åpner help-popover.
     */
    buttonText: string;
    /**
     * @default false
     *
     * @deprecated dersom du vil vise tekst knyttet til en hjelpetekst bruk heller Button
     */
    showButtonText?: boolean;
    /**
     * Innholdet i tooltipen.
     */
    children: ReactNode;
};
