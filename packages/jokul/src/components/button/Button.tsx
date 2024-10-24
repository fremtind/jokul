import cn from "clsx";
import React, { ButtonHTMLAttributes, type TouchEvent, useCallback } from "react";
import { useAriaLiveRegion } from "../../hooks/useAriaLiveRegion/useAriaLiveRegion.js";
import { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { Loader } from "../loader/Loader.js";
import { ButtonComponent, ButtonProps } from "./types.js";

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
        icon,
        iconPosition = "left",
        iconLeft,
        iconRight,
        variant = "secondary",
        ...rest
    } = props;

    const Component = as;

    const handleTouch = useCallback(
        (event: TouchEvent<HTMLButtonElement>) => {
            onTouchStart && onTouchStart(event);

            const target = event.target as HTMLButtonElement;
            if (target && !target.disabled && event.targetTouches.length) {
                const Xcoord = event.targetTouches[0].clientX - target.getBoundingClientRect().x;
                const Ycoord = event.targetTouches[0].clientY - target.getBoundingClientRect().y;
                target.style.setProperty("--jkl-touch-xcoord", Xcoord.toPrecision(4) + "px");
                target.style.setProperty("--jkl-touch-ycoord", Ycoord.toPrecision(4) + "px");
                target.classList.add("jkl-button--pressed");

                setTimeout(() => {
                    target.classList.remove("jkl-button--pressed");
                    target.style.removeProperty("--jkl-touch-xcoord");
                    target.style.removeProperty("--jkl-touch-ycoord");
                }, 400);
            }
        },
        [onTouchStart],
    );

    const ariaLive = useAriaLiveRegion(loader?.showLoader);
    const showLoader = Boolean(children) && Boolean(loader?.showLoader);

    return (
        <Component
            {...ariaLive}
            data-loading={showLoader}
            data-density={density}
            className={cn("jkl-button", "jkl-button--" + variant, className)}
            disabled={as === "button" ? loader?.showLoader : undefined}
            onTouchStart={handleTouch}
            {...rest}
            ref={ref}
        >
            <div className="jkl-button__label">
                {iconLeft && iconLeft}
                {icon && iconPosition === "left" && icon}
                {children && <span className="jkl-button__text">{children}</span>}
                {iconRight && iconRight}
                {icon && iconPosition === "right" && icon}
            </div>

            {children && (
                <Loader
                    className="jkl-button__loader"
                    variant="medium"
                    textDescription={loader?.textDescription || "Vennligst vent"}
                    aria-hidden={!loader?.showLoader}
                />
            )}
        </Component>
    );
}) as ButtonComponent;

export function PrimaryButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "onClick" | "as"> &
        Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
    const buttonProps = { ...props, variant: "primary" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

export function SecondaryButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "onClick" | "as"> &
        Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
    const buttonProps = { ...props, variant: "secondary" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

export function TertiaryButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "onClick" | "as"> &
        Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
    const buttonProps = { ...props, variant: "tertiary" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

export function GhostButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "loader">,
) {
    const buttonProps = { ...props, variant: "ghost" } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}
