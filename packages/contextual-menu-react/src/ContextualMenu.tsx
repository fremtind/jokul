import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingNode,
    FloatingPortal,
    FloatingTree,
    offset,
    type Placement,
    safePolygon,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useFloatingNodeId,
    useFloatingParentNodeId,
    useFloatingTree,
    useHover,
    useInteractions,
    useListNavigation,
    useMergeRefs,
    useRole,
} from "@floating-ui/react";
import {
    type DataTestAutoId,
    getThemeAndDensity,
    WithChildren,
} from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import React, {
    type ButtonHTMLAttributes,
    forwardRef,
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import * as ReactIs from "react-is";
import { useMenuWideEvents } from "./useMenuWideEvents";

export interface ContextualMenuProps
    extends DataTestAutoId,
        WithChildren,
        Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    className?: string;
    /**
     * Initiell plassering av menyen. Dersom det ikke er plass på skjermen der du
     * angir at den skal åpnes vil den slyttes automatisk.
     * @default "bottom-start" på toppnivå, "right-start" for undermenyer
     * */
    initialPlacement?: Placement;
    /**
     * Angir om menyen skal åpnes ved hover (uten å måtte klikke)
     * @default false
     */
    openOnHover?: boolean;
    /**
     * Angir om menyen skal holdes åpen når man klikker utenfor menyen
     * @default false
     */
    keepOpenOnClickOutside?: boolean;
    /**
     * Elementet som fungerer som trigger for menyen. Dersom elementet ikke er en `<button>`
     * eller en `forwardRef<HTMLButtonElement>` vil det bli lagt inne i en knapp
     * med forhåndsdefinert stil. For å komme raskt i gang kan du bruke komponenten
     * `ContextualMenuTriggerButton` fra denne pakken.
     */
    triggerElement: ReactNode;
    /**
     * Kan brukes til å styre utenfra om menyen skal være åpen eller ikke.
     * @default false
     */
    isOpen?: boolean;
    /**
     * Callback som kalles når menyen åpnes eller lukkes.
     */
    onToggle?: (isOpen: boolean) => void;
}

const ContextualMenuComponent = forwardRef<
    HTMLButtonElement,
    ContextualMenuProps
>((props, forwardedRef) => {
    const {
        children,
        className,
        initialPlacement,
        openOnHover = false,
        keepOpenOnClickOutside = false,
        triggerElement,
        isOpen: isOpenOverride,
        onToggle,
        ...triggerProps
    } = props;

    const contextualMenuId = useId("jkl-contextual-menu");

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const isNested = parentId != null;

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const {
        allowHover,
        isOpen: isOpenDefault,
        setIsOpen,
    } = useMenuWideEvents(tree, nodeId, parentId);

    const isOpen =
        isOpenOverride !== undefined ? isOpenOverride : isOpenDefault;

    useEffect(() => onToggle?.(isOpen), [isOpen, onToggle]);

    const { x, y, refs, placement, strategy, context } = useFloating({
        nodeId,
        open: isOpen,
        onOpenChange: setIsOpen,
        placement:
            initialPlacement || (isNested ? "right-start" : "bottom-start"),
        middleware: [
            offset(2),
            flip({
                fallbackAxisSideDirection: "end", // Allow bottom placement in narrow viewports (https://floating-ui.com/docs/flip#fallbackaxissidedirection)
                crossAxis: false, // See https://floating-ui.com/docs/flip#combining-with-shift
            }),
            shift({ padding: 8 }),
        ],
        whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
        useInteractions([
            useHover(context, {
                enabled: openOnHover && allowHover,
                delay: { open: 75 },
                handleClose: safePolygon({
                    requireIntent: true,
                    blockPointerEvents: true,
                }),
            }),
            useClick(context, {
                event: "mousedown",
            }),
            useDismiss(context, { outsidePress: !keepOpenOnClickOutside }),
            useRole(context, { role: "menu" }),
            useListNavigation(context, {
                listRef: listItemsRef,
                activeIndex,
                nested: isNested,
                onNavigate: setActiveIndex,
            }),
        ]);

    const referenceRef = useMergeRefs([refs.setReference, forwardedRef]);

    // Siden menyen rendres på rot må vi hente lokal dark/light-verdi fra triggeren
    // Vi må gjøre dette for å ta hensyn til at tema kan styres lokalt for deler av UIet
    const { theme, density } = getThemeAndDensity(
        refs.reference.current as HTMLElement,
    );

    return (
        <FloatingNode id={nodeId}>
            {React.isValidElement(triggerElement) &&
            (triggerElement.type === "button" ||
                ReactIs.isForwardRef(triggerElement))
                ? // Dersom trigger-elementet er en knapp, sett riktige egenskaper på det
                  React.cloneElement(triggerElement, {
                      ...getReferenceProps({
                          ...triggerProps,
                          ref: referenceRef,
                          role: isNested ? "menuitem" : undefined,
                          "aria-controls": contextualMenuId,
                          onClick(event) {
                              event.stopPropagation();
                          },
                      }),
                  })
                : // Ellers, rendre elementet as-is, uten interaktivitet. Krev en ferdig brukbar button for å åpne menyen.
                  triggerElement}
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {isOpen && (
                        <FloatingPortal>
                            <FloatingFocusManager
                                context={context}
                                // Prevent outside content interference.
                                modal={false}
                                // Only initially focus the root floating menu.
                                initialFocus={isNested ? -1 : 0}
                                // Only return focus to the root menu's reference when menus close.
                                returnFocus={!isNested}
                            >
                                <m.div
                                    className={cn(
                                        "jkl jkl-contextual-menu",
                                        className,
                                    )}
                                    data-theme={theme}
                                    data-layout-density={density}
                                    role="menu"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        ease: "easeIn",
                                        duration: 0.1,
                                    }}
                                    data-placement={placement}
                                    aria-live="assertive"
                                    aria-hidden={!isOpen}
                                    ref={refs.setFloating}
                                    {...getFloatingProps({
                                        id: contextualMenuId,
                                        style: {
                                            position: strategy,
                                            top: y ?? "",
                                            left: x ?? "",
                                        },
                                    })}
                                >
                                    {React.Children.map(
                                        children,
                                        (child, index) => {
                                            if (
                                                React.isValidElement(child) &&
                                                ReactIs.isForwardRef(child)
                                            ) {
                                                return React.cloneElement(
                                                    child,
                                                    getItemProps({
                                                        ...child.props,
                                                        tabIndex:
                                                            activeIndex ===
                                                            index
                                                                ? 0
                                                                : -1,
                                                        role: "menuitem",
                                                        ref(
                                                            node: HTMLButtonElement,
                                                        ) {
                                                            listItemsRef.current[
                                                                index
                                                            ] = node;
                                                        },
                                                        onClick(event) {
                                                            child.props.onClick?.(
                                                                event as React.MouseEvent<HTMLButtonElement>,
                                                            );
                                                            if (
                                                                event.defaultPrevented
                                                            ) {
                                                                return;
                                                            }
                                                            tree?.events.emit(
                                                                "click",
                                                            );
                                                        },
                                                        onKeyDown(event) {
                                                            child.props.onKeyDown?.(
                                                                event,
                                                            );
                                                            if (
                                                                event.defaultPrevented
                                                            ) {
                                                                return;
                                                            }
                                                            tree?.events.emit(
                                                                "keydown",
                                                            );
                                                            if (
                                                                event
                                                                    .currentTarget
                                                                    .role ===
                                                                    "menuitemcheckbox" &&
                                                                event.key ===
                                                                    "Enter"
                                                            ) {
                                                                // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role#keyboard_interactions
                                                                setIsOpen(
                                                                    false,
                                                                );
                                                            }
                                                        },
                                                        onMouseEnter() {
                                                            if (
                                                                allowHover &&
                                                                isOpen
                                                            ) {
                                                                setActiveIndex(
                                                                    index,
                                                                );
                                                            }
                                                        },
                                                    }),
                                                );
                                            }

                                            return child;
                                        },
                                    )}
                                </m.div>
                            </FloatingFocusManager>
                        </FloatingPortal>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </FloatingNode>
    );
});
ContextualMenuComponent.displayName = "ContextualMenuComponent";

/**
 * @deprecated Denne komponenten bør ikke brukes lenger, og vil ikke bli oppdatert.
 * Bruk heller komponenten `Menu` som er en erstatning for ContextualMenu
 */
export const ContextualMenu = forwardRef<
    HTMLButtonElement,
    ContextualMenuProps
>((props, ref) => {
    const parentId = useFloatingParentNodeId();

    if (parentId === null) {
        return (
            <FloatingTree>
                <ContextualMenuComponent ref={ref} {...props} />
            </FloatingTree>
        );
    }

    return <ContextualMenuComponent ref={ref} {...props} />;
});
ContextualMenu.displayName = "ContextualMenu";
