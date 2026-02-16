import type { ComponentProps, FC, RefObject } from "react";

export type ExpandablePanelContentComponent = FC<ComponentProps<"div"> & {}>;

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
