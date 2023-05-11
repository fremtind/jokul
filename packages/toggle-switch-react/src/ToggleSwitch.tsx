import { Density } from "@fremtind/jkl-core";
import { CheckIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { type ButtonHTMLAttributes, type MouseEventHandler, forwardRef } from "react";
import { useSwipeGesture } from "./useSwipeGesture";

export type ToggleHandler<T extends HTMLElement> = (
    pressed: boolean,
    event: React.MouseEvent<T> | React.PointerEvent<T>,
) => void;

export type ToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
    density?: Density;
    /**
     * Handler for å håndtere toggling av knappen. Tar inn en boolean som indikerer om knappen er er togglet på
     * eller ikke, samt en MouseEvent eller en PointerEvent avhengig av om togglingen skjedde via klikk eller swipe.
     * @example
     * function handleToggle(pressed) {
     *    console.log(`ToggleSwitch er ${pressed ? "på" : "av"}`);
     * }
     */
    onToggle?: ToggleHandler<HTMLButtonElement>;
};

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleProps>(
    ({ children, className, density, id, onToggle, ...rest }, ref) => {
        const uid = useId(id || "jkl-toggle-switch", { generateSuffix: !id });
        const [pressed, setPressed] = React.useState(false);

        const { onClick, onPointerCancel, onPointerDown, onPointerMove, onPointerUp, ...buttonProps } = rest;

        const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
            setPressed(!pressed);
            onToggle?.(!pressed, event);
            onClick?.(event);
        };

        const handleToggle: ToggleHandler<HTMLButtonElement> = (toggleTo, event) => {
            if (toggleTo !== pressed) {
                setPressed(toggleTo);
                onToggle?.(toggleTo, event);
            }
        };

        const { gestureHandlers } = useSwipeGesture({
            onClick: handleClick,
            onToggle: handleToggle,
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
