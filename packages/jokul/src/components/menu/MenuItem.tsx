import clsx from "clsx";
import React, { forwardRef } from "react";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { ChevronRightIcon } from "../icon/icons/ChevronRightIcon.js";
import { OpenInNewIcon } from "../icon/icons/OpenInNewIcon.js";
import type { MenuItemProps } from "./types.js";

type MenuItemComponent = <ElementType extends React.ElementType = "button">(
    props: MenuItemProps<ElementType>,
) => React.ReactElement | null;

export const MenuItem = forwardRef(function MenuItem<
    ElementType extends React.ElementType = "button",
>(props: MenuItemProps<ElementType>, ref: PolymorphicRef<ElementType>) {
    const {
        as = "button",
        className,
        children,
        icon,
        expandable = false,
        external = false,
        tracking,
        ...rest
    } = props;
    const Component = as;
    const type = Component === "button" ? "button" : undefined;
    const hasIcon = Boolean(icon || expandable || external);

    return (
        <Component
            ref={ref}
            type={type}
            role="menuitem"
            // Merker menypunktet som sporbart for Mixpanels
            // `autocapture`. Attributtene er ellers helt inerte uten en
            // initialisert Mixpanel-instans.
            data-jkl-tracked="MenuItem"
            data-jkl-has-icon={hasIcon || undefined}
            data-jkl-tracking={tracking ? JSON.stringify(tracking) : undefined}
            className={clsx("jkl-menu-item", className)}
            {...rest}
        >
            {icon && <span className="jkl-menu-item__icon">{icon}</span>}
            <div className="jkl-menu-item__content">
                {children}
                {external && (
                    <div className="jkl-menu-item__arrow">
                        <OpenInNewIcon />
                    </div>
                )}
            </div>
            {expandable && <ChevronRightIcon />}
        </Component>
    );
}) as MenuItemComponent;
