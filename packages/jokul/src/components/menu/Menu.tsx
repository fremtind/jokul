import {
    FloatingFocusManager,
    FloatingNode,
    FloatingPortal,
    FloatingTree,
    type Side,
    autoUpdate,
    flip,
    offset,
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
    useTransitionStyles,
} from "@floating-ui/react";
import clsx from "clsx";
import React, { forwardRef, useEffect, useRef, useState, useId } from "react";
import { useBrowserPreferences } from "../../hooks/index.js";
import { getThemeAndDensity } from "../../utilities/getThemeAndDensity.js";
import { SlotComponent } from "../../utilities/index.js";
import type { MenuProps } from "./types.js";
import { useMenuWideEvents } from "./useMenuWideEvents.js";

function getTranslation(side: Side, value = 0) {
    switch (side) {
        case "top":
            return `0 ${value}px`;
        case "left":
            return `${value}px 0`;
        case "bottom":
            return `0 ${-value}px`;
        case "right":
            return `${-value}px 0`;

        default:
            return `0 ${value}px`;
    }
}

const MenuComponent = forwardRef<HTMLButtonElement, MenuProps>(
    (props, forwardedRef) => {
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

        const MenuId = `"jkl-menu"${useId()}`;

        const { prefersReducedMotion } = useBrowserPreferences();

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

        const { refs, placement, context, floatingStyles } = useFloating({
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

        const { isMounted, styles: animationStyles } = useTransitionStyles(
            context,
            {
                duration: {
                    open: prefersReducedMotion ? 0 : 250,
                    close: prefersReducedMotion ? 0 : 150,
                },
                initial: ({ side }) => ({
                    opacity: 0,
                    translate: getTranslation(side, 5),
                }),
                open: ({ side }) => ({
                    opacity: 1,
                    translate: getTranslation(side, 0),
                }),
                close: ({ side }) => ({
                    opacity: 0,
                    translate: getTranslation(side, 5),
                }),
            },
        );

        return (
            <FloatingNode id={nodeId}>
                {React.isValidElement(triggerElement) && (
                    <SlotComponent
                        {...getReferenceProps({
                            ...triggerProps,
                            ref: referenceRef,
                            role: isNested ? "menuitem" : undefined,
                            "aria-controls": MenuId,
                            onClick(event) {
                                event.stopPropagation();
                            },
                        })}
                    >
                        {triggerElement}
                    </SlotComponent>
                )}
                {isMounted && (
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
                            <div
                                className={clsx("jkl jkl-menu", className)}
                                data-theme={theme}
                                data-layout-density={density}
                                role="menu"
                                data-placement={placement}
                                aria-live="assertive"
                                aria-hidden={!isOpen}
                                ref={refs.setFloating}
                                {...getFloatingProps({
                                    id: MenuId,
                                    style: {
                                        ...floatingStyles,
                                        ...animationStyles,
                                    },
                                })}
                            >
                                {React.Children.map(
                                    children,
                                    (child, index) => {
                                        if (React.isValidElement(child)) {
                                            return (
                                                <SlotComponent
                                                    {...getItemProps({
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
                                                    })}
                                                >
                                                    {child}
                                                </SlotComponent>
                                            );
                                        }

                                        return child;
                                    },
                                )}
                            </div>
                        </FloatingFocusManager>
                    </FloatingPortal>
                )}
            </FloatingNode>
        );
    },
);
MenuComponent.displayName = "MenuComponent";

export const Menu = forwardRef<HTMLButtonElement, MenuProps>((props, ref) => {
    const parentId = useFloatingParentNodeId();

    if (parentId === null) {
        return (
            <FloatingTree>
                <MenuComponent ref={ref} {...props} />
            </FloatingTree>
        );
    }

    return <MenuComponent ref={ref} {...props} />;
});

Menu.displayName = "Menu";
