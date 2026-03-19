"use client";

import { useBrowserPreferences } from "@fremtind/jokul/hooks";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./frontPageLogo.module.scss";

const sanitizeAnimatedText = (text: string) =>
    text.replace(/\u200B|\u200C|\u200D|\u2060|\uFEFF/g, "");

interface FrontPageLogoTextProps {
    text: string;
    delay: number;
}

export const FrontPageLogoText = ({ text, delay }: FrontPageLogoTextProps) => {
    const { prefersReducedMotion } = useBrowserPreferences();
    const cleanText = sanitizeAnimatedText(text);
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (prefersReducedMotion || !cleanText.length) {
            setDisplayedText(cleanText);
            return;
        }

        setDisplayedText("");
        let index = 0;
        let timeout = 0;

        const scheduleNextCharacter = () => {
            timeout = window.setTimeout(
                () => {
                    index += 1;
                    setDisplayedText(cleanText.slice(0, index));

                    if (index < cleanText.length) {
                        scheduleNextCharacter();
                    }
                },
                Math.max(delay, Math.round(Math.random() * delay + delay / 2)),
            );
        };

        scheduleNextCharacter();

        return () => {
            window.clearTimeout(timeout);
        };
    }, [cleanText, delay, prefersReducedMotion]);

    return (
        <div
            className={clsx(styles.logoTextContent, {
                [styles.logoTextContentDone]: displayedText === cleanText,
            })}
        >
            {displayedText}
        </div>
    );
};
