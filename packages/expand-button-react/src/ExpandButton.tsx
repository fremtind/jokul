import { ScreenReaderOnly, WithChildren } from "@fremtind/jkl-core";
import { ArrowVerticalAnimated } from "@fremtind/jkl-icons-react";
import cx from "classnames";
import React from "react";

export type ExpandDirection = "up" | "down";

export interface ExpandButtonProps extends WithChildren {
    /** Må settes dersom du ikke bruker CoreToggle. Verdien skal være IDen til innholdet du ekspanderer. */
    "aria-controls"?: string;
    /** Må settes dersom du ikke bruker CoreToggle. IDen her skal brukes som verdien til aria-labelledby på innholdet du ekspanderer. */
    id?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
    /**
     * Styrer retningen til pila, som animeres ved endring. Styrer også aria-expanded.
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
                "jkl-expand-button--icon-only": !children,
            })}
            {...rest}
        >
            {children && (
                <ContentWrapper>
                    <span className="jkl-expand-button__text">{children}</span>
                </ContentWrapper>
            )}
            <ArrowVerticalAnimated className="jkl-expand-button__arrow" pointingDown={pointingDown} />
        </button>
    );
};
