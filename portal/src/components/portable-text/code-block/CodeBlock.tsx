"use client";

import { Button } from "@fremtind/jokul/button";
import { useBrowserPreferences } from "@fremtind/jokul/hooks";
import React, { type ReactNode, useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import fremtindTheme from "./fremtindTheme";
import fremtindThemeDark from "./fremtindThemeDark";

import { renderToStaticMarkup } from "react-dom/server";
import styles from "./code-block.module.scss";

SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("tsx", tsx);

export type CodeBlockProps = {
    children: string;
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

    if (!children) {
        return null;
    }

    return (
        <div className={styles.codeBlock}>
            <Button
                variant={"primary"}
                density={"compact"}
                onClick={(_) => {
                    navigator.clipboard.writeText(children.toString());
                }}
            >
                Kopier
            </Button>

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
                {children.toString()}
            </SyntaxHighlighter>
        </div>
    );
};
