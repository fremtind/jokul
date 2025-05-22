import React, { useState, type FC } from "react";
import {
    ExpandablePanel,
    Expander,
} from "../../packages/jokul/src/components/expander";
import type { WithChildren } from "../../packages/jokul/src/core";

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
            <Expander style={{ width: "fit-content", minWidth: 150 }}>
                {showCodeText}
            </Expander>
            <ExpandablePanel.Content>{children}</ExpandablePanel.Content>
        </ExpandablePanel>
    );
};
