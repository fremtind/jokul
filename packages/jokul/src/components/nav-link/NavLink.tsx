import { clsx } from "clsx";
import React from "react";
import { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { ArrowRightIcon } from "../icon/icons/ArrowRightIcon.js";
import { ArrowLeftIcon } from "../icon/index.js";
import { NavLinkProps } from "./types.js";

type LinkComponent = <ElementType extends React.ElementType = "a">(
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
            {back && (
                <ArrowLeftIcon variant="small" className="jkl-nav-link__icon" />
            )}
            {children}
            {!back && (
                <ArrowRightIcon
                    variant="small"
                    className="jkl-nav-link__icon"
                />
            )}
        </Component>
    );
}) as LinkComponent;
