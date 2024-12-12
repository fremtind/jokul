import clsx from "clsx";
import React, {
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";
import { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { ChevronDownIcon } from "../icon/icons/ChevronDownIcon.js";
import { ChevronUpIcon } from "../icon/index.js";
import { ExpanderContext } from "./context.js";
import {
    ExpandableContext,
    ExpanderComponent,
    ExpanderProps,
} from "./types.js";

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
            setExpanderHeight(internalRef.current!.offsetHeight);
        });
        observer.observe(internalRef.current!);
        return () => observer.disconnect();
    }, [setExpanderHeight]);

    return (
        <El
            ref={internalRef}
            className={clsx(
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
