import {
    type UseFloatingReturn,
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
import React, {
    type FC,
    createContext,
    useContext,
    useRef,
    useState,
} from "react";
import type { WithChildren } from "../../core/types.js";
import type { TooltipProps } from "./types.js";

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

const useTooltip = ({
    initialOpen = false,
    placement = "top",
    delay = 250,
    triggerOn = "hover",
    onOpenChange,
}: TooltipProps): UseTooltipReturn => {
    const [isOpen, setOpen] = useState(initialOpen);
    const arrowElement = useRef<SVGSVGElement>(null);
    const description = useRef<HTMLElement | null>(null);
    const setDescription = (element: HTMLElement | null) => {
        description.current = element;
    };

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
        enabled: triggerOn === "hover",
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
