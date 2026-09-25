import cn from "clsx";
import React, { type ButtonHTMLAttributes } from "react";
import { useAriaLiveRegion } from "../../hooks/useAriaLiveRegion/useAriaLiveRegion.js";
import type { PolymorphicRef } from "../../utilities/polymorphism/polymorphism.js";
import { serializeTracking } from "../cookie-consent/tracking/serializeTracking.js";
import { Loader } from "../loader/Loader.js";
import type { ButtonComponent, ButtonProps } from "./types.js";

export const Button = React.forwardRef(function Button<
    ElementType extends React.ElementType = "button",
>(props: ButtonProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "button",
        children,
        className,
        onTouchStart,
        onAnimationEnd,
        onClick,
        loader,
        icon,
        iconPosition = "left",
        iconLeft,
        iconRight,
        variant = "secondary",
        tracking,
        ...rest
    } = props;

    const Component = as;
    const hasIcon = Boolean(icon || iconLeft || iconRight);

    if (
        process.env.NODE_ENV !== "production" &&
        React.Children.count(children) === 0 &&
        !props["aria-label"] &&
        !props["aria-labelledby"] &&
        !props.title
    ) {
        console.warn(
            "Når du lager en Button uten synlig tekst må du huske å gi den et navn med enten aria-label, aria-labelledby eller title",
        );
    }

    const ariaLive = useAriaLiveRegion(loader?.showLoader);
    const showLoader = Boolean(children) && Boolean(loader?.showLoader);

    return (
        <Component
            {...ariaLive}
            data-loading={showLoader}
            // Merker knappen som sporbar av Mixpanels `autocapture` (se
            // `useMixpanelTracking`/TRACKING.md). Disse attributtene er
            // helt inerte når ingen Mixpanel-instans er initialisert (uten
            // samtykke/token skjer det ingenting).
            data-jkl-tracked="Button"
            data-jkl-variant={variant}
            data-jkl-has-icon={hasIcon || undefined}
            data-jkl-tracking={serializeTracking(tracking)}
            className={cn("jkl-button", `jkl-button--${variant}`, className)}
            disabled={as === "button" ? loader?.showLoader : undefined}
            {...rest}
            onClick={onClick}
            ref={ref}
        >
            <div className="jkl-button__label">
                {iconLeft && iconLeft}
                {icon && iconPosition === "left" && icon}
                {children && (
                    <span className="jkl-button__text">{children}</span>
                )}
                {iconRight && iconRight}
                {icon && iconPosition === "right" && icon}
            </div>

            {children && (
                <Loader
                    className="jkl-button__loader"
                    variant="medium"
                    textDescription={
                        loader?.textDescription || "Vennligst vent"
                    }
                    aria-hidden={!loader?.showLoader}
                />
            )}
        </Component>
    );
}) as ButtonComponent;

/**
 * @deprecated bruk heller {@link Button} med ghost-varianten
 */
export function PrimaryButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "onClick" | "as"> &
        Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
    const buttonProps = {
        ...props,
        variant: "primary",
    } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

/**
 * @deprecated bruk heller {@link Button} med ghost-varianten
 */
export function SecondaryButton<
    ElementType extends React.ElementType = "button",
>(
    props: Omit<ButtonProps<ElementType>, "variant" | "onClick" | "as"> &
        Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
    const buttonProps = {
        ...props,
        variant: "secondary",
    } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

/**
 * @deprecated bruk heller {@link Button} med ghost-varianten
 */
export function TertiaryButton<
    ElementType extends React.ElementType = "button",
>(
    props: Omit<ButtonProps<ElementType>, "variant" | "onClick" | "as"> &
        Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
) {
    const buttonProps = {
        ...props,
        variant: "tertiary",
    } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}

/**
 * @deprecated bruk heller {@link Button} med ghost-varianten
 */
export function GhostButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "loader">,
) {
    const buttonProps = {
        ...props,
        variant: "ghost",
    } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}
