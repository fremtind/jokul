import { PolymorphicPropsWithRef } from "@fremtind/jkl-core";
import { ComponentProps, FC, RefObject } from "react";

export type ExpandablePanelContentComponent = FC<ComponentProps<"div"> & {}>;

/* Expandable */
export type ExpandablePanelProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            variant?: "fill" | "stroke";
            open?: boolean;
            onOpenChange?: (open: boolean) => void;
        }
    >;

export type ExpandablePanelComponent = {
    Content: ExpandablePanelContentComponent;
} & (<ElementType extends React.ElementType = "div">(
    props: ExpandablePanelProps<ElementType>,
) => React.ReactElement | null);

/* Expander */
export type ExpanderProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            icon?: React.ReactNode;
            open?: boolean;
            expandDirection?: "up" | "down";
        }
    >;

export type ExpanderComponent = <
    ElementType extends React.ElementType = "button",
>(
    props: ExpanderProps<ElementType>,
) => React.ReactElement | null;

/* Shared context */
export type ExpandableContext = {
    open: boolean;
    onToggle: () => void;
    onTransitionStart: (
        isOpening: boolean,
        ref: RefObject<HTMLElement | HTMLDetailsElement>,
    ) => void;
    onTransitionEnd: (
        isOpen: boolean,
        ref: RefObject<HTMLElement | HTMLDetailsElement>,
    ) => void;
};