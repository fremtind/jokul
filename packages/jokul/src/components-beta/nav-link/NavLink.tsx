import clsx from "clsx";
import { type ElementType, useId } from "react";
import type { Polymorphic } from "../../utilities/index.js";

export type NavLinkProps = {
    title: string;
    description?: string;
};

export function NavLink<T extends ElementType = "a">(
    props: Polymorphic<NavLinkProps, T>,
) {
    const {
        as = "a",
        ref,
        title,
        description,
        className,
        children,
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
}
