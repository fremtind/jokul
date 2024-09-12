import React from "react";
import { mergeRefs, mergeProps } from "../core/utils";

export type SlotComponentProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactElement | false | null;
};

export const SlotComponent = React.forwardRef<HTMLElement, SlotComponentProps>(function SlotComponent(
    { children, ...slotProps },
    forwardedRef,
) {
    if (React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement, {
            ...mergeProps(slotProps, children.props),
            ref: mergeRefs(forwardedRef, (children as any).ref),
        });
    }

    if (React.Children.count(children) > 1) {
        throw new Error("Du kan kun bruke ett enkelt React-element som children i en komponent med asChild");
    }

    return null;
});
