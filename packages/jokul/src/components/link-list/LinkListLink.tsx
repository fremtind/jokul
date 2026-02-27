import clsx from "clsx";
import type { ComponentPropsWithRef, ElementType } from "react";

export function LinkListLink<T extends ElementType = "a">(
    props: ComponentPropsWithRef<T> & { as?: T },
) {
    const { as: Component = "a", ref, children, className, ...rest } = props;

    return (
        <li className={"jkl-link-list-item"}>
            <Component
                className={clsx("jkl-link-list-link", className)}
                ref={ref}
                {...rest}
            >
                {children}
            </Component>
        </li>
    );
}
