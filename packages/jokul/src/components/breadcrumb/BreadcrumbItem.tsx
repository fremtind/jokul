import clsx from "clsx";
import React, { type AnchorHTMLAttributes } from "react";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
import type { BreadcrumbItemProps } from "./types.js";

export const BreadcrumbItem = ({
    className,
    children,
    isLastElement,
    tracking,
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
                    const trackingLabel = child.props.children
                        ? String(child.props.children)
                        : undefined;

                    return React.cloneElement<
                        AnchorHTMLAttributes<HTMLAnchorElement>
                    >(child, {
                        "aria-current": isLastElement ? "page" : undefined,
                        className: clsx("jkl-link", child.props.className),
                        ...{
                            "data-track-component-name":
                                COMPONENT_NAMES.Breadcrumb,
                            "data-track-id": tracking?.id ?? trackingLabel,
                            "data-track-label": trackingLabel,
                            "data-track-is-last-element": isLastElement,
                            ...getExtraTrackingAttributes(tracking?.extra),
                        },
                    });
                }

                return child;
            })}
        </li>
    );
};
