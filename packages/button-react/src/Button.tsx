import type { PolymorphicRef } from "@fremtind/jkl-core";
import { Loader } from "@fremtind/jkl-loader-react";
import { useAriaLiveRegion } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, {
    ButtonHTMLAttributes,
    type TouchEvent,
    useCallback,
} from "react";
import type { ButtonComponent, ButtonProps } from "./types";

export const Button = React.forwardRef(function Button<
    ElementType extends React.ElementType = "button",
>(props: ButtonProps<ElementType>, ref?: PolymorphicRef<ElementType>) {
    const {
        as = "button",
        children,
        className,
        density,
        onTouchStart,
        onAnimationEnd,
        loader,
        icon,
        iconPosition = "left",
        iconLeft,
        iconRight,
        variant = "secondary",
        ...rest
    } = props;

    const Component = as;

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

    const removeButtonAnimation = (element: HTMLElement) => {
        if (element.classList.contains("jkl-button--pressed")) {
            element.classList.remove("jkl-button--pressed");
            element.style.removeProperty("--jkl-touch-xcoord");
            element.style.removeProperty("--jkl-touch-ycoord");
        }
    };

    const handleTouch = useCallback((event: TouchEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;

        if (target && !target.disabled && event.targetTouches.length) {
            const Xcoord =
                event.targetTouches[0].clientX -
                target.getBoundingClientRect().x;
            const Ycoord =
                event.targetTouches[0].clientY -
                target.getBoundingClientRect().y;
            target.style.setProperty(
                "--jkl-touch-xcoord",
                Xcoord.toFixed(1) + "px",
            );
            target.style.setProperty(
                "--jkl-touch-ycoord",
                Ycoord.toFixed(1) + "px",
            );
            target.classList.add("jkl-button--pressed");

            setTimeout(() => {
                target.classList.remove("jkl-button--pressed");
                target.style.removeProperty("--jkl-touch-xcoord");
                target.style.removeProperty("--jkl-touch-ycoord");
            }, 400);
        }
    }, []);

    const ariaLive = useAriaLiveRegion(loader?.showLoader);
    const showLoader = Boolean(children) && Boolean(loader?.showLoader);

    return (
        <Component
            {...ariaLive}
            data-loading={showLoader}
            data-density={density}
            className={cn("jkl-button", "jkl-button--" + variant, className)}
            disabled={as === "button" ? loader?.showLoader : undefined}
            onTouchStart={(event) => {
                onTouchStart?.(event);
                handleTouch(event);
            }}
            onAnimationEnd={(event) => {
                onAnimationEnd?.(event);
                removeButtonAnimation(event.target as HTMLElement);
            }}
            {...rest}
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

export function GhostButton<ElementType extends React.ElementType = "button">(
    props: Omit<ButtonProps<ElementType>, "variant" | "loader">,
) {
    const buttonProps = {
        ...props,
        variant: "ghost",
    } as ButtonProps<ElementType>;
    return <Button {...buttonProps} />;
}
