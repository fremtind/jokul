import React from "react";
import { mergeRefs } from "../mergeRefs.js";
import { mergeProps } from "./mergeProps.js";

export type SlotComponentProps = React.HTMLAttributes<HTMLElement> & {
    children: React.ReactElement | false | null;
};

export const SlotComponent = React.forwardRef<HTMLElement, SlotComponentProps>(
    function SlotComponent({ children, ...slotProps }, forwardedRef) {
        if (
            React.isValidElement<
                React.HTMLAttributes<HTMLElement> & {
                    ref?: React.Ref<HTMLElement>;
                }
            >(children)
        ) {
            return React.cloneElement(children, {
                ...mergeProps(slotProps, children.props),
                ref: mergeRefs(forwardedRef, (children as any).ref),
            } as React.HTMLAttributes<HTMLElement>);
        }

        if (React.Children.count(children) > 1) {
            throw new Error(
                "Du kan kun bruke ett enkelt React-element som children i en komponent med asChild",
            );
        }

        return null;
    },
);
