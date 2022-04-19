import React, { ReactNode } from "react";
import { WarningMessageBox } from "@fremtind/jkl-message-box-react";

interface ExperimentalProps {
    children?: ReactNode;
}

export const Experimental: React.FC<ExperimentalProps> = ({ children }) => {
    return (
        <WarningMessageBox
            className="jkl-portal-paragraph jkl-spacing-xl--top jkl-spacing-xl--bottom"
            title="Eksperimentell komponent"
        >
            {children}
        </WarningMessageBox>
    );
};
