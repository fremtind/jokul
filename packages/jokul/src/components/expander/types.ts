import type { ComponentProps, FC, RefObject } from "react";
import type { PolymorphicPropsWithRef } from "../../utilities/polymorphism/polymorphism.js";

export type ExpandablePanelContentComponent = FC<ComponentProps<"div"> & {}>;

/* Expandable */
export type ExpandablePanelProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            variant?: "fill" | "stroke";
            open?: boolean;
            /*
             * Initiell state av content.
             */
            defaultOpen?: boolean;
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
        ref: RefObject<HTMLElement | HTMLDetailsElement | null>,
    ) => void;
    onTransitionEnd: (
        isOpen: boolean,
        ref: RefObject<HTMLElement | HTMLDetailsElement | null>,
    ) => void;
    setExpanderHeight: (height: number) => void;
};
