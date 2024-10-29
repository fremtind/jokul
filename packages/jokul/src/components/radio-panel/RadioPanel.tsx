import clsx from "clsx";
import React, {
    ChangeEvent,
    Children,
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
    useCallback,
    useEffect,
    useState,
} from "react";
import { useAutoAnimatedHeight } from "../../hooks/index.js";

type Props = Omit<ComponentPropsWithRef<"input">, "type"> & {
    name: string;
    value: string;
    label: string;
    extraLabel?: React.ReactNode;
    alwaysOpen?: boolean;
};

export const RadioPanel = forwardRef(function RadioPanel(
    {
        children,
        alwaysOpen = false,
        label,
        extraLabel,
        checked,
        onChange,
        ...rest
    }: Props,
    ref: ForwardedRef<HTMLDivElement>,
) {
    const [renderChildren, setRenderChildren] = useState(true);
    const animationRef = useAutoAnimatedHeight<HTMLDivElement>(renderChildren);

    const handleChange = useCallback(
        (e?: ChangeEvent<HTMLInputElement>) => {
            if (typeof e !== "undefined") {
                onChange?.(e);
            }

            if (alwaysOpen) {
                return -1;
            }

            // Hvis går fra lukket til åpen, trigge endring i live-region men
            // vent "lenge nok" til at skjermleseren får det med seg,
            // radio-knapper får bare en change event når de velges. Det at
            // en annen radio i gruppen blir valgt trigger bare et event på den.
            setRenderChildren(false);
            return window.setTimeout(() => {
                setRenderChildren(true);
            }, 200);
        },
        [setRenderChildren, alwaysOpen, onChange],
    );

    useEffect(() => {
        if (!checked) {
            return;
        }
        const timeoutId = handleChange();
        return () => window.clearTimeout(timeoutId);
    }, [checked, handleChange]);

    const hasChildren = Children.count(children) > 0;

    return (
        <div className="jkl-radio-panel" ref={ref}>
            <label className="jkl-radio-panel__label">
                <input
                    onChange={handleChange}
                    checked={checked}
                    className="jkl-radio-panel__input"
                    type="radio"
                    {...rest}
                />
                <span
                    aria-hidden="true"
                    className="jkl-radio-panel__dot"
                ></span>
                <span className="jkl-radio-panel__main-label">{label}</span>
                <span
                    className={clsx("jkl-radio-panel__extra-label", {
                        "jkl-radio-panel__extra-label--text":
                            typeof extraLabel === "string",
                    })}
                >
                    {extraLabel}
                </span>
            </label>
            <div
                data-open={renderChildren && hasChildren}
                data-alwaysOpen={alwaysOpen && hasChildren}
                ref={animationRef}
                className="jkl-radio-panel__content"
                aria-live={!alwaysOpen && hasChildren ? "polite" : undefined}
            >
                {renderChildren && children}
            </div>
        </div>
    );
});
