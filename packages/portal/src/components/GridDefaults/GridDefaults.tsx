import React, { ReactNode } from "react";
import { GridElement } from "@fremtind/jkl-grid-react";

interface GridContentProps {
    children: ReactNode;
}

export const GridContent = ({ children }: GridContentProps) => (
    <GridElement columnSpan={{ small: 4, medium: 6, large: 6 }}>{children}</GridElement>
);
export const GridOffsetBefore = () => <GridElement columnSpan={{ small: 0, medium: 1, large: 2 }} />;
export const GridOffsetAfter = () => <GridElement columnSpan={{ small: 0, medium: 1, large: 4 }} />;
