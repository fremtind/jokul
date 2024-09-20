import cn from "classnames";
import React from "react";
import { PolymorphicPropsWithRef, PolymorphicRef } from "../polymorphism";

export type LinkProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
        external?: boolean;
    }
>;

export type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: LinkProps<ElementType>,
) => React.ReactElement | null;

export const Link = React.forwardRef(function Link<ElementType extends React.ElementType = "a">(
    props: LinkProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    const { external = false, className = "", children, as = "a", ...rest } = props;
    const Component = as;

    return (
        <Component
            ref={ref}
            className={cn("jkl-link", className, {
                "jkl-link--external": external,
            })}
            {...rest}
        >
            {children}
        </Component>
    );
});
