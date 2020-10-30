import React, { ReactNode } from "react";
import cn from "classnames";

export const Flipper: React.FC<{
    showFirst: boolean;
    firstBorn: ReactNode;
    lastBorn: ReactNode;
    className?: string;
}> = ({ showFirst, firstBorn, lastBorn, className = "" }) => (
    <>
        <span className={`jkl-flipper ${className}`}>
            <span
                className={cn("jkl-flipper__slider", {
                    "jkl-flipper--show-first": showFirst,
                    "jkl-flipper--show-second": !showFirst,
                })}
            >
                <span aria-hidden={!showFirst}>{firstBorn}</span>
                <span aria-hidden={showFirst}>{lastBorn}</span>
            </span>
        </span>
    </>
);
