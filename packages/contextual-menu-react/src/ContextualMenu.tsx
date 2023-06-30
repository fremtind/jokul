import {
    autoUpdate,
    flip,
    FloatingFocusManager,
    FloatingNode,
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
import { WithChildren, type DataTestAutoId } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { type ButtonHTMLAttributes, forwardRef, type ReactNode, useRef, useState } from "react";
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
     * Elementet som fungerer som trigger for menyen. Dersom elementet ikke er en `<button>`
     * eller en `forwardRef<HTMLButtonElement>` vil det bli lagt inne i en knapp
     * med forhåndsdefinert stil. For å komme raskt i gang kan du bruke komponenten
     * `ContextualMenuTriggerButton` fra denne pakken.
     */
    triggerElement: ReactNode;
}

const ContextualMenuComponent = forwardRef<HTMLButtonElement, ContextualMenuProps>((props, forwardedRef) => {
    const { children, className, initialPlacement, openOnHover = false, triggerElement, ...triggerProps } = props;

    const contextualMenuId = useId("jkl-contextual-menu");

    const tree = useFloatingTree();
    const nodeId = useFloatingNodeId();
    const parentId = useFloatingParentNodeId();
    const isNested = parentId != null;

    const listItemsRef = useRef<Array<HTMLButtonElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { allowHover, isOpen, setIsOpen } = useMenuWideEvents(tree, nodeId, parentId);

    const { x, y, refs, placement, strategy, context } = useFloating({
        nodeId,
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: initialPlacement || (isNested ? "right-start" : "bottom-start"),
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

    const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
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
        useDismiss(context),
        useRole(context, { role: "menu" }),
        useListNavigation(context, {
            listRef: listItemsRef,
            activeIndex,
            nested: isNested,
            onNavigate: setActiveIndex,
        }),
    ]);

    const referenceRef = useMergeRefs([refs.setReference, forwardedRef]);

    return (
        <FloatingNode id={nodeId}>
            {React.isValidElement(triggerElement) &&
            (triggerElement.type === "button" || ReactIs.isForwardRef(triggerElement))
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
            <AnimatePresence>
                {isOpen && (
                    <FloatingFocusManager
                        context={context}
                        // Prevent outside content interference.
                        modal={false}
                        // Only initially focus the root floating menu.
                        initialFocus={isNested ? -1 : 0}
                        // Only return focus to the root menu's reference when menus close.
                        returnFocus={!isNested}
                    >
                        <motion.div
                            className={cn("jkl-contextual-menu", className)}
                            role="menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeIn", duration: 0.1 }}
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
                            {React.Children.map(children, (child, index) => {
                                if (
                                    React.isValidElement(child) &&
                                    (child.type === "button" || ReactIs.isForwardRef(child))
                                ) {
                                    return React.cloneElement(
                                        child,
                                        getItemProps({
                                            ...child.props,
                                            tabIndex: activeIndex === index ? 0 : -1,
                                            role: "menuitem",
                                            ref(node: HTMLButtonElement) {
                                                listItemsRef.current[index] = node;
                                            },
                                            onClick(event) {
                                                child.props.onClick?.(event as React.MouseEvent<HTMLButtonElement>);
                                                tree?.events.emit("click");
                                            },
                                            onMouseEnter() {
                                                if (allowHover && isOpen) {
                                                    setActiveIndex(index);
                                                }
                                            },
                                        }),
                                    );
                                }

                                return child;
                            })}
                        </motion.div>
                    </FloatingFocusManager>
                )}
            </AnimatePresence>
        </FloatingNode>
    );
});
ContextualMenuComponent.displayName = "ContextualMenuComponent";

export const ContextualMenu = forwardRef<HTMLButtonElement, ContextualMenuProps>((props, ref) => {
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
