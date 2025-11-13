import clsx from "clsx";
import React, { useId } from "react";
import { Card } from "../../components/card/Card.jsx";
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
        <Card
            asChild
            {...rest}
            ref={ref}
            clickable
            padding="m"
            variant="low"
            aria-labelledby={id}
            className={clsx("jkl-navlink--beta", className)}
        >
            <Component>
                <p className="title" id={`${id}-title`}>
                    {title}
                </p>
                {description && <p className="description">{description}</p>}
            </Component>
        </Card>
    );
}) as NavLinkComponent;
