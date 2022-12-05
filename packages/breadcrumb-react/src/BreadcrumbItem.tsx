import { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { AnchorHTMLAttributes } from "react";

export interface BreadcrumbItemProps extends WithChildren {
    className?: string;
    /**
     * Settes automatisk av Breadcrumb
     * @default false
     */
    isLastElement?: boolean;
}

export const BreadcrumbItem = ({ className, children, isLastElement, ...rest }: BreadcrumbItemProps): JSX.Element => {
    return (
        <li className={cn("jkl-breadcrumb__item", className)} {...rest}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<AnchorHTMLAttributes<HTMLAnchorElement>>(child)) {
                    return React.cloneElement<AnchorHTMLAttributes<HTMLAnchorElement>>(child, {
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
