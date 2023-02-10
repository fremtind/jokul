import React, { ReactNode } from "react";

interface ContextualMenuTriggerIconProps {
    icon: ReactNode;
}

export const ContextualMenuTriggerIcon = ({ icon }: ContextualMenuTriggerIconProps) => {
    return <div className="contextual-menu-trigger-icon">{icon}</div>;
};
