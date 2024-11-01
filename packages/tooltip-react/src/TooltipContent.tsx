import {
    FloatingArrow,
    FloatingPortal,
    type Side,
    useMergeRefs,
    useTransitionStyles,
} from "@floating-ui/react";
import { getThemeAndDensity } from "@fremtind/jkl-core";
import { useBrowserPreferences, useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { HTMLProps, forwardRef } from "react";
import { useTooltipContext } from "./Tooltip";

function getTranslation(side: Side, value: number = 0) {
    switch (side) {
        case "top":
            return `0 ${value}px`;
        case "left":
            return `${value}px 0`;
        case "bottom":
            return `0 ${-value}px`;
        case "right":
            return `${-value}px 0`;

        default:
            return `0 ${value}px`;
    }
}

export const TooltipContent = forwardRef<
    HTMLDivElement,
    HTMLProps<HTMLDivElement>
>(function TooltipContent({ className, children, ...props }, forwardedRef) {
    const {
        context,
        triggerOn,
        arrowElement,
        getFloatingProps,
        placement,
        floatingStyles,
        refs,
    } = useTooltipContext();
    const ref = useMergeRefs([forwardedRef, refs.setFloating]);
    const contentId = useId("jkl-tooltip-content");
    const { prefersReducedMotion } = useBrowserPreferences();
    const { isMounted, styles: animationStyles } = useTransitionStyles(
        context,
        {
            duration: {
                open: prefersReducedMotion ? 0 : 250,
                close: prefersReducedMotion ? 0 : 150,
            },
            initial: ({ side }) => ({
                opacity: 0,
                translate: getTranslation(side, 5),
            }),
            open: ({ side }) => ({
                opacity: 1,
                translate: getTranslation(side, 0),
            }),
            close: ({ side }) => ({
                opacity: 0,
                translate: getTranslation(side, -5),
            }),
        },
    );

    // Siden tooltipet rendres på rot må vi hente lokal dark/light-verdi fra triggeren
    // Vi må gjøre dette for å ta hensyn til at tema kan styres lokalt for deler av UIet
    const { density, theme } = getThemeAndDensity(
        refs.reference.current as HTMLElement,
    );

    return (
        <FloatingPortal>
            {/* For å kunne bruke tekstinnholdet i tooltip som beskrivende tekst, selv når ikke
            tooltip er synlig, må vi rendre et skjult element å referere til for å hente innholdet. */}
            {triggerOn === "hover" && (
                <span
                    ref={refs.setDescription}
                    hidden
                    key={`${contentId}-trigger`}
                >
                    {children}
                </span>
            )}
            {isMounted && (
                <span className="jkl" key={`${contentId}-wrapper`}>
                    <span
                        key={contentId}
                        ref={ref}
                        data-placement={placement}
                        aria-live={
                            triggerOn === "click" ? "assertive" : undefined
                        }
                        data-theme={theme}
                        data-layout-density={density}
                        className={cn("jkl-tooltip-content", className)}
                        {...getFloatingProps({
                            ...props,
                            id: contentId,
                        })}
                        style={{ ...floatingStyles, ...animationStyles }}
                    >
                        {children}
                        <FloatingArrow
                            context={context}
                            ref={arrowElement}
                            width={24}
                            height={12}
                            fill="var(--background-color)"
                        />
                    </span>
                </span>
            )}
        </FloatingPortal>
    );
});
