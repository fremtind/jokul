import cn from "classnames";
import React from "react";
import { PolymorphicPropsWithRef, PolymorphicRef } from "../polymorphism";

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
            className={cn(
                "jkl-nav-link",
                {
                    "jkl-nav-link--active": active,
                    "jkl-nav-link--back": back,
                },
                className,
            )}
            {...rest}
        >
            {back && (
                <>
                    {/* This corresponds with ArrowLeftIcon from icon-react package */}
                    <span
                        aria-hidden
                        ref={ref}
                        className={cn(
                            "jkl-icon",
                            `jkl-icon--small`,
                            "jkl-nav-link__icon",
                        )}
                    >
                        {"\ue5c4"}
                    </span>
                </>
            )}
            {children}
            {!back && (
                <>
                    {/* This corresponds with ArrowRightIcon from icon-react package */}
                    <span
                        aria-hidden
                        ref={ref}
                        className={cn(
                            "jkl-icon",
                            `jkl-icon--small`,
                            "jkl-nav-link__icon",
                        )}
                    >
                        {"\ue5c8"}
                    </span>
                </>
            )}
        </Component>
    );
});
