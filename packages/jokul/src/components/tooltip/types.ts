import type { Placement } from "@floating-ui/react";
import type { HTMLProps, ReactNode } from "react";

export interface PopupTipProps
    extends Omit<TooltipProps, "triggerOn" | "children"> {
    /**
     * Innholdet i tooltipet som vises
     */
    content: ReactNode;
    /**
     * Eventuelle props du vil sette på trigger-knappen for tooltipet
     */
    triggerProps?: Omit<HTMLProps<HTMLButtonElement>, "children" | "type">;
}

export type TooltipPlacement = Extract<
    Placement,
    "top-start" | "top-end" | "left" | "right" | "top"
>;

export interface TooltipProps {
    /**
     * Sett til true dersom du ønsker at tooltipen skal være åpen som default
     * @default false
     */
    initialOpen?: boolean;
    /**
     * En funksjon som skal kalles når Tooltip åpnes eller lukkes
     * @param open Hvorvidt tooltip endres til å være åpen eller ikke
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Plassering av tooltipen i forhold til triggeren. Tooltipen vil automatisk
     * bytte posisjon dersom det ikke er plass.
     * @default "top"
     */
    placement?: TooltipPlacement;
    /**
     * Valgfri forsinkelse før tooltipen åpner. Ignoreres dersom triggerOn er satt til "click"
     * @default 250
     */
    delay?: number;
    /**
     * Angir om tooltipen skal åpnes ved klikk eller hover
     * @default "hover"
     */
    triggerOn?: "click" | "hover";
}
