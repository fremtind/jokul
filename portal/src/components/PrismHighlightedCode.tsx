import * as Prism from 'prismjs';
import React, { ReactNode, useEffect } from "react";

interface Props {
    children: ReactNode;
}

export function PrismHighlightedCode(props: Props) {
    useEffect(() => {
        Prism.highlightAll();
    });
    return (
        <pre>
            <code className="language-tsx">{props.children}</code>
        </pre>
    );
}
