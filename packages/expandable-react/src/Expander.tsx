import { PolymorphicRef } from "@fremtind/jkl-core";
import { ChevronDownIcon, ChevronUpIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { useContext } from "react";
import { ExpanderContext } from "./context";
import { ExpandableContext, ExpanderComponent, ExpanderProps } from "./types";

export const Expander = React.forwardRef(function Expander<
    ElementType extends React.ElementType = "summary",
>(props: ExpanderProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        children,
        as = "summary",
        open: controlledOpen,
        icon,
        className,
        onClick,
        expandDirection,
        ...rest
    } = props;
    const El = as;

    const { open: contextOpen, onToggle } =
        useContext<ExpandableContext>(ExpanderContext);

    const isOpen = controlledOpen || contextOpen;

    const Chevron = expandDirection === "up" ? ChevronUpIcon : ChevronDownIcon;

    return (
        <El
            ref={ref}
            className={cn(
                "jkl-expander",
                {
                    "jkl-expander--open": isOpen,
                },
                className,
            )}
            // If the consumer uses the Expander as a button but does not
            // supply a type, then we set type to "button"
            {...(as === "button" ? { type: rest.type || "button" } : {})}
            onClick={(e) => {
                e.preventDefault();
                onToggle();
                onClick?.(e);
            }}
            {...rest}
        >
            {icon || null}
            <span className="jkl-expander__label">{children}</span>
            <Chevron className="jkl-expander__chevron" />
        </El>
    );
}) as ExpanderComponent;
