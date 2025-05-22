import clsx from "clsx";
import React, { type AnchorHTMLAttributes } from "react";
import type { BreadcrumbItemProps } from "./types.js";

export const BreadcrumbItem = ({
    className,
    children,
    isLastElement,
    ...rest
}: BreadcrumbItemProps): JSX.Element => {
    return (
        <li className={clsx("jkl-breadcrumb__item", className)} {...rest}>
            {React.Children.map(children, (child) => {
                if (
                    React.isValidElement<
                        AnchorHTMLAttributes<HTMLAnchorElement>
                    >(child)
                ) {
                    return React.cloneElement<
                        AnchorHTMLAttributes<HTMLAnchorElement>
                    >(child, {
                        "aria-current": isLastElement ? "page" : undefined,
                        className: "jkl-link",
                    });
                } else {
                    return child;
                }
            })}
        </li>
    );
};
