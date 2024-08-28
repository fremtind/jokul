import {
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
    UseFloatingOptions,
} from "@floating-ui/react";
import { Props as FloatingFocusManagerOptions } from "@floating-ui/react/src/components/FloatingFocusManager";
import { Props as ClickOptions } from "@floating-ui/react/src/hooks/useClick";
import { Props as DismissOptions } from "@floating-ui/react/src/hooks/useDismiss";
import { Props as FocusOptions } from "@floating-ui/react/src/hooks/useFocus";
import { Props as HoverOptions } from "@floating-ui/react/src/hooks/useHover";
import { Props as RoleOptions } from "@floating-ui/react/src/hooks/useRole";
import classNames from "classnames";
import { merge } from "lodash";
import * as React from "react";
import { Button } from "../../button-react";
import { getThemeAndDensity } from "./utils";

interface PopoverOptions {
    /**
     * Initial open state of the popover when uncontrolled.
     * @default false
     * @see https://floating-ui.com/docs/useFloating#open
     */
    initialOpen?: boolean;
    /**
     * Offset of the floating element.
     * @see https://floating-ui.com/docs/offset
     * @default 4
     * */
    offset?: number;
    /**
     * Strategy for positioning the floating element.
     * @default absolute
     * @see https://floating-ui.com/docs/useFloating#strategy
     */
    /** Options for hover
     * @see {@link HoverOptions}
     * @see https://floating-ui.com/docs/useHover
     * @default { enabled: false }
     */
    hoverOptions?: HoverOptions;
    /** Options for focus
     * @see {@link FocusOptions}
     * @see https://floating-ui.com/docs/useFocus
     * @default { enabled: false }
     */
    focusOptions?: FocusOptions;
    /** Options for click
     * @see {@link ClickOptions}
     * @see https://floating-ui.com/docs/useClick
     * @default { enabled: false }
     */
    clickOptions?: ClickOptions;
    /**
     * Options for role
     * @see {@link RoleOptions}
     * @see https://floating-ui.com/docs/useRole
     * @default { enabled: true, role: "dialog" }
     */
    roleOptions?: RoleOptions;
    /**
     * Options for dismiss
     * @see {@link DismissOptions}
     * @see https://floating-ui.com/docs
     * @default { enabled: false }
     */
    dismissOptions?: DismissOptions;
    /**
     * Options for å posisjonere et flytende element
     * @see https://floating-ui.com/docs/useFloating
     */
    floatingOptions?: Omit<Partial<UseFloatingOptions>, "whileElementsMounted">;
    /**
     * Options for FloatingFocusManager
     * @see https://floating-ui.com/docs/floatingfocusmanager
     */
    floatingFocusManagerOptions?: Omit<FloatingFocusManagerOptions, "children" | "context">;
}

const usePopover = ({
    initialOpen = false,
    offset: _offset = 4,
    hoverOptions,
    focusOptions,
    clickOptions,
    roleOptions,
    dismissOptions,
    floatingOptions: _floatingOptions,
    floatingFocusManagerOptions,
}: PopoverOptions) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

    const open = _floatingOptions?.open ?? uncontrolledOpen;
    const onOpenChange = _floatingOptions?.onOpenChange ?? setUncontrolledOpen;

    const floatingOptions = merge(
        {
            open,
            placement: "bottom-start",
            strategy: "absolute",
            middleware: [
                offset(_offset),
                flip({ padding: 5, fallbackPlacements: ["bottom", "top"] }),
                shift({ padding: 12 }),
            ],
            whileElementsMounted: autoUpdate,
            onOpenChange,
        },
        _floatingOptions,
    );

    const data = useFloating({ ...floatingOptions });

    const context = data.context;

    const role = useRole(context, {
        enabled: true,
        role: "dialog",
        ...roleOptions,
    });

    const click = useClick(context, {
        enabled: false,
        ...clickOptions,
    });
    const hover = useHover(context, { enabled: false, ...hoverOptions });
    const focus = useFocus(context, { enabled: false, ...focusOptions });
    const dismiss = useDismiss(context, {
        enabled: true,
        ...dismissOptions,
    });

    const interactions = useInteractions([click, dismiss, focus, hover, , role]);

    return React.useMemo(
        () => ({
            open,
            onOpenChange,
            floatingFocusManagerOptions,
            ...interactions,
            ...data,
        }),
        [open, onOpenChange, interactions, data, floatingFocusManagerOptions],
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
    ...restOptions
}: {
    children: React.ReactNode;
} & PopoverOptions) => {
    const popover = usePopover({ ...restOptions });
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
        const { refs, getReferenceProps, open, onOpenChange } = usePopoverContext();
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
                onClick={() => onOpenChange?.(!open)}
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
        const { context: floatingContext, floatingFocusManagerOptions, ...context } = usePopoverContext();
        const ref = useMergeRefs([context.refs.setFloating, propRef]);

        const { theme, density } = getThemeAndDensity(context.refs.reference.current as HTMLElement);

        if (!floatingContext.open) return null;

        return (
            <FloatingPortal>
                <FloatingFocusManager context={floatingContext} {...floatingFocusManagerOptions}>
                    <div
                        data-theme={theme}
                        data-layout-density={density}
                        className={classNames("jkl jkl-popover", className)}
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
