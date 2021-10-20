import React from "react";
import { WarningMessageBox } from "@fremtind/jkl-message-box-react";

export const Experimental: React.FC = ({ children }) => {
    return (
        <WarningMessageBox
            className="jkl-layout-spacing--medium-top jkl-layout-spacing--medium-bottom"
            title="Eksperimentell komponent"
        >
            {children}
        </WarningMessageBox>
    );
};
