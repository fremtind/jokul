import { ChevronRightIcon } from "@fremtind/jkl-icons-react";
import cn from "classnames";
import React, { ReactNode } from "react";
interface ContextualMenuItemProps {
    description: string;
    expandable?: boolean;
    divider?: boolean;
    icon?: ReactNode;
}

export const ContextualMenuItem = ({
    description,
    icon,
    expandable = false,
    divider = false,
}: ContextualMenuItemProps) => {
    return (
        <div
            className={cn({
                "contextual-menu-item": true,
                "contextual-menu-item--divide-top": divider,
            })}
        >
            <div className="contextual-menu-item__content-wrapper">
                {icon && <span className="contextual-menu-item__icon">{icon}</span>}

                <span
                    className={cn({
                        "contextual-menu-item__description": true,
                        "contextual-menu-item__description--has-icon": icon,
                    })}
                >
                    {description}
                </span>
            </div>
            {expandable && <ChevronRightIcon bold />}
        </div>
    );
};
