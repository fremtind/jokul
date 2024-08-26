import {
    type Placement,
    type Strategy,
    useFloating,
    useFocus,
    useHover,
    useClick,
    useDismiss,
    autoUpdate,
    useRole,
    useMergeRefs,
    offset,
    flip,
    shift,
    useInteractions,
    FloatingPortal,
    FloatingFocusManager,
} from "@floating-ui/react";
import { Props as UseClickProps } from "@floating-ui/react/src/hooks/useClick";
import { Props as UseFocusProps } from "@floating-ui/react/src/hooks/useFocus";
import { Props as UseHoverProps } from "@floating-ui/react/src/hooks/useHover";
import { Props as UseRoleProps } from "@floating-ui/react/src/hooks/useRole";
import classNames from "classnames";
import * as React from "react";
import { Button } from "../../button-react/src";

interface PopoverOptions {
    /**
     * Initial open state of the popover.
     * @default false
     * @see https://floating-ui.com/docs/useFloating#open
     */
    initialOpen?: boolean;
    /**
     * Determines if focus is “modal”, meaning focus is fully trapped inside the floating element and outside content cannot be accessed. This includes screen reader virtual cursors.
     * @see https://floating-ui.com/docs/floatingfocusmanager#modal
     * @default true
     */
    modal?: boolean;
    /**
     * Controlled open state of the popover.
     * @see https://floating-ui.com/docs/useFloating#open
     */
    open?: boolean;
    /**
     * Callback to change the open state of the popover.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Offset of the floating element.
     * @see https://floating-ui.com/docs/offset
     * @default 4
     */
    offset?: number;
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
    /** Hover options
     * @see {@link UseHoverProps}
     * @see https://floating-ui.com/docs/useHover
     * @default { enabled: false }
     */
    hoverProps?: UseHoverProps;
    /** Focus options
     * @see {@link UseFocusProps}
     * @see https://floating-ui.com/docs/useFocus
     * @default { enabled: false }
     */
    focusProps?: UseFocusProps;
    /** Click options
     * @see {@link UseClickProps}
     * @see https://floating-ui.com/docs/useClick
     * @default { enabled: false }
     */
    clickProps?: UseClickProps;
    /**
     * Role options
     * @see {@link UseRoleProps}
     * @see https://floating-ui.com/docs/useRole
     * @default { enabled: true, role: "dialog" }
     */
    roleProps?: UseRoleProps;
    /**
     * Floating options
     * @see https://floating-ui.com/docs/useFloating
     */
}

const usePopover = ({
    initialOpen = false,
    strategy = "absolute",
    placement = "bottom-start",
    offset: _offset = 4,
    modal = false,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
    hoverProps,
    focusProps,
    clickProps,
    roleProps,
}: PopoverOptions) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        open,
        placement,
        strategy,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(_offset),
            flip({ crossAxis: placement.includes("-"), padding: 5, fallbackPlacements: ["bottom", "top"] }),
            shift({ padding: 12 }),
        ],
    });

    const context = data.context;

    const role = useRole(context, {
        ...roleProps,
        enabled: roleProps?.enabled ?? true,
        role: roleProps?.role ?? "dialog",
    });

    const click = useClick(context, {
        ...clickProps,
        enabled: (controlledOpen || clickProps?.enabled) ?? false,
    });
    const hover = useHover(context, { ...hoverProps, enabled: hoverProps?.enabled ?? false });
    const focus = useFocus(context, { ...focusProps, enabled: focusProps?.enabled ?? false });
    const dismiss = useDismiss(context);

    const interactions = useInteractions([click, dismiss, focus, hover, , role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data,
            modal,
        }),
        [open, setOpen, interactions, data, modal],
    );
};

type PopoverContextType = ReturnType<typeof usePopover> | null;

const PopoverContext = React.createContext<PopoverContextType>(null);

const usePopoverContext = () => {
    const context = React.useContext(PopoverContext);

    if (context == null) {
        throw new Error("Popover komponenter må brukes innenfor en <Popover /> komponent");
    }

    return context;
};

const Popover = ({
    children,
    modal = false,
    ...restOptions
}: {
    children: React.ReactNode;
} & PopoverOptions) => {
    const popover = usePopover({ modal, ...restOptions });
    return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
};

interface PopoverTriggerProps {
    children: React.ReactNode;
    /**
     * Render the trigger as a child of the popover.
     * @default false
     */
    asChild?: boolean;
}

const PopoverTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & PopoverTriggerProps>(
    function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
        const { refs, getReferenceProps, open, setOpen } = usePopoverContext();
        const childrenRef = (children as any).ref;
        const ref = useMergeRefs([refs.setReference, propRef, childrenRef]);

        if (asChild && React.isValidElement(children)) {
            return React.cloneElement(
                children,
                getReferenceProps({
                    ref,
                    ...props,
                    ...children.props,
                }),
            );
        }

        return (
            <Button
                variant="ghost"
                ref={ref}
                onClick={() => setOpen?.(!open)}
                aria-expanded={open}
                {...getReferenceProps(props)}
            >
                {children}
            </Button>
        );
    },
);

interface PopoverContentProps {
    /**
     * Padding of the popover content element.
     * @default 0
     */
    padding?: 0 | 8 | 16 | 24;
}

const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement> & PopoverContentProps>(
    function PopoverContent({ style, className, padding, ...props }, propRef) {
        const { context: floatingContext, ...context } = usePopoverContext();
        const ref = useMergeRefs([context.refs.setFloating, propRef]);

        if (!floatingContext.open) return null;

        return (
            <FloatingPortal>
                <FloatingFocusManager context={floatingContext} modal={context.modal}>
                    <div
                        className={classNames("jkl-popover", className)}
                        ref={ref}
                        style={
                            {
                                ...style,
                                ...context.floatingStyles,
                                "--popover-padding": `var(--jkl-spacing-${padding})`,
                            } as React.CSSProperties
                        }
                        {...context.getFloatingProps(props)}
                    >
                        {props.children}
                    </div>
                </FloatingFocusManager>
            </FloatingPortal>
        );
    },
);

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
