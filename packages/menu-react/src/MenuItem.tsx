import { PolymorphicPropsWithRef, PolymorphicRef } from "@fremtind/jkl-core";
import { ArrowNorthEastIcon, ChevronRightIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { forwardRef, ReactNode } from "react";

export type MenuItemProps<ElementType extends React.ElementType> = PolymorphicPropsWithRef<
    ElementType,
    {
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
    )
>;

type MenuItemComponent = <ElementType extends React.ElementType = "button">(
    props: MenuItemProps<ElementType>,
) => React.ReactElement | null;

export const MenuItem = forwardRef(function MenuItem<ElementType extends React.ElementType = "button">(
    props: MenuItemProps<ElementType>,
    ref: PolymorphicRef<ElementType>,
) {
    const { as = "button", className, children, icon, expandable = false, external = false, ...rest } = props;
    const Component = as;
    const type = Component === "button" ? "button" : undefined;

    return (
        <Component ref={ref} type={type} role="menuitem" className={cn("jkl-menu-item", className)} {...rest}>
            {icon && <span className="jkl-menu-item__icon">{icon}</span>}
            <div className="jkl-menu-item__content">
                {children}
                {external && (
                    <div className={"jkl-menu-item__arrow"}>
                        <ArrowNorthEastIcon />
                    </div>
                )}
            </div>
            {expandable && <ChevronRightIcon className="jkl-menu-item__chevron" bold />}
        </Component>
    );
}) as MenuItemComponent;
