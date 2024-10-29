import React, { useState, FC } from "react";
import { WithChildren } from "../packages/core";
import { ExpandSection } from "../packages/expand-button-react";

export interface CodeSectionProps extends WithChildren {
    className?: string;
}

export const CodeSection: FC<CodeSectionProps> = ({ className, children }) => {
    const [showCodeText, setShowCodeText] = useState("Vis kode");
    return (
        <ExpandSection
            className={className}
            title={showCodeText}
            onClick={(e, expanded) =>
                setShowCodeText(expanded ? "Skjul kode" : "Vis kode")
            }
        >
            {children}
        </ExpandSection>
    );
};
