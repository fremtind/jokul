import { ChevronRightIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ContextualMenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Indikerer at menypunktet er utvidbart ved å vise en chevron
     * @default false
     */
    expandable?: boolean;
    /**
     * Et ikon som vises før innholdet i menypunktet
     */
    icon?: ReactNode;
}

export const ContextualMenuItem = forwardRef<HTMLButtonElement, ContextualMenuItemProps>((props, ref) => {
    const { className, children, icon, expandable = false, ...rest } = props;

    return (
        <button ref={ref} type="button" role="menuitem" className={cn("jkl-contextual-menu-item", className)} {...rest}>
            {icon && <span className="jkl-contextual-menu-item__icon">{icon}</span>}
            <div className="jkl-contextual-menu-item__content">{children}</div>
            {expandable && <ChevronRightIcon className="jkl-contextual-menu-item__arrow" bold />}
        </button>
    );
});
ContextualMenuItem.displayName = "ContextualMenuItem";
