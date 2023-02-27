import { ChevronRightIcon } from "@fremtind/jkl-icons-react";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

export interface ContextualMenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    expandable?: boolean;
    icon?: ReactNode;
}

export const ContextualMenuItem = forwardRef<HTMLButtonElement, ContextualMenuItemProps>((props, ref) => {
    const { children, icon, expandable = false, ...buttonProps } = props;

    return (
        <button ref={ref} type="button" role="menuitem" className="contextual-menu-item" {...buttonProps}>
            {icon && <span className="contextual-menu-item__icon">{icon}</span>}
            <div className="contextual-menu-item__content">{children}</div>
            {expandable && <ChevronRightIcon className="contextual-menu-item__arrow" bold />}
        </button>
    );
});
ContextualMenuItem.displayName = "ContetualMenuItem";
