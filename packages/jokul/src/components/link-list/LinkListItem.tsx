import clsx from "clsx";
import React from "react";
import type {
    PolymorphicPropsWithRef,
    PolymorphicRef,
} from "../../utilities/index.js";

export const LinkListLink = React.forwardRef(function LinkListLink<
    ElementType extends React.ElementType = "a",
>(
    props: PolymorphicPropsWithRef<ElementType>,
    ref: PolymorphicRef<ElementType>,
) {
    const { as: Component = "a", children, className, ...rest } = props;

    return (
        <li className={clsx("jkl-link-list-item", className)}>
            <Component className={"jkl-link-list-link"} ref={ref} {...rest}>
                {children}
            </Component>
        </li>
    );
});
