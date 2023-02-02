import React, { ReactNode } from "react";

interface ContextualMenuItemProps {
    description: string;
    expandable?: boolean;
    icon?: ReactNode;
}

export const ContextualMenuItem = ({ description, icon = false }: ContextualMenuItemProps) => {
    return (
        <div className="contextual-menu-item">
            {icon}
            <span>{description}</span>
        </div>
    );
};
