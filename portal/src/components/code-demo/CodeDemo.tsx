import React from "react";
import { CodeBlock } from "../Typography";

interface Props {
    code: string;
    /** @default "tsx" */
    language: string;
}

export const CodeDemo: React.FC<Props> = ({ code, language = "tsx" }) => (
    <CodeBlock language={language}>
        <>{code}</>
    </CodeBlock>
);
