import { type Placement, useMergeRefs, FloatingPortal } from "@floating-ui/react";
import clsx from "clsx";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import React, { HTMLProps, forwardRef } from "react";
import { useId } from "../../hooks";
import { getThemeAndDensity } from "../../utilities";
import { useTooltipContext } from "./Tooltip";

function getPositionAnimation(placement: Placement, value: number = 8) {
    switch (true) {
        case placement.startsWith("top"):
            return {
                top: value,
            };
        case placement.startsWith("left"):
            return {
                left: value,
                right: -value,
            };
        case placement.startsWith("bottom"):
            return {
                top: -value,
            };
        case placement.startsWith("right"):
            return {
                left: -value,
                right: value,
            };

        default:
            return {
                top: value,
            };
    }
}

export const TooltipContent = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(function TooltipContent(
    { className, children, ...props },
    forwardedRef,
) {
    const {
        triggerOn,
        arrowElement,
        isOpen,
        getFloatingProps,
        placement,
        isPositioned,
        middlewareData: { arrow },
        floatingStyles,
        refs,
    } = useTooltipContext();
    const ref = useMergeRefs([forwardedRef, refs.setFloating]);
    const contentId = useId("jkl-tooltip-content");

    // Siden tooltipet rendres på rot må vi hente lokal dark/light-verdi fra triggeren
    // Vi må gjøre dette for å ta hensyn til at tema kan styres lokalt for deler av UIet
    const { theme } = getThemeAndDensity(refs.reference.current as HTMLElement);

    return (
        <FloatingPortal>
            <LazyMotion features={domAnimation}>
                <AnimatePresence>
                    {/* For å kunne bruke tekstinnholdet i tooltip som beskrivende tekst, selv når ikke
            tooltip er synlig, må vi rendre et skjult element å referere til for å hente innholdet. */}
                    {triggerOn === "hover" && (
                        <span ref={refs.setDescription} hidden key={`${contentId}-trigger`}>
                            {children}
                        </span>
                    )}
                    {isOpen && (
                        <span className="jkl" key={`${contentId}-wrapper`}>
                            <m.span
                                key={contentId}
                                ref={ref}
                                initial={{ opacity: 0, ...getPositionAnimation(placement, 5) }}
                                animate={{ opacity: 1, ...getPositionAnimation(placement, 0) }}
                                exit={{
                                    opacity: 0,
                                    ...getPositionAnimation(placement, -5),
                                    transition: { ease: "easeIn", duration: 0.15 },
                                }}
                                transition={{ ease: "easeOut", duration: 0.25 }}
                                data-placement={placement}
                                aria-live={triggerOn === "click" ? "assertive" : undefined}
                                className={clsx("jkl-tooltip-content", className)}
                                {...getFloatingProps({ ...props, id: contentId })}
                                style={{ ...floatingStyles }}
                                data-theme={theme}
                            >
                                {children}
                                <span
                                    aria-hidden
                                    className="jkl-tooltip-content__arrow"
                                    ref={arrowElement}
                                    style={{
                                        left: isPositioned ? `${arrow?.x}px` : "",
                                        top: isPositioned ? `${arrow?.y}px` : "",
                                    }}
                                />
                            </m.span>
                        </span>
                    )}
                </AnimatePresence>
            </LazyMotion>
        </FloatingPortal>
    );
});
