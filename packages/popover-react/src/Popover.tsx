import {
    autoUpdate,
    flip,
    offset,
    Placement,
    shift,
    Strategy,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useMergeRefs,
    useRole,
} from "@floating-ui/react";
import { Props as UseClickProps } from "@floating-ui/react/src/hooks/useClick";
import { Props as UseFocusProps } from "@floating-ui/react/src/hooks/useFocus";
import { Props as UseHoverProps } from "@floating-ui/react/src/hooks/useHover";
import { Props as UseRoleProps } from "@floating-ui/react/src/hooks/useRole";
import classNames from "classnames";
import React, { CSSProperties, HTMLAttributes, useLayoutEffect } from "react";
import PopoverContent, { PopoverContentProps } from "./PopoverContent";

interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Popover content.
     */
    children: React.ReactNode;
    /**
     * Padding of the popover element.
     * @default "none"
     */
    padding?: 8 | 16 | 24;
    /**
     * Whether the popover is open or not.
     */
    open: boolean;
    /**
     * onClose callback.
     */
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    /**
     * Strategy for positioning the floating element.
     * @default absolute
     * @see https://floating-ui.com/docs/useFloating#strategy
     */
    strategy?: Strategy;
    /**
     * Placement of the floating element.
     * @default bottom-start
     * @see https://floating-ui.com/docs/useFloating#placement
     */
    placement?: Placement;
    /**
     * Offset of the floating element.
     * @see https://floating-ui.com/docs/offset
     * @default 4
     */
    offset?: number;
    /** Hover options
     * @see {@link UseHoverProps}
     * @see https://floating-ui.com/docs/useHover
     * @default { enabled: false }
     */
    useHoverProps?: UseHoverProps;
    /** Focus options
     * @see {@link UseFocusProps}
     * @see https://floating-ui.com/docs/useFocus
     * @default { enabled: false }
     */
    useFocusProps?: UseFocusProps;
    /** Click options
     * @see {@link UseClickProps}
     * @see https://floating-ui.com/docs/useClick
     * @default { enabled: false }
     */
    useClickProps?: UseClickProps;
    /**
     * Role options
     * @see {@link UseRoleProps}
     * @see https://floating-ui.com/docs/useRole
     * @default { enabled: true, role: "dialog" }
     */
    useRoleProps?: UseRoleProps;
    /**
     * Reference to the element the popover should be anchored to.
     */
    referenceElement: (props: { ref: React.Ref<HTMLButtonElement> }) => React.ReactNode;
}

interface PopoverComponent extends React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>> {
    Content: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(function Popover(
    {
        className,
        children,
        open: isOpen,
        padding = "none",
        strategy = "absolute",
        placement = "bottom-start",
        useHoverProps: { enabled: enableHover = false, ...restHoverProps } = {},
        useFocusProps: { enabled: enableFocus = false, ...restFocusProps } = {},
        useClickProps: { enabled: enableClick = false, ...restClickProps } = {},
        useRoleProps: { enabled: enableRole = true, ...restRoleProps } = {},
        onClose,
        referenceElement,
        ...restProps
    },
    ref,
) {
    const {
        context,
        update,
        placement: flPlacement,
        refs,
        floatingStyles,
        elements,
    } = useFloating({
        open: isOpen,
        strategy,
        placement,
        middleware: [offset(4), flip({ padding: 5, fallbackPlacements: ["bottom", "top"] }), shift({ padding: 12 })],
        onOpenChange: onClose,
    });

    const role = useRole(context, { enabled: enableRole, ...restRoleProps });

    const click = useClick(context, { enabled: enableClick, ...restClickProps });

    const hover = useHover(context, { enabled: enableHover, ...restHoverProps });

    const focus = useFocus(context, { enabled: enableFocus, ...restFocusProps });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, click, role]);

    const floatingRef = useMergeRefs([refs.setFloating, ref]);

    useDismiss(context);

    useLayoutEffect(() => {
        if (!isOpen || !elements.reference || !elements.floating) return;

        const cleanup = autoUpdate(elements.reference, elements.floating, update);

        return () => cleanup();
    }, [elements, update, isOpen]);

    return (
        <>
            {referenceElement({ ref: refs.setReference, ...getReferenceProps() })}
            <div
                ref={floatingRef}
                {...restProps}
                className={classNames("jkl-popover", className, {
                    "jkl-popover--hidden": !isOpen || !referenceElement,
                })}
                style={
                    {
                        ...restProps.style,
                        ...floatingStyles,
                        "--popover-padding": `var(--jkl-spacing-${padding})`,
                    } as CSSProperties
                }
                data-placement={flPlacement}
                aria-hidden={!isOpen || !referenceElement}
                {...getFloatingProps()}
            >
                {children}
            </div>
        </>
    );
}) as PopoverComponent;

Popover.Content = PopoverContent;

export default Popover;
