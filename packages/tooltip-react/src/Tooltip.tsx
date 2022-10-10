import {
    useFloating,
    shift,
    flip,
    offset,
    arrow,
    useHover,
    useFocus,
    useRole,
    useInteractions,
    useClick,
    useDismiss,
} from "@floating-ui/react-dom-interactions";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import React, { ReactNode, useRef, useState } from "react";

export type Placement = "top" | "left" | "right" | "top-end" | "top-start";

export interface TooltipProps {
    className?: string;
    initialPlacement?: Placement;
    content: ReactNode;
}

export const Tooltip = ({ content, initialPlacement = "top", className }: TooltipProps) => {
    const [open, setOpen] = useState(false);
    const arrowElement = useRef<HTMLDivElement>(null);
    const {
        x,
        y,
        reference,
        floating,
        placement,
        strategy,
        context,
        middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
    } = useFloating({
        open,
        onOpenChange: setOpen,
        placement: initialPlacement,
        middleware: [offset(16), flip(), shift({ padding: 16 }), arrow({ element: arrowElement, padding: 8 })],
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        useClick(context),
        useDismiss(context, { referencePress: false }),
        useHover(context),
        useFocus(context),
        useRole(context, { role: "tooltip" }),
    ]);

    return (
        <span className={cn("jkl-tooltip", className)}>
            <span className="jkl-tooltip__wrapper">
                <button type="button" className="jkl-tooltip__button" {...getReferenceProps({ ref: reference })}>
                    <span aria-hidden="true">?</span>
                    <span className="jkl-sr-only">Hjelpetekst</span>
                </button>
                <AnimatePresence>
                    {open && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeIn", duration: 0.1 }}
                            data-placement={placement}
                            className="jkl-tooltip__content"
                            {...getFloatingProps({
                                ref: floating,
                                style: {
                                    position: strategy,
                                    top: y ?? "",
                                    left: x ?? "",
                                },
                            })}
                        >
                            {content}
                            <span
                                className="jkl-tooltip__arrow"
                                ref={arrowElement}
                                style={{
                                    left: arrowX != null ? `${arrowX}px` : "",
                                    top: arrowY != null ? `${arrowY}px` : "",
                                }}
                            />
                        </motion.span>
                    )}
                </AnimatePresence>
            </span>
        </span>
    );
};
