import { ArrowLeft, ArrowRight } from "@fremtind/jkl-icons-react";
import { Loader } from "@fremtind/jkl-loader-react";
import { useAriaLiveRegion } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, TouchEvent, useCallback } from "react";
import { BaseButton } from "./BaseButton";
import { Props, ValidButtons } from "./types";
const makeButtonComponent = (buttonType: ValidButtons) => {
    const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
        const { children, className, density, onClick, onTouchStart, loader, arrow, ...rest } = props;

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
            <BaseButton
                {...ariaLive}
                data-density={density}
                className={cn("jkl-button", "jkl-button--" + buttonType, className, {
                    "jkl-button--left-arrow": arrow === "left",
                    "jkl-button--right-arrow": arrow === "right",
                })}
                disabled={loader?.showLoader}
                onClick={onClick}
                onTouchStart={handleTouch}
                {...rest}
                ref={ref}
            >
                <div className="jkl-button__content">
                    <div
                        className={cn("jkl-button__slider", {
                            "jkl-button__slider--show-loader": !!loader?.showLoader,
                        })}
                    >
                        {arrow === "left" && <ArrowLeft className="jkl-button__arrow" bold />}
                        <span className="jkl-button__children">{children}</span>
                        {arrow === "right" && <ArrowRight className="jkl-button__arrow" bold />}

                        {loader && (
                            <div className="jkl-button__loader">
                                <Loader textDescription={loader.textDescription} aria-hidden={!loader.showLoader} />
                            </div>
                        )}
                    </div>
                </div>
            </BaseButton>
        );
    });
    Button.displayName = "BaseButton";
    return Button;
};

export const PrimaryButton = makeButtonComponent("primary");
PrimaryButton.displayName = "PrimaryButton";
export const SecondaryButton = makeButtonComponent("secondary");
SecondaryButton.displayName = "SecondaryButton";
export const TertiaryButton = makeButtonComponent("tertiary");
TertiaryButton.displayName = "TertiaryButton";
