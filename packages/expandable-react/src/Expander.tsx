import { PolymorphicRef } from "@fremtind/jkl-core";
import { ChevronDownIcon, ChevronUpIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, {
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";
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

    const {
        open: contextOpen,
        onToggle,
        setExpanderHeight,
    } = useContext<ExpandableContext>(ExpanderContext);

    const internalRef = useRef<HTMLElement>();
    useImperativeHandle(ref, () => internalRef.current, [internalRef]);

    const isOpen = controlledOpen || contextOpen;

    const Chevron = expandDirection === "up" ? ChevronUpIcon : ChevronDownIcon;

    useEffect(() => {
        const observer = new ResizeObserver(function () {
            // Default to 64 if the height can not be read because that is
            // the height of the default summary element. In a custom component
            // this means that the focus ring might be slightly misaligned but
            // in most cases we will be able to read the ref correctly.
            setExpanderHeight(internalRef.current?.offsetHeight || 64);
        });
        if (internalRef.current) {
            observer.observe(internalRef.current);
            return () => observer.disconnect();
        }
        return () => {};
    }, [setExpanderHeight]);

    return (
        <El
            ref={internalRef}
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
