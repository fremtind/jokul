import React, { ReactNode } from "react";

interface StoryTemplateProps {
    children: ReactNode;
    title: string;
    tldr?: string;
    description?: string;
}

export const StoryTemplate = ({ children, title, tldr, description }: StoryTemplateProps) => (
    <div style={{ margin: "30px" }}>
        <h2 className="jkl-h2">{title}</h2>
        <p className="jkl-lead">{tldr}</p>
        <div style={{ padding: "24px" }}>{children}</div>
        <p className="jkl-p">{description}</p>
    </div>
);
