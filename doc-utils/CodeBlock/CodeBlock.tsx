import React, { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import diff from "react-syntax-highlighter/dist/esm/languages/prism/diff";
import sass from "react-syntax-highlighter/dist/esm/languages/prism/sass";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import shellSession from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import { WithChildren } from "../../packages/core/src";
import { useBrowserPreferences } from "../../packages/react-hooks/src";
import fremtindTheme from "./fremtindTheme";
import fremtindThemeDark from "./fremtindThemeDark";
import "./CodeBlock.scss";

SyntaxHighlighter.registerLanguage("diff", diff);
SyntaxHighlighter.registerLanguage("sass", sass);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("shell-session", shellSession);
SyntaxHighlighter.registerLanguage("tsx", tsx);

export interface CodeBlockProps extends WithChildren {
    children: string | string[];
    language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, children }) => {
    const { prefersColorScheme } = useBrowserPreferences();
    const [style, setStyle] = useState(fremtindTheme);

    useEffect(
        () =>
            setStyle(
                prefersColorScheme === "dark"
                    ? fremtindThemeDark
                    : fremtindTheme,
            ),
        [prefersColorScheme],
    );

    return (
        <SyntaxHighlighter
            className="jkl-portal-code-block"
            style={style}
            codeTagProps={{
                style: {},
                className: "jkl-portal-code-block__code",
                tabIndex: 0,
            }}
            language={language}
            data-language={language || undefined}
        >
            {children}
        </SyntaxHighlighter>
    );
};
