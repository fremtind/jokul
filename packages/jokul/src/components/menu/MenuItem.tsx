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
        ...rest
    } = props;
    const Component = as;
    const type = Component === "button" ? "button" : undefined;

    return (
        <Component
            ref={ref}
            type={type}
            role="menuitem"
            className={clsx("jkl-menu-item", className)}
            {...rest}
        >
            {icon && <span className="jkl-menu-item__icon">{icon}</span>}
            <div className="jkl-menu-item__content">
                {children}
                {external && (
                    <div className={"jkl-menu-item__arrow"}>
                        <OpenInNewIcon />
                    </div>
                )}
            </div>
            {expandable && <ChevronRightIcon />}
        </Component>
    );
}) as MenuItemComponent;
