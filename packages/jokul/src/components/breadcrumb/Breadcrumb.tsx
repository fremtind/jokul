import clsx from "clsx";
import React from "react";
import type { BreadcrumbItemProps, BreadcrumbProps } from "./types.js";

export const Breadcrumb = ({
    className,
    children,
    ...rest
}: BreadcrumbProps): JSX.Element => {
    const numberOfChildren = React.Children.count(children);
    return (
        <nav
            aria-label="Sti"
            className={clsx("jkl-breadcrumb", className)}
            {...rest}
        >
            <ol className="jkl-breadcrumb__list">
                {React.Children.map(children, (child, index) => {
                    const isLastElement = index + 1 === numberOfChildren;
                    return (
                        <>
                            {React.isValidElement<BreadcrumbItemProps>(child)
                                ? React.cloneElement<BreadcrumbItemProps>(
                                      child,
                                      {
                                          isLastElement,
                                      },
                                  )
                                : child}
                            {!isLastElement && (
                                <span
                                    className="jkl-breadcrumb__item-separator"
                                    aria-hidden="true"
                                >
                                    ›
                                </span>
                            )}
                        </>
                    );
                })}
            </ol>
        </nav>
    );
};
