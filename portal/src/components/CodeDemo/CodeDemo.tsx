import React from "react";
import { CodeBlock } from "../Typography/Typography";

interface Props {
    code: string;
}

export const CodeDemo: React.FC<Props> = ({ code }) => (
    <CodeBlock language="tsx">
        <>{code}</>
    </CodeBlock>
);
