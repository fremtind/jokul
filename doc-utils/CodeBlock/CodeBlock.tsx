import React, { useEffect, useState } from "react";
import { WithChildren } from "@fremtind/jkl-core";
import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import shellSession from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import sass from "react-syntax-highlighter/dist/esm/languages/prism/sass";

SyntaxHighlighter.registerLanguage("sass", sass);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("shell-session", shellSession);
SyntaxHighlighter.registerLanguage("tsx", tsx);

import fremtindTheme from "./fremtindTheme";
import fremtindThemeDark from "./fremtindThemeDark";

import "./CodeBlock.scss";

export interface CodeBlockProps extends WithChildren {
    children: string | string[];
    language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
    const { prefersColorScheme } = useBrowserPreferences();
    const [style, setStyle] = useState(fremtindTheme);

    useEffect(() => setStyle(prefersColorScheme === "dark" ? fremtindThemeDark : fremtindTheme), [prefersColorScheme]);

    return (
        <SyntaxHighlighter
            className="jkl-portal-code-block"
            style={style}
            codeTagProps={{ style: {}, className: "jkl-portal-code-block__code", tabIndex: 0 }}
            language={language}
            data-language={language || undefined}
        >
            {children}
        </SyntaxHighlighter>
    );
};
