import { ChevronRightIcon } from "@fremtind/jkl-icons-react";
import React, { ReactNode } from "react";

interface ContextualMenuItemProps {
    description: string;
    icon?: ReactNode;
}

export const ContextualMenuItemExpandable = ({ icon, description }: ContextualMenuItemProps) => {
    return (
        <div className="contextual-menu-item-expandable">
            {icon && icon}
            <span>{description}</span>
            <ChevronRightIcon />
        </div>
    );
};
