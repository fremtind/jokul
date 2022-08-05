import { ContentToggle } from "@fremtind/jkl-content-toggle-react";
import { ScreenReaderOnly, WithChildren } from "@fremtind/jkl-core";
import { ArrowDown, ArrowUp } from "@fremtind/jkl-icons-react";
import cn from "classnames";
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
     * Skal bare brukes i informasjonstette applikasjoner.
     * @default false
     */
    compact?: boolean;
    /**
     * @default false
     * @deprecated Bruk compact
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
    compact,
    forceCompact = false,
    expandDirection = "down",
    isExpanded = false,
    hideLabel = false,
    ...rest
}: ExpandButtonProps): JSX.Element => {
    const ContentWrapper = hideLabel ? ScreenReaderOnly : React.Fragment;

    return (
        <button
            aria-expanded={isExpanded}
            data-testid="jkl-expand-button"
            data-expand-direction={expandDirection}
            type="button"
            className={cn("jkl-expand-button", className, {
                "jkl-expand-button--expanded": isExpanded,
                "jkl-expand-button--compact": compact || forceCompact,
                "jkl-expand-button--icon-only": !children,
            })}
            {...rest}
        >
            {children && (
                <ContentWrapper>
                    <span className="jkl-expand-button__text">{children}</span>
                </ContentWrapper>
            )}
            <ContentToggle
                className="jkl-expand-button__arrow"
                showSecondary={!isExpanded}
                secondary={expandDirection === "down" ? <ArrowDown /> : <ArrowUp />}
            >
                {expandDirection === "down" ? <ArrowUp /> : <ArrowDown />}
            </ContentToggle>
        </button>
    );
};
