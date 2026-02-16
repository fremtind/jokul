import clsx from "clsx";
import type { ElementType, ReactNode } from "react";
import type { Polymorphic } from "../../utilities/index.js";
import { ChevronRightIcon } from "../icon/icons/ChevronRightIcon.js";
import { OpenInNewIcon } from "../icon/icons/OpenInNewIcon.js";

export type MenuItemProps = {
    /**
     * Et ikon som vises før innholdet i menypunktet
     */
    icon?: ReactNode;
} & (
    | {
          expandable?: never;
          /**
           * Indikerer at menypunktet åpner noe i et nytt vindu eller tab
           * @default false
           */
          external?: boolean;
      }
    | {
          external?: never;
          /**
           * Indikerer at menypunktet er utvidbart ved å vise en chevron
           * @default false
           */
          expandable?: boolean;
      }
);

export function MenuItem<T extends ElementType = "button">(
    props: Polymorphic<MenuItemProps, T>,
) {
    const {
        as = "button",
        ref,
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
}
