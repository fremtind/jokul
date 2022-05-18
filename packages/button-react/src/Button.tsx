import { unicode } from "@fremtind/jkl-constants-util";
import { Loader } from "@fremtind/jkl-loader-react";
import classNames from "classnames";
import React, { forwardRef, TouchEvent } from "react";
import { BaseButton } from "./BaseButton";
import { Props, ValidButtons } from "./types";
const makeButtonComponent = (buttonType: ValidButtons) => {
    const Button = forwardRef<HTMLButtonElement, Props>(
        ({ children, className, forceCompact, onClick, onTouchStart, loader, arrow, ...rest }, ref) => {
            const componentClassName = classNames("jkl-button", "jkl-button--" + buttonType, className, {
                "jkl-button--compact": forceCompact,
            });

            const handleTouch = (event: TouchEvent<HTMLButtonElement>) => {
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
            };

            return (
                <BaseButton
                    aria-live="polite"
                    className={componentClassName}
                    disabled={loader?.showLoader}
                    onClick={onClick}
                    onTouchStart={handleTouch}
                    {...rest}
                    ref={ref}
                >
                    <div
                        className={classNames("jkl-button__content", {
                            "jkl-button__content--compact": forceCompact,
                        })}
                    >
                        <div
                            className={classNames("jkl-button__slider", {
                                "jkl-button__slider--show-loader": !!loader?.showLoader,
                            })}
                        >
                            {arrow === "left" && <span aria-hidden>{unicode.LEFTWARDS_ARROW} </span>}
                            {children}
                            {arrow === "right" && <span aria-hidden> {unicode.RIGHTWARDS_ARROW}</span>}

                            {loader && (
                                <div className="jkl-button__loader">
                                    <Loader
                                        textDescription={loader.textDescription}
                                        aria-hidden={!loader.showLoader}
                                        variant={forceCompact ? "small" : "medium"}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </BaseButton>
            );
        },
    );
    Button.displayName = "BaseButton";
    return Button;
};

export const PrimaryButton = makeButtonComponent("primary");
PrimaryButton.displayName = "PrimaryButton";
export const SecondaryButton = makeButtonComponent("secondary");
SecondaryButton.displayName = "SecondaryButton";
export const TertiaryButton = makeButtonComponent("tertiary");
TertiaryButton.displayName = "TertiaryButton";
