import clsx from "clsx";
import React, { type ElementType, forwardRef, useCallback, type AnchorHTMLAttributes } from "react";

export interface NavTabProps<T extends object = Record<string, unknown>>
    extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Sett til true for den nåværende fanen. False på resten. */
    "aria-selected": boolean;
    className?: string;
    id?: string;
    /**
     * Overstyr hvilken komponent som skal brukes, for eksempel hvis du har en Link-komponent fra en router.
     * @default "a"
     */
    component?: ElementType;
    /** Send inn custom props til `component`. Nyttig om routeren din har noe fancy custom greier. */
    componentProps?: T;
    /** Vanlig alternativ til `href` i routere. */
    to?: string;
    href?: string;
    /**
     * Hook for å kunne stoppe default oppførsel ved tastaturnavigasjon.
     *
     * Om default oppførsel ikke fungerer for deg og du mister tastaturfokus etter
     * navigasjon kan du returnere `false` her og sørge for korrekt oppførsel selv.
     */
    onBeforeKeyboardNavigation?: (from: HTMLAnchorElement, to: HTMLAnchorElement) => boolean | void;
}

export const NavTab = forwardRef<HTMLAnchorElement, NavTabProps>((props, ref) => {
    const {
        component = "a",
        "aria-selected": selected,
        className,
        componentProps = {},
        onBeforeKeyboardNavigation: onBeforeNavigate,
        ...rest
    } = props;

    const Component = component;

    const navigate = useCallback(
        (from: HTMLAnchorElement, to: HTMLAnchorElement) => {
            if (onBeforeNavigate) {
                // Åpne for å stoppe selve navigeringen hvis det skulle være behov for å gjøre noe custom med fokus og navigasjon
                const doNavigate = onBeforeNavigate(from, to);
                if (doNavigate === false) {
                    return;
                }
            }

            to.focus();
            // Click brukes for å være router-agnostisk
            to.click();
        },
        [onBeforeNavigate],
    );

    const handleOnKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLAnchorElement>) => {
            if (event.key === "ArrowLeft") {
                const current = event.currentTarget;
                const prev = event.currentTarget.previousSibling;

                if (prev) {
                    navigate(current, prev as HTMLAnchorElement);
                } else {
                    navigate(current, current.parentElement?.lastChild?.previousSibling as HTMLAnchorElement);
                }
            }

            if (event.key === "ArrowRight") {
                const current = event.currentTarget;
                const next = event.currentTarget.nextSibling;

                // skip the focus indicator element
                if (next && next.nodeName === "A") {
                    navigate(current, next as HTMLAnchorElement);
                } else {
                    navigate(current, current.parentElement?.firstChild as HTMLAnchorElement);
                }
            }
        },
        [navigate],
    );

    return (
        <Component
            ref={ref}
            {...rest}
            {...componentProps}
            role="tab"
            aria-selected={selected}
            className={clsx("jkl-tab", className)}
            onKeyDown={handleOnKeyDown}
            // En faneliste skal være én fokuserbar gruppe.
            // Piltaster brukes for å veksle mellom faner.
            // Bare den aktive fanen skal være fokuserbar med tastatur.
            tabIndex={selected ? 0 : -1}
        />
    );
});

NavTab.displayName = "NavTab";
