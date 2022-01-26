import cx from "classnames";
import React, { ReactNode } from "react";
import { ScreenReaderOnly } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";

export type ExpandDirection = "up" | "down";

export interface ExpandButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * @default false
     */
    isExpanded?: boolean;
    /** @default "down" */
    expandDirection?: ExpandDirection;
    /**
     * @default false
     */
    forceCompact?: boolean;
    /**
     * Skjul knappeteksten visuelt.
     *
     * @default false
     */
    hideLabel?: boolean;
}

export const ExpandButton = ({
    className,
    children,
    forceCompact = false,
    expandDirection = "down",
    isExpanded = false,
    hideLabel = false,
    ...rest
}: ExpandButtonProps): JSX.Element => {
    const ContentWrapper = hideLabel ? ScreenReaderOnly : React.Fragment;
    const pointingDown = expandDirection === "down" ? !isExpanded : isExpanded;
    return (
        <button
            aria-expanded={isExpanded}
            data-testid="jkl-expand-button"
            type="button"
            className={cx("jkl-expand-button", className, {
                "jkl-expand-button--expanded": isExpanded,
                "jkl-expand-button--compact": forceCompact,
            })}
            {...rest}
        >
            <ContentWrapper>{children}</ContentWrapper>
            <ArrowVerticalAnimated className="jkl-expand-button__arrow" pointingDown={pointingDown} />
        </button>
    );
};
