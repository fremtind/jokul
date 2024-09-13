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
import classNames from "classnames";
import * as React from "react";
import { getThemeAndDensity } from "./utils";

type ClickOptions = Parameters<typeof useClick>[1];
type DismissOptions = Parameters<typeof useDismiss>[1];
type FocusOptions = Parameters<typeof useFocus>[1];
type HoverOptions = Parameters<typeof useHover>[1];
type RoleOptions = Parameters<typeof useRole>[1];

interface PopoverOptions {
    /**
     * Angir om popoveren er åpen eller lukket.
     * @see https://floating-ui.com/docs/useFloating#open
     */
    open?: boolean;
    /**
     * Callback som trigges når popoveren åpnes eller lukkes.
     * @see https://floating-ui.com/docs/useFloating#onOpenChange
     */
    onOpenChange?: UseFloatingOptions["onOpenChange"];
    /**
     * Bestemmer plasseringen av popoveren.
     * @default "bottom-start"
     * @see https://floating-ui.com/docs/useFloating#placement
     */
    placement?: UseFloatingOptions["placement"];
    /**
     * Definerer strategien for posisjonering av popoveren.
     * @default "absolute"
     * @see https://floating-ui.com/docs/useFloating#strategy
     */
    strategy?: UseFloatingOptions["strategy"];
    /**
     * Angir om popoveren skal fungere som en modal, der fokus er låst til det flytende elementet
     * og innhold utenfor ikke kan interageres med.
     * @default true
     * @see https://floating-ui.com/docs/useFloating#modal
     */
    modal?: boolean;
    /**
     * Offset til det flytende elementet.
     * @see https://floating-ui.com/docs/offset
     * @default 4
     * */
    /**
     * Justerer avstanden mellom referanse-elementet og popoveren.
     * @see https://floating-ui.com/docs/offset
     * @default 4
     */
    offset?: number;
    /**
     * Options for hover-interaksjoner.
     * @see https://floating-ui.com/docs/useHover
     * @default { enabled: false }
     */
    hoverOptions?: HoverOptions;
    /**
     * Options for fokus-interaksjoner.
     * @see https://floating-ui.com/docs/useFocus
     * @default { enabled: false }
     */
    focusOptions?: FocusOptions;
    /**
     * Options for klikk-interaksjoner.
     * @see https://floating-ui.com/docs/useClick
     * @default { enabled: false }
     */
    clickOptions?: ClickOptions;
    /**
     * Konfigurerer rollen for popoveren.
     * @see https://floating-ui.com/docs/useRole
     * @default { enabled: true, role: "dialog" }
     */
    roleOptions?: RoleOptions;
    /**
     * Options for å lukke popoveren når en dismissal skjer,
     * som ved å klikke utenfor eller trykke på "Escape"-tasten.
     * @see https://floating-ui.com/docs/useDismiss
     * @default { enabled: true }
     */
    dismissOptions?: DismissOptions;
}

const usePopover = ({
    open: _open,
    onOpenChange: _onOpenChange,
    placement = "bottom-start",
    strategy = "absolute",
    modal = true,
    offset: _offset = 4,
    hoverOptions,
    focusOptions,
    clickOptions,
    roleOptions,
    dismissOptions,
}: PopoverOptions) => {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(_open);

    const open = _open ?? uncontrolledOpen;
    const onOpenChange = _onOpenChange ?? setUncontrolledOpen;

    const data = useFloating({
        open,
        onOpenChange,
        placement,
        strategy,
        middleware: [
            offset(_offset),
            flip({ padding: 5, fallbackPlacements: ["bottom", "top"] }),
            shift({ padding: 12 }),
        ],
        whileElementsMounted: autoUpdate,
    });

    const context = data.context;

    const click = useClick(context, {
        enabled: false,
        ...clickOptions,
    });
    const hover = useHover(context, { enabled: false, ...hoverOptions });
    const focus = useFocus(context, { enabled: false, ...focusOptions });
    const dismiss = useDismiss(context, dismissOptions);
    const role = useRole(context, roleOptions);

    const interactions = useInteractions([click, dismiss, focus, hover, role]);

    return React.useMemo(
        () => ({
            open,
            onOpenChange,
            modal,
            ...interactions,
            ...data,
        }),
        [open, onOpenChange, modal, interactions, data],
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
     * Rendrer komponenten som child-elementet sitt, og slår
     * sammen egenskaper og props.
     * @example
     * ```tsx
     * <Component asChild foo="bar">
     *    <Child baz="qux" />
     * </Component>
     *
     * // Rendrer følgende:
     * <Child foo="bar" baz="qux" />
     * ```
     *
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
            <button ref={ref} onClick={() => onOpenChange?.(!open)} aria-expanded={open} {...getReferenceProps(props)}>
                {children}
            </button>
        );
    },
);

interface PopoverContentProps {
    /**
     * Padding rundt innholdet i popoveren.
     * @default 0
     */
    padding?: 0 | 8 | 16 | 24;
}

const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement> & PopoverContentProps>(
    function PopoverContent({ style, className, padding, ...props }, propRef) {
        const { context, modal, refs, open, floatingStyles, getFloatingProps } = usePopoverContext();
        const ref = useMergeRefs([refs.setFloating, propRef]);

        const { theme, density } = getThemeAndDensity(refs.reference.current as HTMLElement);

        if (!open) return null;

        return (
            <FloatingPortal>
                <FloatingFocusManager context={context} modal={modal}>
                    <div
                        data-theme={theme}
                        data-layout-density={density}
                        className={classNames("jkl jkl-popover", className)}
                        ref={ref}
                        style={
                            {
                                ...style,
                                ...floatingStyles,
                                "--popover-padding": `var(--jkl-spacing-${padding})`,
                            } as React.CSSProperties
                        }
                        {...getFloatingProps(props)}
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
