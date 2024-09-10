import { WithChildren } from "@fremtind/jkl-core";
import { WarningMessage } from "@fremtind/jkl-message-react";
import React from "react";

export const Experimental: React.FC<WithChildren> = ({ children }) => {
    return (
        <WarningMessage
            className="jkl-portal-paragraph my-40"
            title="Eksperimentell komponent"
            role="none presentation"
        >
            {children}
        </WarningMessage>
    );
};
