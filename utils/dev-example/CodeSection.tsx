import React, { useState, FC } from "react";
import {
    ExpandablePanel,
    Expander,
} from "../../packages/jokul/src/components/expander";
import { WithChildren } from "../../packages/jokul/src/core";

export interface CodeSectionProps extends WithChildren {
    className?: string;
}

export const CodeSection: FC<CodeSectionProps> = ({ className, children }) => {
    const [showCodeText, setShowCodeText] = useState("Vis kode");
    return (
        <ExpandablePanel
            className={className}
            style={{ maxWidth: 500 }}
            onOpenChange={(open) =>
                setShowCodeText(open ? "Skjul kode" : "Vis kode")
            }
        >
            <Expander>{showCodeText}</Expander>
            <ExpandablePanel.Content>{children}</ExpandablePanel.Content>
        </ExpandablePanel>
    );
};
