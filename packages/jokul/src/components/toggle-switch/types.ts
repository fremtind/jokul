import { ButtonHTMLAttributes } from "react";
import { Density, WithChildren } from "../../core/types.js";
import { SwipeChangeHandler } from "../../hooks/useSwipeGesture/useSwipeGesture.js";

export interface ToggleSliderProps extends WithChildren {
    labels: [string, string];
    onToggle: (value: string) => void;
    defaultValue?: string;
    className?: string;
    hideLegend?: boolean;
    density?: Density;
}

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
