import React, { ReactNode } from "react";
import cn from "classnames";

export interface BreadcrumbItemProps {
    className?: string;
    children: ReactNode;
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
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        "aria-current": isLastElement ? "page" : undefined,
                        className: !isLastElement ? "jkl-link" : undefined,
                    });
                } else {
                    return child;
                }
            })}
        </li>
    );
};
