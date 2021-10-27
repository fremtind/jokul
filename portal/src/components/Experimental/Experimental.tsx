import React from "react";
import { WarningMessage } from "@fremtind/jkl-message-box-react";

export const Experimental: React.FC = ({ children }) => {
    return (
        <WarningMessage className="jkl-spacing-xl--top jkl-spacing-xl--bottom" title="Eksperimentell komponent">
            {children}
        </WarningMessage>
    );
};
