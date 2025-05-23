import clsx from "clsx";
import React, { type ForwardedRef } from "react";
import type { Density, WithChildren } from "../../../core/types.js";
import { ArrowVerticalAnimated } from "../../icon/icons/animated/ArrowVerticalAnimated.js";
import { ScreenReaderOnly } from "../../ScreenReaderOnly.js";

export interface ExpanderProps extends WithChildren {
    as?: "summary" | "button";
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
    expandDirection?: "up" | "down";
    density?: Density;
    /**
     * Skjul knappeteksten visuelt.
     *
     * @default false
     */
    hideLabel?: boolean;
}

export const Expander = React.forwardRef(
    (
        {
            as = "button",
            className,
            children,
            density,
            expandDirection = "down",
            isExpanded = false,
            hideLabel = false,
            ...rest
        }: ExpanderProps,
        ref: ForwardedRef<HTMLButtonElement>,
    ): JSX.Element => {
        const ContentWrapper = hideLabel ? ScreenReaderOnly : React.Fragment;
        const pointingDown =
            expandDirection === "down" ? !isExpanded : isExpanded;

        const El = as;
        const type = El === "button" ? "button" : undefined;

        return (
            <El
                aria-expanded={isExpanded}
                data-testid="jkl-old-expander"
                type={type}
                className={clsx("jkl-old-expander", className, {
                    "jkl-old-expander--expanded": isExpanded,
                    "jkl-old-expander--icon-only": !children,
                })}
                {...rest}
                data-density={density}
                ref={ref}
            >
                {children && (
                    <ContentWrapper>
                        <span className="jkl-old-expander__text">
                            {children}
                        </span>
                    </ContentWrapper>
                )}
                <ArrowVerticalAnimated
                    className="jkl-old-expander__arrow"
                    pointingDown={pointingDown}
                    bold={isExpanded}
                />
            </El>
        );
    },
);

Expander.displayName = "Expander";
