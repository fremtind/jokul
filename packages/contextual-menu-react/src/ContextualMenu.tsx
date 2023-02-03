import { autoUpdate } from "@floating-ui/react-dom";
import {
    useFloating,
    shift,
    flip,
    offset,
    useRole,
    useInteractions,
    useClick,
    useDismiss,
    useFocus,
} from "@floating-ui/react-dom-interactions";
import { DataTestAutoId } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, ReactNode, ChangeEventHandler, useRef, Children } from "react";

export interface ContextualMenuProps extends DataTestAutoId {
    className?: string;
    initiatorElement?: ReactNode;
    children: ReactNode;
    initialPlacement?: Placement;
    openOnHover?: boolean;
    onChange?: ChangeEventHandler;
    onFocus?: ChangeEventHandler;
    onBlur?: ChangeEventHandler;
}

export type Placement = "bottom-end" | "bottom-start" | "right-end" | "right-start";

export const ContextualMenu = ({
    className,
    initiatorElement,
    children,
    initialPlacement = "bottom-start",
    openOnHover = false,
}: ContextualMenuProps) => {
    const [open, setOpen] = useState(false);
    const contextualMenuId = useId("jkl-contextual-menu");
    const childrenArray = Children.toArray(children);
    const componentRef = useRef(null);

    const { x, y, reference, floating, placement, strategy, context } = useFloating({
        open,
        onOpenChange: setOpen,
        placement: initialPlacement,
        middleware: [offset(8), flip(), shift({ padding: 16 })],
        whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        useClick(context),
        useDismiss(context, { referencePress: false }),
        useFocus(context, { enabled: open }),
        useRole(context, { role: "menu" }),
    ]);

    return (
        <div className="jkl-contextual-menu" role="menu" ref={componentRef}>
            {initiatorElement && (
                <div
                    aria-expanded={open}
                    className={cn("jkl-contextual-menu__initiator", className)}
                    onMouseOver={openOnHover ? () => setOpen(true) : undefined}
                    onMouseLeave={openOnHover ? () => setOpen(false) : undefined}
                    onFocus={openOnHover ? () => setOpen(false) : undefined}
                    {...getReferenceProps({
                        ref: reference,
                    })}
                >
                    {initiatorElement}
                </div>
            )}

            <AnimatePresence>
                {open && (
                    <motion.span
                        className="jkl-contextual-menu__menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 0.1 }}
                        data-placement={placement}
                        aria-live="assertive"
                        {...getFloatingProps({
                            id: contextualMenuId,
                            ref: floating,
                            style: {
                                position: strategy,
                                top: y ?? "",
                                left: x ?? "",
                            },
                        })}
                    >
                        {childrenArray.map((child, i) => (
                            <span
                                key={`${i}-${child}`}
                                className="jkl-contextual-menu__menu-item"
                                onMouseOver={openOnHover ? () => setOpen(true) : undefined}
                                onMouseLeave={openOnHover ? () => setOpen(false) : undefined}
                                onFocus={openOnHover ? () => setOpen(false) : undefined}
                            >
                                {child}
                            </span>
                        ))}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    );
};
