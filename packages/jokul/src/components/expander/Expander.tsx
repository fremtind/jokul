import clsx from "clsx";
import {
    type ElementType,
    type ReactNode,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";
import type { Polymorphic } from "../../utilities/index.js";
import { ChevronDownIcon } from "../icon/icons/ChevronDownIcon.js";
import { ChevronUpIcon } from "../icon/index.js";
import { ExpanderContext } from "./context.js";
import type { ExpandableContext } from "./types.js";

export type ExpanderProps = {
    icon?: ReactNode;
    open?: boolean;
    expandDirection?: "up" | "down";
};

export function Expander<T extends ElementType = "summary">(
    props: Polymorphic<ExpanderProps, T>,
): React.JSX.Element {
    const {
        children,
        ref,
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

    const internalRef = useRef<HTMLElement>(null);
    useImperativeHandle(ref, () => internalRef.current, []);

    const isOpen = controlledOpen || contextOpen;

    const Chevron = expandDirection === "up" ? ChevronUpIcon : ChevronDownIcon;

    useEffect(() => {
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
}

Expander.displayName = "ExpandablePanel.Header";
