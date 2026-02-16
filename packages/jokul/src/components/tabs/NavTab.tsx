import clsx from "clsx";
import { type ElementType, useCallback } from "react";
import type { Polymorphic } from "../../utilities/index.js";

export type NavTabProps = {
    /**
     * Hook for å kunne stoppe default oppførsel ved tastaturnavigasjon.
     *
     * Om default oppførsel ikke fungerer for deg og du mister tastaturfokus etter
     * navigasjon kan du returnere `false` her og sørge for korrekt oppførsel selv.
     */
    onBeforeKeyboardNavigation?: (
        from: HTMLAnchorElement,
        to: HTMLAnchorElement,
    ) => boolean | undefined;
};

export function NavTab<T extends ElementType = "a">(
    props: Polymorphic<NavTabProps, T>,
) {
    const {
        as = "a",
        ref,
        "aria-selected": selected,
        className,
        onBeforeKeyboardNavigation: onBeforeNavigate,
        ...rest
    } = props;

    const Component = as;

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
                    navigate(
                        current,
                        current.parentElement?.lastChild
                            ?.previousSibling as HTMLAnchorElement,
                    );
                }
            }

            if (event.key === "ArrowRight") {
                const current = event.currentTarget;
                const next = event.currentTarget.nextSibling;

                // skip the focus indicator element
                if (next && next.nodeName === "A") {
                    navigate(current, next as HTMLAnchorElement);
                } else {
                    navigate(
                        current,
                        current.parentElement?.firstChild as HTMLAnchorElement,
                    );
                }
            }
        },
        [navigate],
    );

    return (
        <Component
            ref={ref}
            {...rest}
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
}
