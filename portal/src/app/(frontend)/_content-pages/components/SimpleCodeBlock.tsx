"use client";

import { Button } from "@fremtind/jokul/button";
import { CheckIcon, CopyIcon } from "@fremtind/jokul/icon";
import { useEffect, useState } from "react";
import styles from "../content-page.module.scss";

interface SimpleCodeBlockProps {
    code: string;
    language?: string;
}

export const SimpleCodeBlock = ({
    code,
    language,
}: SimpleCodeBlockProps) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) {
            return;
        }

        const timeout = window.setTimeout(() => {
            setCopied(false);
        }, 2000);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [copied]);

    return (
        <div className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLanguage}>
                    {language ? `.${language}` : "Kode"}
                </span>
                <Button
                    variant="ghost"
                    icon={copied ? <CheckIcon /> : <CopyIcon />}
                    aria-label={copied ? "Kopiert" : "Kopier kode"}
                    data-size="small"
                    data-density="compact"
                    onClick={() => {
                        void navigator.clipboard.writeText(code);
                        setCopied(true);
                    }}
                />
            </div>
            <pre className={styles.codeBlockContent}>
                <code>{code}</code>
            </pre>
        </div>
    );
};
