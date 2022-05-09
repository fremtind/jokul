import React from "react";
import { WithChildren } from "@forbrukerradet/jkl-core";
import { WarningMessageBox } from "@forbrukerradet/jkl-message-box-react";

export const Experimental: React.FC<WithChildren> = ({ children }) => {
    return (
        <WarningMessageBox
            className="jkl-portal-paragraph jkl-spacing-xl--top jkl-spacing-xl--bottom"
            title="Eksperimentell komponent"
        >
            {children}
        </WarningMessageBox>
    );
};
