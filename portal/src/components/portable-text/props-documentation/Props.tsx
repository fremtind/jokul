"use client";

import { ExpandablePanel, Expander } from "@fremtind/jokul/components/expander";
import type { FC } from "react";

export const Props: FC<{ props: string }> = ({ props }) => {
    return (
        <ExpandablePanel>
            <Expander>Typer</Expander>
            <ExpandablePanel.Content>
                <pre style={{ maxWidth: "0.8vw" }}>{props}</pre>
            </ExpandablePanel.Content>
        </ExpandablePanel>
    );
};
