import React from "react";
import { mergeRefs, mergeProps } from "../utils";

type SlotComponentProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactElement | false | null;
};

export const SlotComponent = React.forwardRef<HTMLElement, SlotComponentProps>(function SlotComponent(
    { children, ...slotProps },
    forwardedRef,
) {
    if (React.isValidElement(children)) {
        return React.cloneElement(children, {
            ...mergeProps(slotProps, children.props),
            ref: mergeRefs(forwardedRef, (children as any).ref),
        } as React.Attributes); // TODO: TypeScript klager på ref uten casting her. Hvorfor?
    }

    if (React.Children.count(children) > 1) {
        throw new Error("Du kan kun bruke ett enkelt React-element som children i en komponent med asChild");
    }

    return null;
});
