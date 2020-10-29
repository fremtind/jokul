import React, { ReactNode } from "react";
import cn from "classnames";
import { ScreenReaderOnly } from "@fremtind/jkl-core";

export const Flipper: React.FC<{
    showFirst: boolean;
    firstBorn: ReactNode;
    lastBorn: ReactNode;
    screenReaderText: string;
    className?: string;
}> = ({ showFirst, firstBorn, lastBorn, screenReaderText, className = "" }) => (
    <>
        <ScreenReaderOnly>{screenReaderText}</ScreenReaderOnly>
        <span className={`jkl-flipper ${className}`} aria-hidden={true}>
            <span
                className={cn("jkl-flipper__slider", {
                    "jkl-flipper--show-first": !showFirst,
                    "jkl-flipper--show-second": showFirst,
                })}
            >
                <span>{firstBorn}</span>
                <span>{lastBorn}</span>
            </span>
        </span>
    </>
);
