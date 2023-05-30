import {
    useFloating,
    type Placement,
    autoUpdate,
    offset,
    flip,
    shift,
    arrow,
    useInteractions,
    useClick,
    useDismiss,
    useFocus,
    useRole,
    useHover,
} from "@floating-ui/react";
import { type WithChildren } from "@fremtind/jkl-core";
import React, { FC, createContext, useContext, useRef, useState } from "react";

export type TooltipPlacement = Extract<Placement, "top-start" | "top-end" | "left" | "right" | "top">;

export interface TooltipProps {
    /**
     * Sett til true dersom du ønsker at tooltipen skal være åpen som default
     * @default false
     */
    initialOpen?: boolean;
    /**
     * Plassering av tooltipen i forhold til triggeren. Tooltipen vil automatisk
     * bytte posisjon dersom det ikke er plass.
     * @default "top"
     */
    placement?: TooltipPlacement;
    /**
     * Valgfri forsinkelse før tooltipen åpner. Ignoreres dersom triggerOn er satt til "click"
     * @default 0
     */
    delay?: number;
    /**
     * Angir om tooltipen skal åpnes ved klikk eller hover
     * @default "hover"
     */
    triggerOn?: "click" | "hover";
}

export const useTooltip = ({
    initialOpen = false,
    placement = "top",
    delay = 0,
    triggerOn = "hover",
}: TooltipProps) => {
    const [isOpen, setOpen] = useState(initialOpen);
    const arrowElement = useRef<HTMLElement>(null);

    const data = useFloating({
        open: isOpen,
        onOpenChange: setOpen,
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [offset(16), flip(), shift({ padding: 16 }), arrow({ element: arrowElement, padding: 20 })],
    });

    const dismiss = useDismiss(data.context, { referencePress: false });
    const role = useRole(data.context, { role: "tooltip" });
    const click = useClick(data.context);
    const hover = useHover(data.context, { enabled: triggerOn === "hover", delay: isOpen ? 0 : delay });
    const focus = useFocus(data.context, { enabled: triggerOn === "click" ? isOpen : true });

    const interactions = useInteractions([dismiss, focus, role, click, hover]);

    return {
        triggerOn,
        isOpen,
        setOpen,
        arrowElement,
        ...data,
        ...interactions,
    };
};

export type TooltipContext = ReturnType<typeof useTooltip> | null;

const tooltipContext = createContext<TooltipContext>(null);

export const TooltipProvider = tooltipContext.Provider;

export const useTooltipContext = () => {
    const context = useContext(tooltipContext);

    if (context === null) {
        throw new Error("Tooltip-komponentene kan kun brukes inne i <Tooltip />");
    }

    return context;
};

export const Tooltip: FC<TooltipProps & WithChildren> = ({ children, ...options }) => {
    const tooltip = useTooltip(options);

    return <TooltipProvider value={tooltip}>{children}</TooltipProvider>;
};
