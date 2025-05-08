import clsx from "clsx";
import React, { forwardRef, useCallback } from "react";
import { PolymorphicRef } from "../../utilities/index.js";
import { NavTabProps } from "./types.js";

type NavTabComponent = <ElementType extends React.ElementType = "a">(
    props: NavTabProps<ElementType>,
) => React.ReactElement | null;

export const NavTab = forwardRef(function NavTab<
    ElementType extends React.ElementType = "a",
>(props: NavTabProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "a",
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
}) as NavTabComponent;
