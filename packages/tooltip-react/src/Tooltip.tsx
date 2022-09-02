// eslint-disable-next-line import/no-unresolved
import { Placement } from "@floating-ui/core/src/types";
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

interface TooltipProps {
    content: ReactNode;
    initialPlacement?: Placement;
    buttonClassName?: string;
}

export const Tooltip = ({ content, initialPlacement = "top", buttonClassName }: TooltipProps) => {
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
        useDismiss(context, { referencePointerDown: false }),
        useHover(context),
        useFocus(context),
        useRole(context, { role: "tooltip" }),
    ]);

    return (
        <>
            <button
                type="button"
                className={cn("jkl-tooltip__button", buttonClassName)}
                {...getReferenceProps({ ref: reference })}
            >
                ?<span className="jkl-sr-only">Se hjelpetekst</span>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeInOut", duration: 0.25 }}
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
        </>
    );
};
