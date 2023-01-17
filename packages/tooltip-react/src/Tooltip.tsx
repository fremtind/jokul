import {
    useFloating,
    shift,
    flip,
    offset,
    arrow,
    useRole,
    useInteractions,
    useClick,
    useDismiss,
    useFocus,
} from "@floating-ui/react-dom-interactions";
import { QuestionIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
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
    const tooltipId = useId("jkl-tooltip");
    const [open, setOpen] = useState(false);
    const [buttonHasFocus, setButtonFocus] = useState(false);
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
        middleware: [offset(16), flip(), shift({ padding: 16 }), arrow({ element: arrowElement, padding: 20 })],
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        useClick(context),
        useDismiss(context, { referencePress: false }),
        useFocus(context, { enabled: open }), // Lukk når fokus flyttes vekk
        useRole(context, { role: "tooltip" }),
    ]);

    return (
        <span className={cn("jkl-tooltip", className)}>
            <span className="jkl-tooltip__wrapper">
                <button
                    aria-expanded={open}
                    aria-controls={tooltipId}
                    type="button"
                    className="jkl-tooltip__button"
                    {...getReferenceProps({
                        ref: reference,
                        onFocus: () => setButtonFocus(true),
                        onBlur: () => setButtonFocus(false),
                        onMouseOver: () => setButtonFocus(true),
                        onMouseLeave: () => setButtonFocus(false),
                    })}
                >
                    <QuestionIcon bold={buttonHasFocus} />
                    <span className="jkl-sr-only">{`${open ? "Skjul" : "Vis"} hjelpetekst`}</span>
                </button>
                <AnimatePresence>
                    {open && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeIn", duration: 0.1 }}
                            data-placement={placement}
                            aria-live="assertive"
                            className="jkl-tooltip__content"
                            {...getFloatingProps({
                                id: tooltipId,
                                ref: floating,
                                style: {
                                    position: strategy,
                                    top: y ?? "",
                                    left: x ?? "",
                                },
                            })}
                        >
                            <span
                                style={{
                                    whiteSpace: "normal", // Overstyr nowrap satt for å plassere tooltip riktig etter Label
                                }}
                            >
                                {content}
                            </span>
                            <span
                                aria-hidden
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
