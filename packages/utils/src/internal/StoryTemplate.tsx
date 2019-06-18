import React, { ReactNode } from "react";
import { P, LeadParagraph, H2 } from "@fremtind/jkl-typography-react";

interface StoryTemplateProps {
    children: ReactNode;
    title: string;
    tldr?: string;
    description?: string;
}

export const StoryTemplate = ({ children, title, tldr, description }: StoryTemplateProps) => (
    <div style={{ margin: "30px" }}>
        <H2>{title}</H2>
        <LeadParagraph>{tldr}</LeadParagraph>
        <div style={{ padding: "24px" }}>{children}</div>
        <P>{description}</P>
    </div>
);
