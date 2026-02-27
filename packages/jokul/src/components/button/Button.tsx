import clsx from "clsx";
import type { ElementType } from "react";
import { useAriaLiveRegion } from "../../hooks/useAriaLiveRegion/useAriaLiveRegion.js";
import type { Polymorphic } from "../../utilities/index.js";
import { Loader } from "../loader/Loader.js";
import type { ButtonVariant, IconOptions } from "./types.js";

export type ButtonProps = {
    /**
     * Hvilken variant av knappen skal vises. Tertiary er planlagt fjernet fordi den ligner for mye på en lenke.
     * @default "secondary"
     */
    variant?: ButtonVariant;
    loader?: {
        showLoader: boolean;
        textDescription: string;
    };
} & IconOptions;

export function Button<T extends ElementType = "button">({
    as,
    children,
    className,
    ref,
    loader,
    icon,
    iconPosition = "left",
    variant = "secondary",
    ...rest
}: Polymorphic<ButtonProps, T>) {
    const Component = as || "button";

    const ariaLive = useAriaLiveRegion(loader?.showLoader);
    const showLoader = Boolean(children) && Boolean(loader?.showLoader);

    return (
        <Component
            {...ariaLive}
            data-loading={showLoader}
            className={clsx("jkl-button", `jkl-button--${variant}`, className)}
            disabled={as === "button" ? loader?.showLoader : undefined}
            {...rest}
            ref={ref}
        >
            <div className="jkl-button__label">
                {icon && iconPosition === "left" && icon}
                {children && (
                    <span className="jkl-button__text">{children}</span>
                )}
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
}
