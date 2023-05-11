import { Density } from "@fremtind/jkl-core";
import { CheckIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { ButtonHTMLAttributes, PointerEventHandler, forwardRef } from "react";
import { useSwipeGesture } from "./useSwipeGesture";

export type ToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
    density?: Density;
    /**
     * Knappen har støtte for å swipes til høyre eller venstre. Her kan du styre hva
     * som skjer når brukere swiper/trekker knappen til venstre (f.eks. sette state til av)
     */
    onSwipeLeft: PointerEventHandler<HTMLButtonElement>;
    /**
     * Knappen har støtte for å swipes til høyre eller venstre. Her kan du styre hva
     * som skjer når brukere swiper/trekker knappen til høyre (f.eks. sette state til på)
     */
    onSwipeRight: PointerEventHandler<HTMLButtonElement>;
};

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleProps>(
    ({ children, className, density, id, onClick, onSwipeLeft, onSwipeRight, ...buttonProps }, ref) => {
        const uid = useId(id || "jkl-toggle-switch", { generateSuffix: !id });

        const { gestureHandlers } = useSwipeGesture({ onClick, onSwipeLeft, onSwipeRight });

        return (
            <button
                {...buttonProps}
                className={cn("jkl-toggle-switch", className)}
                id={uid}
                ref={ref}
                aria-pressed={buttonProps["aria-pressed"] || "false"}
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
        );
    },
);
ToggleSwitch.displayName = "ToggleSwitch";
