import React, { useContext, useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";

SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("scss", scss);

import { a11yContext } from "../../contexts/a11yContext";
import fremtindTheme from "./fremtindTheme";
import fremtindThemeDark from "./fremtindThemeDark";

import "./CodeBlock.scss";

export const CodeBlock: React.FC<{ language: string }> = ({ language, children }) => {
    const { prefersColorScheme } = useContext(a11yContext);
    const [style, setStyle] = useState(fremtindTheme);

    useEffect(() => setStyle(prefersColorScheme === "dark" ? fremtindThemeDark : fremtindTheme), [prefersColorScheme]);

    return (
        <SyntaxHighlighter
            className="jkl-portal-code-block"
            style={style}
            codeTagProps={{ style: {}, className: "jkl-portal-code-block__code", tabIndex: 0 }}
            language={language}
            data-language={language}
        >
            {children}
        </SyntaxHighlighter>
    );
};
