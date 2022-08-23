import { WithChildren } from "@fremtind/jkl-core";
import { getCompactValue } from "@fremtind/jkl-core/src/utils/compact";
import cn from "classnames";
import React from "react";
import { BreadcrumbItemProps } from "./BreadcrumbItem";

export interface BreadcrumbProps extends WithChildren {
    className?: string;
    /**
     * Skal bare brukes i informasjonstette applikasjoner.
     */
    compact?: boolean;
}

export const Breadcrumb = ({ className, children, compact, ...rest }: BreadcrumbProps): JSX.Element => {
    const numberOfChildren = React.Children.count(children);
    return (
        <nav
            aria-label="Sti"
            className={cn("jkl-breadcrumb", className)}
            data-compactlayout={getCompactValue(compact)}
            {...rest}
        >
            <ol className="jkl-breadcrumb__list">
                {React.Children.map(children, (child, index) => {
                    const isLastElement = index + 1 === numberOfChildren;
                    return (
                        <>
                            {React.isValidElement<BreadcrumbItemProps>(child)
                                ? React.cloneElement<BreadcrumbItemProps>(child, {
                                      isLastElement,
                                  })
                                : child}
                            {!isLastElement && (
                                <span className="jkl-breadcrumb__item-separator" aria-hidden="true">
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
