import { ArrowNorthEastIcon, ChevronRightIcon } from "@fremtind/jkl-icons-react";
import clsx from "clsx";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ContextualMenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> {
    /**
     * Indikerer at menypunktet er utvidbart ved å vise en chevron
     * @default false
     */
    expandable?: boolean;
    /**
     * Indikerer at menypunktet åpner noe i et nytt vindu eller tab
     * @default false
     */
    external?: boolean;
    /**
     * Et ikon som vises før innholdet i menypunktet
     */
    icon?: ReactNode;
}

export const ContextualMenuItem = forwardRef<HTMLButtonElement, ContextualMenuItemProps>((props, ref) => {
    const { className, children, icon, expandable = false, external = false, ...rest } = props;

    return (
        <button
            ref={ref}
            type="button"
            role="menuitem"
            className={clsx("jkl-contextual-menu-item", className)}
            {...rest}
        >
            {icon && <span className="jkl-contextual-menu-item__icon">{icon}</span>}
            <div className="jkl-contextual-menu-item__content">
                {children}
                {external && (
                    <div className={"jkl-contextual-menu-item__arrow"}>
                        <ArrowNorthEastIcon />
                    </div>
                )}
            </div>
            {expandable && <ChevronRightIcon className="jkl-contextual-menu-item__chevron" bold />}
        </button>
    );
});
ContextualMenuItem.displayName = "ContextualMenuItem";
