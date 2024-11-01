import { useMergeRefs } from "@floating-ui/react";
import cn from "classnames";
import React, { forwardRef, type HTMLProps } from "react";
import { useTooltipContext } from "./Tooltip";

export const TooltipTrigger = forwardRef<HTMLElement, HTMLProps<HTMLElement>>(
    function TooltipTrigger({ children, className, ...props }, forwardedRef) {
        const { isOpen, setOpen, getReferenceProps, refs, triggerOn } =
            useTooltipContext();
        const childrenRef = (children as any).ref;
        const ref = useMergeRefs([
            childrenRef,
            refs.setReference,
            forwardedRef,
        ]);

        const handleBlur = () => {
            triggerOn === "click" && setOpen(false);
        };

        const filterMaterialSymbols = (
            maybeText: string | null | undefined,
        ) => {
            return maybeText?.replaceAll(/[\ue003-\uf8aa]/g, "");
        };

        const ariaLabel = [
            (refs.reference.current as HTMLElement | null)?.textContent,
            refs.description.current?.textContent,
        ]
            .map(filterMaterialSymbols)
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
                    className: cn(children.props.className, className),
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
                    className: cn(className, "jkl-tooltip-trigger"),
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
    },
);
