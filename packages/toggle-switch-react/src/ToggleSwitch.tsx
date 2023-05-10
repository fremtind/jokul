import { Density } from "@fremtind/jkl-core";
import { CheckIcon } from "@fremtind/jkl-icons-react";
import { SupportLabel } from "@fremtind/jkl-input-group-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { ButtonHTMLAttributes, PointerEventHandler, forwardRef } from "react";
import { useSwipeGesture } from "./useSwipeGesture";

export type ToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    density?: Density;
    helpLabel?: string;
    /**
     * Knappen har støtte for å swipes til høyre eller venstre. Her kan du styre hva
     * som skjer når brukere swiper/trekker knappen til venstre (f.eks. sette state til av)
     */
    onSwipeLeft?: PointerEventHandler<HTMLButtonElement>;
    /**
     * Knappen har støtte for å swipes til høyre eller venstre. Her kan du styre hva
     * som skjer når brukere swiper/trekker knappen til høyre (f.eks. sette state til på)
     */
    onSwipeRight?: PointerEventHandler<HTMLButtonElement>;
    /**
     * Om knappen er på.
     * @deprecated Bruk heller aria-pressed direkte
     */
    pressed?: boolean;
};

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleProps>(
    (
        { children, className, density, helpLabel, id, onClick, onSwipeLeft, onSwipeRight, pressed, ...buttonProps },
        ref,
    ) => {
        const uid = useId(id || "jkl-toggle-switch", { generateSuffix: !id });
        const supportId = `${uid}_support-label`;

        const { gestureHandlers } = useSwipeGesture({ onClick, onSwipeLeft, onSwipeRight });

        return (
            <div className={cn("jkl-toggle-switch__wrapper", className)}>
                <button
                    {...buttonProps}
                    className="jkl-toggle-switch"
                    id={uid}
                    ref={ref}
                    aria-pressed={buttonProps["aria-pressed"] || !!pressed || "false"}
                    aria-describedby={helpLabel ? supportId : undefined}
                    data-density={density}
                    {...gestureHandlers}
                >
                    {children}
                    <div aria-hidden className="jkl-toggle-switch-widget">
                        <div className="jkl-toggle-switch-widget__slider">
                            <div className="jkl-toggle-switch-widget__knob" />
                            <CheckIcon variant="small" bold className="jkl-toggle-switch-widget__indicator" />
                        </div>
                    </div>
                </button>
                {helpLabel && (
                    <SupportLabel
                        id={supportId}
                        className="jkl-toggle-switch__help-label"
                        density={density}
                        label={helpLabel}
                        labelType="help"
                    />
                )}
            </div>
        );
    },
);
ToggleSwitch.displayName = "ToggleSwitch";
