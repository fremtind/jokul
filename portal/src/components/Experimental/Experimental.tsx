import React from "react";
import { WarningMessageBox } from "@fremtind/jkl-message-box-react";

export const Experimental: React.FC = ({ children }) => {
    return (
        <WarningMessageBox
            className="jkl-portal-paragraph jkl-spacing-xl--top jkl-spacing-xl--bottom"
            title="Eksperimentell komponent"
        >
            {children}
        </WarningMessageBox>
    );
};
