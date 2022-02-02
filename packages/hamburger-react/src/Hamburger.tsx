import React from "react";
import { ContentToggle } from "@fremtind/jkl-content-toggle-react";
import classnames from "classnames";

export interface HamburgerProps {
    /** Kreves for at menyen skal kunne sette `aria-labelledby`. */
    id: string;
    /** Hjelp skjermleseren forstå hva som blir styrt av hamburgeren. */
    "aria-controls": string;
    /**
     * Gi en beskrivende tekst for skjermlesere.
     * @default "Hovedmeny"
     */
    "aria-label"?: string;
    /** Styrer utseende, tekst, og `aria-expanded`. */
    isOpen: boolean;
    onClick: (() => void) | ((evt: React.MouseEvent) => void);
    className?: string;
    /**
     * Vis en tekst før eller etter hamburgerikonet som varierer med åpnet og
     * lukket tilstand.
     *
     * NB! Komponenten setter en standard `aria-label`. Skjermlesere vil kunne
     * ignorere teksten i `actionLabel` og fremdeles annonsere knappens
     * `aria-label`. Skjermleseren annonserer knappens tilstand basert på
     * `aria-expanded`.
     *
     * Dersom du heller ønsker at knappens `actionLabel` skal leses opp må du
     * sette en tom string som `aria-label`.
     */
    actionLabel?: {
        open: string;
        close: string;
        animated?: boolean;
        position?: "before" | "after";
    };
}

export const Hamburger = ({
    "aria-label": ariaLabel = "Hovedmeny",
    isOpen,
    onClick,
    className,
    actionLabel,
    ...rest
}: HamburgerProps): JSX.Element => {
    const componentClassname = classnames(
        "jkl-hamburger",
        {
            "jkl-hamburger--label-before": actionLabel?.position === "before",
            "jkl-hamburger--label-after": actionLabel && actionLabel.position !== "before",
        },
        className,
    );

    const labelClassname = classnames("jkl-hamburger__label", {
        "jkl-hamburger__label--animated": actionLabel?.animated,
    });

    return (
        <button
            type="button"
            aria-label={ariaLabel ? ariaLabel : undefined}
            onClick={onClick}
            className={componentClassname}
            aria-expanded={isOpen}
            data-testid="jkl-hamburger"
            {...rest}
        >
            <span className="jkl-hamburger__lines"></span>
            {actionLabel && (
                <ContentToggle
                    className={labelClassname}
                    secondary={actionLabel.close}
                    showSecondary={isOpen}
                    variant="fade"
                >
                    {actionLabel.open}
                </ContentToggle>
            )}
        </button>
    );
};
