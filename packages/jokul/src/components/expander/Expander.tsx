import clsx from "clsx";
import React, {
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { ChevronDownIcon } from "../icon/icons/ChevronDownIcon.js";
import { ChevronUpIcon } from "../icon/index.js";
import { ExpanderContext } from "./context.js";
import type {
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
    useImperativeHandle(ref, () => internalRef.current, []);

    // Når `open`-propen er satt eier konsumenten state-en og Expander er
    // kontrollert. Da skal vi ikke arve verken visning eller toggle-callback
    // fra et omkringliggende ExpandablePanel — ellers ville klikk på en
    // nestet Expander også togglet panelet.
    const isControlled = typeof controlledOpen === "boolean";
    const isOpen = isControlled ? controlledOpen : contextOpen;

    const Chevron = expandDirection === "up" ? ChevronUpIcon : ChevronDownIcon;

    useEffect(() => {
        // Kontrollert Expander skal være helt isolert fra et eventuelt
        // omkringliggende ExpandablePanel — hverken state, klikk eller
        // høyde-rapportering skal arve oppover. Hopp over måling slik at
        // panel-headerens fokuscontainer ikke får raden sin høyde.
        if (isControlled) return;

        const observer = new ResizeObserver(() => {
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
    }, [isControlled, setExpanderHeight]);

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
                if (!isControlled) {
                    onToggle();
                }
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

Expander.displayName = "ExpandablePanel.Header";
