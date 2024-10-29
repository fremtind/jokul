import { clsx } from "clsx";
import React from "react";
import {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/polymorphism/polymorphism.js";

export type NavLinkProps<ElementType extends React.ElementType> =
    PolymorphicPropsWithRef<
        ElementType,
        {
            active?: boolean;
            back?: boolean;
        }
    >;

export type LinkComponent = <ElementType extends React.ElementType = "a">(
    props: NavLinkProps<ElementType>,
) => React.ReactElement | null;

export const NavLink = React.forwardRef(function NavLink<
    ElementType extends React.ElementType = "a",
>(props: NavLinkProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        active = false,
        back = false,
        className,
        children,
        as = "a",
        ...rest
    } = props;
    const Component = as;

    return (
        <Component
            ref={ref}
            className={clsx(
                "jkl-nav-link",
                {
                    "jkl-nav-link--active": active,
                    "jkl-nav-link--back": back,
                },
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
});
