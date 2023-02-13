import { Density, ScreenReaderOnly, TextStyle, WithChildren } from "@fremtind/jkl-core";
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
    density?: Density;
    /**
     * Skjul knappeteksten visuelt.
     *
     * @default false
     */
    hideLabel?: boolean;
    textStyle?: TextStyle;
}

export const ExpandButton = ({
    className,
    children,
    density,
    expandDirection = "down",
    isExpanded = false,
    hideLabel = false,
    textStyle,
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
                "jkl-expand-button--icon-only": !children,
            })}
            style={
                textStyle
                    ? ({
                          "--jkl-expand-button-font-size": `var(--jkl-${textStyle}-font-size)`,
                          "--jkl-expand-button-line-height": `var(--jkl-${textStyle}-line-height)`,
                          "--jkl-expand-button-font-weight": `var(--jkl-${textStyle}-font-weight)`,
                      } as React.CSSProperties)
                    : undefined
            }
            {...rest}
            data-density={density}
        >
            {children && (
                <ContentWrapper>
                    <span className="jkl-expand-button__text">{children}</span>
                </ContentWrapper>
            )}
            <ArrowVerticalAnimated
                className="jkl-expand-button__arrow"
                pointingDown={pointingDown}
                variant="inherit"
                bold={!pointingDown}
            />
        </button>
    );
};
