import React, { forwardRef, TouchEvent } from "react";
import classNames from "classnames";
import { Loader } from "@fremtind/jkl-loader-react";
import { Props, ValidButtons } from "./types";
import { BaseButton } from "./BaseButton";

const makeButtonComponent = (buttonType: ValidButtons) => {
    const button = forwardRef<HTMLButtonElement, Props>(
        ({ children, className = "", forceCompact, inverted, onClick, onTouchStart, loader, ...rest }, ref) => {
            const componentClassName = classNames("jkl-button", "jkl-button--" + buttonType, {
                "jkl-button--compact": forceCompact,
                "jkl-button--inverted": inverted,
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

            if (!loader) {
                return (
                    <BaseButton
                        className={classNames(componentClassName, className)}
                        onClick={onClick}
                        onTouchStart={handleTouch}
                        {...rest}
                        ref={ref}
                    >
                        {children}
                    </BaseButton>
                );
            }

            return (
                <div
                    className={classNames("jkl-button-wrapper", className, {
                        "jkl-button-wrapper--compact": forceCompact,
                    })}
                >
                    <div
                        className={classNames("jkl-button-wrapper__slider", {
                            "jkl-button-wrapper__slider--show-loader": !!loader.showLoader,
                        })}
                    >
                        <BaseButton
                            className={componentClassName}
                            onClick={onClick}
                            onTouchStart={handleTouch}
                            disabled={loader?.showLoader}
                            {...rest}
                            ref={ref}
                        >
                            {children}
                        </BaseButton>
                        <div className="jkl-button-wrapper__loader jkl-layout-spacing--small-top">
                            <Loader
                                textDescription={loader.textDescription}
                                negative={inverted}
                                aria-hidden={!!loader.showLoader}
                                inline={true}
                            />
                        </div>
                    </div>
                </div>
            );
        },
    );
    return button;
};

export const PrimaryButton = makeButtonComponent("primary");
export const SecondaryButton = makeButtonComponent("secondary");
export const TertiaryButton = makeButtonComponent("tertiary");
