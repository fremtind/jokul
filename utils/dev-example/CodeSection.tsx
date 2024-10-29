import React, { useState, FC } from "react";
import { ExpandSection } from "../../packages/jokul/src/components/expander";
import { WithChildren } from "../../packages/jokul/src/core";

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
