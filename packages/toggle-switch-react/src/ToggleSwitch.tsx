import { Density } from "@fremtind/jkl-core";
import { CheckIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { type ButtonHTMLAttributes, type MouseEventHandler, forwardRef } from "react";
import { useSwipeGesture } from "./useSwipeGesture";

export type ToggleChangeHandler<T extends HTMLElement> = (
    event: React.MouseEvent<T> | React.PointerEvent<T>,
    pressed: boolean,
) => void;

export type ToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled" | "onChange"> & {
    density?: Density;
    /**
     * Handler for å håndtere toggling av knappen. Tar inn en boolean som indikerer om knappen er er togglet på
     * eller ikke, samt en MouseEvent eller en PointerEvent avhengig av om togglingen skjedde via klikk eller swipe.
     * @example
     * ```js
     * function handleChange(event, pressed) {
     *    console.log(`ToggleSwitch er ${pressed ? "på" : "av"}`);
     * }
     * ```
     */
    onChange?: ToggleChangeHandler<HTMLButtonElement>;
};

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleProps>(
    ({ "aria-pressed": ariaPressed = false, children, className, density, id, onChange, ...rest }, ref) => {
        const uid = useId(id || "jkl-toggle-switch", { generateSuffix: !id });
        const [pressed, setPressed] = React.useState(ariaPressed);

        const { onClick, onPointerCancel, onPointerDown, onPointerMove, onPointerUp, ...buttonProps } = rest;

        const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
            setPressed(!pressed);
            onChange?.(event, !pressed);
            onClick?.(event);
        };

        const handleChange: ToggleChangeHandler<HTMLButtonElement> = (event, toggleTo) => {
            if (toggleTo !== pressed) {
                setPressed(toggleTo);
                onChange?.(event, toggleTo);
            }
        };

        const { gestureHandlers } = useSwipeGesture({
            onClick: handleClick,
            onChange: handleChange,
            onPointerCancel,
            onPointerDown,
            onPointerMove,
            onPointerUp,
        });

        return (
            <button
                className={cn("jkl-toggle-switch", className)}
                id={uid}
                ref={ref}
                aria-pressed={pressed}
                data-density={density}
                {...buttonProps}
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
