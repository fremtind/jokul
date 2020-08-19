import React from "react";
import { WarningMessage } from "@fremtind/jkl-message-box-react";

export const Experimental: React.FC = ({ children }) => {
    return (
        <WarningMessage
            className="jkl-layout-spacing--medium-top jkl-layout-spacing--medium-bottom"
            title="Eksperimentell komponent"
        >
            {children}
        </WarningMessage>
    );
};
