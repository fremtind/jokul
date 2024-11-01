import clsx from "clsx";
import React, {
    Children,
    ComponentPropsWithRef,
    ForwardedRef,
    forwardRef,
    ReactNode,
    useId,
} from "react";
import { useAutoAnimatedHeight } from "../../hooks/useAnimatedHeight/useAutoAnimateHeight.js";

type Props = ComponentPropsWithRef<"input"> & {
    isChecked: boolean;
    alwaysOpen: boolean;
    label: string;
    extraLabel?: ReactNode;
    type: "radio" | "checkbox";
};

export const BasePanel = forwardRef(function BasePanel(
    {
        className,
        isChecked,
        children,
        alwaysOpen,
        label,
        extraLabel,
        type,
        ...rest
    }: Props,
    ref: ForwardedRef<HTMLInputElement>,
) {
    const contentId = `content-${useId()}`;
    const hasChildren = Children.count(children) > 0;
    const animationRef = useAutoAnimatedHeight<HTMLDivElement>(isChecked);

    return (
        <div
            className={clsx("jkl-input-panel", `jkl-${type}-panel`, className)}
        >
            <label className="jkl-input-panel__label">
                <input
                    ref={ref}
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
                <span
                    className={clsx("jkl-input-panel__extra-label", {
                        "jkl-input-panel__extra-label--text":
                            typeof extraLabel === "string",
                    })}
                >
                    {extraLabel}
                </span>
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
