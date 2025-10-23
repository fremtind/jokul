import clsx from "clsx";
import React, {
    Children,
    type ComponentPropsWithRef,
    type ForwardedRef,
    forwardRef,
    type ReactNode,
    useId,
} from "react";
import { useAutoAnimatedHeight } from "../../hooks/useAnimatedHeight/useAutoAnimateHeight.js";

type Props = ComponentPropsWithRef<"input"> & {
    isChecked: boolean;
    /**
     * @deprecated bruk heller {@link amount} for å vise pris.
     * Dersom du har behov utover dette ta kontakt med oss så finner vi en løsning sammen.
     */
    extraLabel?: ReactNode;
    /**
     * @deprecated vi ønsker ikke at content skal skjules for brukerne lenger
     * @default true
     */
    alwaysOpen?: boolean;
    /**
     * Viser pris til høyre i panelet
     */
    amount?: string;
    label: string;
    type: "radio" | "checkbox";
};

export const BasePanel = forwardRef(function BasePanel(
    {
        className,
        isChecked,
        children,
        alwaysOpen = false,
        label,
        extraLabel,
        amount,
        type,
        ...rest
    }: Props,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const contentId = `content-${useId()}`;
    const inputId = `input-${useId()}`;
    const hasChildren = Children.count(children) > 0;
    const animationRef = useAutoAnimatedHeight<HTMLDivElement>(isChecked);

    return (
        <div
            className={clsx("jkl-input-panel", `jkl-${type}-panel`, className)}
        >
            <label className="jkl-input-panel__label" htmlFor={inputId}>
                <input
                    ref={ref}
                    id={inputId}
                    className="jkl-input-panel__input"
                    type={type}
                    aria-controls={!alwaysOpen ? contentId : undefined}
                    aria-expanded={!alwaysOpen ? isChecked : undefined}
                    {...rest}
                />
                <span
                    aria-hidden="true"
                    className={`jkl-${type}-panel__decorator`}
                />
                <span className="jkl-input-panel__main-label">{label}</span>
                {(extraLabel || amount) && (
                    <span
                        className={clsx("jkl-input-panel__extra-label", {
                            "jkl-input-panel__extra-label--text":
                                typeof extraLabel === "string" || amount,
                        })}
                    >
                        {extraLabel || amount}
                    </span>
                )}
            </label>
            {hasChildren && (
                <div ref={animationRef} aria-hidden={!isChecked && !alwaysOpen}>
                    <div
                        className="jkl-input-panel__content"
                        id={contentId}
                        data-alwaysopen={alwaysOpen}
                    >
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
});
