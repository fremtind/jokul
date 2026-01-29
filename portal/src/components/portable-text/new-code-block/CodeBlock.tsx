import fremtindTheme from "@/components/portable-text/code-block/fremtindTheme";
import fremtindThemeDark from "@/components/portable-text/code-block/fremtindThemeDark";
import type { Jokul_code } from "@/sanity/types";
import { Button } from "@fremtind/jokul/button";
import { useBrowserPreferences } from "@fremtind/jokul/hooks";
import { CheckIcon, CopyIcon } from "@fremtind/jokul/icon";
import type { PortableTextTypeComponentProps } from "next-sanity";
import React, { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import html from "react-syntax-highlighter/dist/esm/languages/prism/markup";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import styles from "./code-block.module.scss";

SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("html", html);

export const NewCodeBlock: React.FC<
    PortableTextTypeComponentProps<Jokul_code>
> = ({ value }) => {
    const { title, code } = value;

    if (!code || !code.language || !code.code) {
        return null;
    }

    const { prefersColorScheme } = useBrowserPreferences();
    const [style, setStyle] = useState(fremtindTheme);
    const [copied, setCopied] = useState<boolean>(false);

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
        <div className={styles.codeBlock} data-language={code.language}>
            <header className={styles.info} data-size="small">
                <p className={styles.title}>{title} </p>
                <span className={styles.language}>.{code.language}</span>
                <Button
                    className={styles.copyButton}
                    variant="ghost"
                    icon={copied ? <CheckIcon /> : <CopyIcon />}
                    aria-label={copied ? "Kopiert" : "Kopier"}
                    onClick={() => {
                        try {
                            navigator.clipboard.writeText(code.code || "");
                            setCopied(true);
                            setTimeout(() => {
                                setCopied(false);
                            }, 2000);
                        } catch {
                            console.warn("Klarte ikke kopiere teksten");
                        }
                    }}
                />
            </header>
            <SyntaxHighlighter
                style={style}
                codeTagProps={{
                    style: {},
                    className: styles.codeBlockCode,
                    tabIndex: 0,
                }}
                language={code.language}
                className={styles.code}
            >
                {code.code.toString()}
            </SyntaxHighlighter>
        </div>
    );
};
