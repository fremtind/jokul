import React, { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import fremtindTheme from "./fremtindTheme";
import fremtindThemeDark from "./fremtindThemeDark";
import { useBrowserPreferences, type WithChildren } from "@fremtind/jokul";

import styles from "./code-block.module.scss";

SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("tsx", tsx);

export type CodeBlockProps = WithChildren & {
    children: string | string[];
    language?: string;
};

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
            className={styles.codeBlock}
            style={style}
            codeTagProps={{
                style: {},
                className: styles.codeBlockCode,
                tabIndex: 0,
            }}
            language={language}
            data-language={language || undefined}
        >
            {children}
        </SyntaxHighlighter>
    );
};
