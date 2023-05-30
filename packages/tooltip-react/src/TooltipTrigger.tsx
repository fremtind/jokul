import { useMergeRefs } from "@floating-ui/react";
import cn from "classnames";
import React, { forwardRef, type HTMLProps } from "react";
import { useTooltipContext } from "./Tooltip";

export const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(function TooltipTrigger(
    { children, className, ...props },
    forwardedRef,
) {
    const { isOpen, setOpen, getReferenceProps, refs, triggerOn } = useTooltipContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([childrenRef, refs.setReference, forwardedRef]);

    const WrapperElement = triggerOn === "click" ? "button" : "span";
    const handleBlur = () => {
        triggerOn === "click" && setOpen(false);
    };

    if (React.isValidElement(children)) {
        return React.cloneElement(
            children,
            getReferenceProps({
                ref,
                ...children.props,
                ...props,
                className: cn(children.props.className, className),
                "data-tooltip-shown": isOpen,
                style: { ...children.props.style },
                tabIndex: triggerOn === "click" ? 0 : undefined,
                onBlur: () => {
                    console.log(children.props.onBlur);
                    children.props.onBlur && children.props.onBlur();
                    handleBlur();
                },
            }),
        );
    }

    return (
        <WrapperElement
            className={cn(className, "jkl-tooltip-trigger")}
            data-tooltip-shown={isOpen}
            {...getReferenceProps({
                type: triggerOn === "click" ? "button" : undefined,
                ref,
                onBlur: handleBlur,
                ...props,
            })}
        >
            {children}
        </WrapperElement>
    );
});
