import { WithChildren } from "@fremtind/jkl-core";
import { ExpandSection } from "@fremtind/jkl-expand-button-react";
import React, { useState, FC } from "react";

export interface CodeSectionProps extends WithChildren {
    className?: string;
}

export const CodeSection: FC<CodeSectionProps> = ({ className, children }) => {
    const [showCodeText, setShowCodeText] = useState("Vis kode");
    return (
        <ExpandSection
            className={className}
            title={showCodeText}
            onClick={(e, expanded) => setShowCodeText(expanded ? "Skjul kode" : "Vis kode")}
        >
            {children}
        </ExpandSection>
    );
};
