import React, { ReactNode } from "react";

interface ContextualMenuIconInitiatorProps {
    icon: ReactNode;
}

export const ContextualMenuIconInitiator = ({ icon }: ContextualMenuIconInitiatorProps) => {
    return <div className="contextual-menu-icon-initiator">{icon}</div>;
};
