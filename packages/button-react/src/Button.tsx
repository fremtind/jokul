import {
    ArrowDownIcon,
    ArrowLeftIcon,
    ArrowNorthEastIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    CloseIcon,
    CopyIcon,
    DotsIcon,
    ErrorIcon,
    HamburgerIcon,
    InfoIcon,
    LinkIcon,
    PlusIcon,
    QuestionIcon,
    SearchIcon,
    SuccessIcon,
    WarningIcon,
} from "@fremtind/jkl-icons-react";
import { Loader } from "@fremtind/jkl-loader-react";
import { useAriaLiveRegion } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, TouchEvent, useCallback } from "react";
import { BaseButton } from "./BaseButton";
import { Props, ValidButtons } from "./types";
const makeButtonComponent = (buttonType: ValidButtons) => {
    const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
        const { children, className, density, onClick, onTouchStart, loader, icon, ...rest } = props;

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
                    "jkl-button--left-arrow": icon === "arrow-left",
                    "jkl-button--right-arrow": icon === "arrow-right",
                    "jkl-button--plus": icon === "plus",
                    "jkl-button--close": icon === "close",
                    "jkl-button--check": icon === "check",
                    "jkl-button--search": icon === "search",
                    "jkl-button--hamburger": icon === "hamburger",
                    "jkl-button--calendar": icon === "calendar",
                    "jkl-button--arrow-north-east": icon === "arrow-north-east",
                    "jkl-button--arrow-up": icon === "arrow-up",
                    "jkl-button--arrow-down": icon === "arrow-down",
                    "jkl-button--chevron-down": icon === "chevron-down",
                    "jkl-button--chevron-left": icon === "chevron-left",
                    "jkl-button--chevron-right": icon === "chevron-right",
                    "jkl-button--chevron-up": icon === "chevron-up",
                    "jkl-button--copy": icon === "copy",
                    "jkl-button--dots": icon === "dots",
                    "jkl-button--question": icon === "question",
                    "jkl-button--info": icon === "info",
                    "jkl-button--error": icon === "error",
                    "jkl-button--warning": icon === "warning",
                    "jkl-button--success": icon === "success",
                    "jkl-button--link": icon === "link",
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
                        {icon === "arrow-left" && <ArrowLeftIcon className="jkl-button__icon" bold />}
                        <span className="jkl-button__children">{children}</span>
                        {icon === "arrow-right" && <ArrowRightIcon className="jkl-button__icon" bold />}
                        {icon === "plus" && <PlusIcon className="jkl-button__icon" bold />}
                        {icon === "close" && <CloseIcon className="jkl-button__icon" bold />}
                        {icon === "check" && <CheckIcon className="jkl-button__icon" bold />}
                        {icon === "search" && <SearchIcon className="jkl-button__icon" bold />}
                        {icon === "hamburger" && <HamburgerIcon className="jkl-button__icon" bold />}
                        {icon === "calendar" && <CalendarIcon className="jkl-button__icon" bold />}
                        {icon === "arrow-north-east" && <ArrowNorthEastIcon className="jkl-button__icon" bold />}
                        {icon === "arrow-up" && <ArrowUpIcon className="jkl-button__icon" bold />}
                        {icon === "arrow-down" && <ArrowDownIcon className="jkl-button__icon" bold />}
                        {icon === "chevron-down" && <ChevronDownIcon className="jkl-button__icon" bold />}
                        {icon === "chevron-left" && <ChevronLeftIcon className="jkl-button__icon" bold />}
                        {icon === "chevron-right" && <ChevronRightIcon className="jkl-button__icon" bold />}
                        {icon === "chevron-up" && <ChevronUpIcon className="jkl-button__icon" bold />}
                        {icon === "copy" && <CopyIcon className="jkl-button__icon" bold />}
                        {icon === "dots" && <DotsIcon className="jkl-button__icon" bold />}
                        {icon === "question" && <QuestionIcon className="jkl-button__icon" bold />}
                        {icon === "info" && <InfoIcon className="jkl-button__icon" bold />}
                        {icon === "error" && <ErrorIcon className="jkl-button__icon" bold />}
                        {icon === "warning" && <WarningIcon className="jkl-button__icon" bold />}
                        {icon === "success" && <SuccessIcon className="jkl-button__icon" bold />}
                        {icon === "link" && <LinkIcon className="jkl-button__icon" bold />}

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
