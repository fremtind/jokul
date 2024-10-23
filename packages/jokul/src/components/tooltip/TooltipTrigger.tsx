import { useMergeRefs } from "@floating-ui/react";
import clsx from "clsx";
import React, { forwardRef, type HTMLProps } from "react";
import { useTooltipContext } from "./Tooltip.js";

export const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(function TooltipTrigger(
    { children, className, ...props },
    forwardedRef,
) {
    const { isOpen, setOpen, getReferenceProps, refs, triggerOn } = useTooltipContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([childrenRef, refs.setReference, forwardedRef]);

    const handleBlur = () => {
        triggerOn === "click" && setOpen(false);
    };

    const ariaLabel = [
        (refs.reference.current as HTMLElement | null)?.textContent,
        refs.description.current?.textContent,
    ]
        .filter(Boolean)
        .join(". ");

    if (React.isValidElement(children)) {
        return React.cloneElement(
            children,
            getReferenceProps({
                ref,
                "aria-label": ariaLabel,
                ...children.props,
                ...props,
                className: clsx(children.props.className, className),
                "data-tooltip-shown": isOpen,
                style: { ...children.props.style },
                tabIndex: triggerOn === "click" ? 0 : undefined,
                onBlur: () => {
                    children.props.onBlur && children.props.onBlur();
                    handleBlur();
                },
            }),
        );
    }

    return (
        <button
            data-tooltip-shown={isOpen}
            {...getReferenceProps({
                className: clsx(className, "jkl-tooltip-trigger"),
                // Sørg for at vi ikke sender inn skjemaer ved klikk på knappen
                type: "button",
                ref,
                onBlur: handleBlur,
                "aria-label": ariaLabel,
                ...props,
            })}
        >
            {children}
        </button>
    );
});
