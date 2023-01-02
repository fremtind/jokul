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
import { useId } from "@fremtind/jkl-react-hooks";
import { Fade } from "@fremtind/jkl-transitions-react";
import cn from "classnames";
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
                    {...getReferenceProps({ ref: reference })}
                >
                    <span aria-hidden="true">?</span>
                    <span className="jkl-sr-only">{`${open ? "Skjul" : "Vis"} hjelpetekst`}</span>
                </button>
                <Fade in={open} ref={floating}>
                    <span
                        aria-live="assertive"
                        id={tooltipId}
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
                            aria-hidden="true"
                            className="jkl-tooltip__arrow"
                            ref={arrowElement}
                            style={{
                                left: arrowX != null ? `${arrowX}px` : "",
                                top: arrowY != null ? `${arrowY}px` : "",
                            }}
                        />
                    </span>
                </Fade>
            </span>
        </span>
    );
};
