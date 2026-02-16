import clsx from "clsx";
import React, { type ComponentPropsWithRef, type ElementType } from "react";

export function TableOfContentsLink<T extends ElementType = "a">(
    props: Omit<ComponentPropsWithRef<T>, "as"> & { as?: T },
) {
    const { as: Component = "a", children, className, ref, ...rest } = props;

    return (
        <li className="jkl-table-of-contents-item">
            <Component
                className={clsx("jkl-table-of-contents-link", className)}
                ref={ref}
                {...rest}
            >
                {children}
            </Component>
        </li>
    );
}
