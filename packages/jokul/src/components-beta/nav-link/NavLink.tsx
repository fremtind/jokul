import clsx from "clsx";
import React, { useId } from "react";
import type { PolymorphicRef } from "../../utilities/index.js";
import type { NavLinkProps } from "./types.js";

type NavLinkComponent = <ElementType extends React.ElementType = "a">(
    props: NavLinkProps<ElementType>,
) => React.ReactElement | null;

export const NavLink = React.forwardRef(function NavLink<
    ElementType extends React.ElementType = "a",
>(props: NavLinkProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        title,
        description,
        className,
        children,
        as = "a",
        ...rest
    } = props;
    const Component = as;
    const id = useId();

    return (
        <Component
            {...rest}
            ref={ref}
            aria-labelledby={`${id}-title`}
            aria-describedby={`${id}-description`}
            className={clsx("jkl-navlink--beta", className)}
        >
            <p className="title" id={`${id}-title`}>
                {title}
            </p>
            {description && (
                <p className="description" id={`${id}-description`}>
                    {description}
                </p>
            )}
        </Component>
    );
}) as NavLinkComponent;
