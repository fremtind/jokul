import type { PolymorphicRef } from "@fremtind/jkl-core";
import { Loader } from "@fremtind/jkl-loader-react";
import { useAriaLiveRegion } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { type TouchEvent, useCallback } from "react";
import type { ButtonComponent, ButtonProps } from "./types";

export const Button = React.forwardRef(function Button<ElementType extends React.ElementType = "button">(
    props: ButtonProps<ElementType>,
    ref?: PolymorphicRef<ElementType>,
) {
    const {
        as = "button",
        children,
        className,
        density,
        onTouchStart,
        loader,
        iconLeft,
        iconRight,
        type = as === "button" ? "button" : undefined,
        variant = "secondary",
        ...rest
    } = props;

    const Component = as;

    const handleTouch = useCallback(
        (event: TouchEvent<HTMLButtonElement>) => {
            onTouchStart && onTouchStart(event);

            const target = event.target as HTMLButtonElement;
            if (target && event.targetTouches.length) {
                const Xcoord = event.targetTouches[0].clientX - target.getBoundingClientRect().x;
                const Ycoord = event.targetTouches[0].clientY - target.getBoundingClientRect().y;
                target.style.setProperty("--jkl-touch-xcoord", Xcoord.toPrecision(4) + "px");
                target.style.setProperty("--jkl-touch-ycoord", Ycoord.toPrecision(4) + "px");
                target.classList.add("jkl-button--pressed");
                setTimeout(() => target.classList.remove("jkl-button--pressed"), 400);
            }
        },
        [onTouchStart],
    );

    const ariaLive = useAriaLiveRegion(loader?.showLoader);

    return (
        <Component
            {...ariaLive}
            data-density={density}
            className={cn("jkl-button", "jkl-button--" + variant, className, {
                "jkl-button--icon-left": iconLeft,
                "jkl-button--icon-right": iconRight,
            })}
            disabled={as === "button" ? loader?.showLoader : undefined}
            onTouchStart={handleTouch}
            {...rest}
            type={type}
            ref={ref}
        >
            <div className="jkl-button__content">
                <div
                    className={cn("jkl-button__slider", {
                        "jkl-button__slider--show-loader": !!loader?.showLoader,
                    })}
                >
                    {iconLeft && <span className="jkl-button__icon">{iconLeft}</span>}
                    <span className="jkl-button__children">{children}</span>
                    {iconRight && <span className="jkl-button__icon">{iconRight}</span>}

                    {loader && (
                        <div className="jkl-button__loader">
                            <Loader textDescription={loader.textDescription} aria-hidden={!loader.showLoader} />
                        </div>
                    )}
                </div>
            </div>
        </Component>
    );
}) as ButtonComponent;

export function PrimaryButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant">,
) {
    const buttonProps = { ...props, variant: "primary" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

export function SecondaryButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant">,
) {
    const buttonProps = { ...props, variant: "secondary" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

export function TertiaryButton<ElementType extends React.ElementType = "button">(props: ButtonProps<ElementType>) {
    const buttonProps = { ...props, variant: "tertiary" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

export function GhostButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "loader">,
) {
    const buttonProps = { ...props, variant: "ghost" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}
