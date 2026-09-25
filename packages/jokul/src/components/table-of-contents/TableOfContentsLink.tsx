import clsx from "clsx";
import React from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { TableOfContentsLinkProps } from "./types.js";

export const TableOfContentsLink = React.forwardRef(
    function TableOfContentsLink<ElementType extends React.ElementType = "a">(
        props: TableOfContentsLinkProps<ElementType>,
        ref: PolymorphicRef<ElementType>,
    ) {
        const {
            as: Component = "a",
            children,
            className,
            tracking,
            ...rest
        } = props;
        const isSelected =
            props["aria-current"] !== undefined &&
            props["aria-current"] !== false &&
            props["aria-current"] !== "false";

        return (
            <li className="jkl-table-of-contents-item">
                <Component
                    // Merker lenken som sporbar for Mixpanels `autocapture`.
                    // Attributtene er ellers helt inerte uten en initialisert
                    // Mixpanel-instans.
                    data-jkl-tracked="TableOfContentsLink"
                    data-jkl-selected={isSelected || undefined}
                    data-jkl-tracking={
                        tracking ? JSON.stringify(tracking) : undefined
                    }
                    className={clsx("jkl-table-of-contents-link", className)}
                    ref={ref}
                    {...rest}
                >
                    {children}
                </Component>
            </li>
        );
    },
);
