import { WithChildren } from "@fremtind/jkl-core";
import { WarningMessageBox } from "@fremtind/jkl-message-box-react";
import React from "react";

export const Experimental: React.FC<WithChildren> = ({ children }) => {
    return (
        <WarningMessageBox
            className="jkl-portal-paragraph jkl-spacing-40--top jkl-spacing-40--bottom"
            title="Eksperimentell komponent"
            role="none presentation"
        >
            {children}
        </WarningMessageBox>
    );
};
