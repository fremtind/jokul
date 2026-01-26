import {
    FloatingFocusManager,
    FloatingPortal,
    type ReferenceElement,
    type VirtualElement,
    autoUpdate,
    flip,
    offset,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useMergeRefs,
    useRole,
} from "@floating-ui/react";
import clsx from "clsx";
import * as React from "react";
import { getThemeAndSize } from "../../utilities/getThemeAndSize.js";
import type { PopoverOptions } from "./types.js";

const usePopover = ({
    open: _open,
    onOpenChange: _onOpenChange,
    placement = "bottom-start",
    strategy = "absolute",
    modal = true,
    offset: _offset = 4,
    positionReference,
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

    React.useLayoutEffect(() => {
        if (positionReference) {
            data.refs.setPositionReference(positionReference?.current);
        }
    }, [positionReference, data.refs]);

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
        throw new Error(
            "Popover komponenter må brukes innenfor en <Popover /> komponent",
        );
    }

    return context;
};

export const Popover = ({
    children,
    ...restOptions
}: {
    children: React.ReactNode;
} & PopoverOptions) => {
    const popover = usePopover({ ...restOptions });
    return (
        <PopoverContext.Provider value={popover}>
            {children}
        </PopoverContext.Provider>
    );
};

interface PopoverTriggerProps {
    children: React.ReactNode;
    /**
     * Rendrer komponenten som child-elementet sitt, og slår sammen egenskaper og props.
     *
     * Default er `false`.
     *
     * @example
     * ```tsx
     * <Component asChild foo="bar">
     *    <Child baz="qux" />
     * </Component>
     *
     * // Rendrer følgende:
     * <Child foo="bar" baz="qux" />
     * ```
     */
    asChild?: boolean;
}

const PopoverTrigger = React.forwardRef<
    HTMLElement,
    React.HTMLProps<HTMLElement> & PopoverTriggerProps
>(function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
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
        <button
            ref={ref}
            onClick={() => onOpenChange?.(!open)}
            aria-expanded={open}
            {...getReferenceProps(props)}
        >
            {children}
        </button>
    );
});

interface PopoverContentProps {
    /**
     * Padding rundt innholdet i popoveren.
     *
     * Default er `0`.
     */
    padding?: 0 | 8 | 16 | 24;
    /**
     *
     * Angir hvilket element som skal motta fokus ved åpning.
     * Kan være en tabbar index eller en referanse til et element."
     *
     * Default er `0`, som betyr at det første fokuserbare elementet i popoveren får fokus.
     * @see https://floating-ui.com/docs/FloatingFocusManager#initialfocus
     */
    initialFocus?: number | React.RefObject<HTMLElement>;
    /**
     * Angir om fokus skal returneres til triggeren når popoveren lukkes.
     *
     * Default er `true`.
     * @see https://floating-ui.com/docs/FloatingFocusManager#returnfocus
     */
    returnFocus?: boolean;
}

// Er popover-elementet posisjonert i forhold til et annet element enn triggeren?
const isCustomPositioned = (
    referenceElement: ReferenceElement,
): referenceElement is VirtualElement => {
    if (!referenceElement) return false;

    return "contextElement" in referenceElement;
};

const PopoverContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement> & PopoverContentProps
>(function PopoverContent(
    {
        style,
        className,
        padding = 0,
        initialFocus = 0,
        returnFocus = true,
        ...props
    },
    propRef,
) {
    const { context, modal, refs, open, floatingStyles, getFloatingProps } =
        usePopoverContext();
    const ref = useMergeRefs([refs.setFloating, propRef]);

    const referenceElement = refs.reference.current as ReferenceElement;

    const { theme, size } = isCustomPositioned(referenceElement)
        ? getThemeAndSize(referenceElement.contextElement)
        : getThemeAndSize(referenceElement);

    const floatingPortalRef = React.useRef<HTMLElement | null>(null);

    // TODO: Løser et problem hvor nestede portaler ikke "fester" seg til det nærmeste portal-elementet. Fjernes når alle komponenter som rendres i en portal tar i bruk popover komponenten da den håndterer dette internt. Issue: https://github.com/fremtind/jokul/issues/4356
    React.useEffect(() => {
        floatingPortalRef.current =
            context.elements.domReference?.closest<HTMLElement>(
                "[data-portal]",
            ) || document.body;
    }, [context.elements.domReference]);

    if (!open) return null;

    return (
        <FloatingPortal root={floatingPortalRef.current}>
            <FloatingFocusManager
                context={context}
                modal={modal}
                initialFocus={initialFocus}
                returnFocus={returnFocus}
            >
                <div
                    data-theme={theme}
                    data-size={size}
                    className={clsx("jkl jkl-popover", className)}
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
});

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
