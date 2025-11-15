import clsx from "clsx";
import React from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

export const TableOfContentsLink = React.forwardRef(function LinkListLink<
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
    ref: PolymorphicRef<ElementType>,
) {
    const { as: Component = "a", children, className, ...rest } = props;

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
});
