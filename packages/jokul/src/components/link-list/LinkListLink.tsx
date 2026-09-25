import clsx from "clsx";
import React from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import type { LinkListLinkProps } from "./types.js";

export const LinkListLink = React.forwardRef(function LinkListLink<
    ElementType extends React.ElementType = "a",
>(props: LinkListLinkProps<ElementType>, ref: PolymorphicRef<ElementType>) {
    const {
        as: Component = "a",
        children,
        className,
        tracking,
        ...rest
    } = props;

    return (
        <li className={"jkl-link-list-item"}>
            <Component
                // Merker lenken som sporbar for Mixpanels `autocapture`.
                // Attributtene er ellers helt inerte uten en initialisert
                // Mixpanel-instans.
                data-jkl-tracked="LinkListLink"
                data-jkl-tracking={
                    tracking ? JSON.stringify(tracking) : undefined
                }
                className={clsx("jkl-link-list-link", className)}
                ref={ref}
                {...rest}
            >
                {children}
            </Component>
        </li>
    );
});
