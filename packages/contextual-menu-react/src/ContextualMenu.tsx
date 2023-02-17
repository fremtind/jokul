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
import React, { useState, ReactNode, Children } from "react";

export interface ContextualMenuProps extends DataTestAutoId {
    className?: string;
    triggerElement?: ReactNode;
    children: ReactNode;
    initialPlacement?: Placement;
    openOnHover?: boolean;
}

export type Placement = "bottom-end" | "bottom-start" | "right-end" | "right-start";

export const ContextualMenu = ({
    className,
    triggerElement,
    children,
    initialPlacement = "bottom-start",
    openOnHover = false,
}: ContextualMenuProps) => {
    const [open, setOpen] = useState(false);
    const contextualMenuId = useId("jkl-contextual-menu");
    const childrenArray = Children.toArray(children);

    const { x, y, reference, floating, placement, strategy, context } = useFloating({
        open,
        onOpenChange: setOpen,
        placement: initialPlacement,
        middleware: [offset(2), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        useClick(context),
        useDismiss(context, { referencePress: false }),
        useFocus(context, { enabled: open }),
        useRole(context, { role: "menu" }),
    ]);

    return (
        <div className="jkl-contextual-menu" role="menu">
            {triggerElement && (
                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={contextualMenuId}
                    className={cn("jkl-contextual-menu__trigger-btn", className)}
                    onMouseOver={openOnHover ? () => setOpen(true) : undefined}
                    onMouseLeave={openOnHover ? () => setOpen(false) : undefined}
                    onFocus={openOnHover ? () => setOpen(true) : undefined}
                    {...getReferenceProps({
                        ref: reference,
                    })}
                >
                    {triggerElement}
                    <span className="jkl-sr-only">{`${open ? "Lukk" : "Vis"} meny`}</span>
                </button>
            )}

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="jkl-contextual-menu__menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 0.1 }}
                        data-placement={placement}
                        aria-live="assertive"
                        aria-hidden={!open}
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
                            <div
                                tabIndex={0}
                                role="menuitem"
                                aria-hidden={!open}
                                key={`${i}-${child}`}
                                className="jkl-contextual-menu__menu-item"
                                onMouseOver={openOnHover ? () => setOpen(true) : undefined}
                                onMouseLeave={openOnHover ? () => setOpen(false) : undefined}
                                onFocus={() => setOpen(true)}
                                onBlur={() => setOpen(false)}
                            >
                                {child}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
