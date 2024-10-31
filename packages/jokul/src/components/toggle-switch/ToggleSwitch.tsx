import clsx from "clsx";
import React, {
    type ButtonHTMLAttributes,
    type MouseEventHandler,
    forwardRef,
} from "react";
import { Density } from "../../core/types.js";
import { useId } from "../../hooks/useId/useId.js";
import {
    SwipeChangeHandler,
    useSwipeGesture,
} from "../../hooks/useSwipeGesture/useSwipeGesture.js";
import { CheckIcon } from "../icon/icons/CheckIcon.js";

export type ToggleChangeHandler<T extends HTMLElement> = SwipeChangeHandler<T>;

export type ToggleSwitchProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange"
> & {
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

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>(
    (
        {
            "aria-pressed": ariaPressed = false,
            children,
            className,
            density,
            id,
            onChange,
            ...rest
        },
        ref,
    ) => {
        const uid = useId(id || "jkl-toggle-switch", { generateSuffix: !id });
        const [pressed, setPressed] = React.useState(ariaPressed);
        React.useEffect(() => {
            setPressed(ariaPressed);
        }, [ariaPressed]);

        const {
            onClick,
            onPointerCancel,
            onPointerDown,
            onPointerMove,
            onPointerUp,
            ...buttonProps
        } = rest;

        const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
            setPressed(!pressed);
            onChange?.(event, !pressed);
            onClick?.(event);
        };

        const handleChange: ToggleChangeHandler<HTMLButtonElement> = (
            event,
            toggleTo,
        ) => {
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
                className={clsx("jkl-toggle-switch", className)}
                id={uid}
                ref={ref}
                aria-pressed={pressed}
                data-density={density}
                {...buttonProps}
                {...(buttonProps.disabled ? {} : gestureHandlers)}
            >
                {children}
                <div aria-hidden className="jkl-toggle-switch-widget">
                    <div className="jkl-toggle-switch-widget__slider">
                        <div className="jkl-toggle-switch-widget__knob" />
                        <CheckIcon
                            variant="small"
                            bold
                            className="jkl-toggle-switch-widget__indicator"
                        />
                    </div>
                </div>
            </button>
        );
    },
);
ToggleSwitch.displayName = "ToggleSwitch";
