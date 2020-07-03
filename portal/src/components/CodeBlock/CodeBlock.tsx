import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { useTheme } from "../../contexts/themeContext";
import fremtindTheme from "./fremtindTheme";
import fremtindThemeDark from "./fremtindThemeDark";

import "./CodeBlock.scss";

export const CodeBlock: React.FC<{ language: string }> = ({ language, children }) => {
    const { theme } = useTheme();
    const style = theme === "dark" ? fremtindThemeDark : fremtindTheme;
    return (
        <SyntaxHighlighter
            className="jkl-portal-code-block"
            style={style}
            codeTagProps={{ style: {}, className: "jkl-portal-code-block__code" }}
            language={language}
            data-language={language}
        >
            {children}
        </SyntaxHighlighter>
    );
};
