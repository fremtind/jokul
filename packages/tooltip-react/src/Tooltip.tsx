import {
    type Placement,
    UseFloatingReturn,
    arrow,
    autoUpdate,
    flip,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
} from "@floating-ui/react";
import { type WithChildren } from "@fremtind/jkl-core";
import React, { FC, createContext, useContext, useRef, useState } from "react";

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

type UseTooltipReturn = {
    triggerOn: NonNullable<TooltipProps["triggerOn"]>;
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    arrowElement: React.RefObject<SVGSVGElement>;
    refs: {
        description: React.MutableRefObject<HTMLElement | null>;
        setDescription: (element: HTMLElement | null) => void;
    } & UseFloatingReturn["refs"];
} & UseFloatingReturn &
    ReturnType<typeof useInteractions>;

export const useTooltip = ({
    initialOpen = false,
    placement = "top",
    delay = 250,
    triggerOn = "hover",
    onOpenChange,
}: TooltipProps): UseTooltipReturn => {
    const [isOpen, setOpen] = useState(initialOpen);
    const arrowElement = useRef<SVGSVGElement>(null);
    const description = useRef<HTMLElement | null>(null);
    const setDescription = (element: HTMLElement | null) =>
        (description.current = element);

    const data = useFloating({
        open: isOpen,
        onOpenChange: (open) => {
            onOpenChange?.(open);
            setOpen(open);
        },
        placement,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(16),
            flip(),
            shift({ padding: 16 }),
            arrow({ element: arrowElement, padding: 8 }),
        ],
    });

    const role = useRole(data.context, { role: "tooltip" });
    const dismiss = useDismiss(data.context);
    const click = useClick(data.context, {
        enabled: triggerOn === "click",
    });
    const hover = useHover(data.context, {
        enabled: triggerOn === "hover",
        delay: isOpen ? 0 : delay,
    });
    const focus = useFocus(data.context, {
        enabled: triggerOn === "click" ? isOpen : true,
    });

    const interactions = useInteractions([dismiss, focus, role, click, hover]);

    return {
        triggerOn,
        isOpen,
        setOpen,
        arrowElement,
        ...data,
        refs: {
            ...data.refs,
            description,
            setDescription,
        },
        ...interactions,
    };
};

export type TooltipContext = ReturnType<typeof useTooltip> | null;

const tooltipContext = createContext<TooltipContext>(null);

export const TooltipProvider = tooltipContext.Provider;

export const useTooltipContext = () => {
    const context = useContext(tooltipContext);

    if (context === null) {
        throw new Error(
            "Tooltip-komponentene kan kun brukes inne i <Tooltip />",
        );
    }

    return context;
};

export const Tooltip: FC<TooltipProps & WithChildren> = ({
    children,
    ...options
}) => {
    const tooltip = useTooltip(options);

    return <TooltipProvider value={tooltip}>{children}</TooltipProvider>;
};
