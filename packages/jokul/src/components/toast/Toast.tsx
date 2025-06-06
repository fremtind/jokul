import { type AriaToastProps, useToast } from "@react-aria/toast";
import type { QueuedToast, ToastState } from "@react-stately/toast";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import { useBrowserPreferences } from "../../hooks/useBrowserPreferences/useBrowserPreferences.js";
import { Button } from "../button/Button.js";
import { Countdown } from "../countdown/Countdown.js";
import { IconButton } from "../icon-button/IconButton.js";
import { CloseIcon } from "../icon/icons/CloseIcon.js";
import { ErrorIcon } from "../icon/icons/ErrorIcon.js";
import { InfoIcon } from "../icon/icons/InfoIcon.js";
import { SuccessIcon } from "../icon/icons/SuccessIcon.js";
import { WarningIcon } from "../icon/icons/WarningIcon.js";
import type { ToastContent, ToastOptions } from "./types.js";

export interface ToastProps<T extends ToastContent> extends AriaToastProps<T> {
    className?: string;
    state: ToastState<T>;
    toast: QueuedToast<T> & ToastOptions;
}

const getIcon = (messageType?: "error" | "info" | "success" | "warning") => {
    switch (messageType) {
        case "error":
            return <ErrorIcon className="jkl-toast__icon" />;
        case "info":
            return <InfoIcon className="jkl-toast__icon" />;
        case "success":
            return <SuccessIcon className="jkl-toast__icon" />;
        case "warning":
            return <WarningIcon className="jkl-toast__icon" />;
        default:
            return null;
    }
};

export function Toast<T extends ToastContent>({
    className,
    state,
    ...props
}: ToastProps<T>) {
    const ref = useRef(null);
    const { toastProps, titleProps } = useToast(props, state, ref);

    const content =
        typeof props.toast.content === "string"
            ? props.toast.content
            : props.toast.content.content;
    const title =
        typeof props.toast.content === "string"
            ? undefined
            : props.toast.content.title;

    // @ts-ignore Proxy for å sjekke om timeren er pauset: https://github.com/adobe/react-spectrum/blob/b1545c0d225b12672fb6a4e7b787268591d66b90/packages/%40react-stately/toast/src/useToastState.ts#L222
    const isPaused = props.toast.timer?.timerId == null;

    const { prefersReducedMotion } = useBrowserPreferences();

    useEffect(() => {
        if (prefersReducedMotion && props.toast.animation === "exiting") {
            // If user has prefers-reduced-motion the exit animation won't run and our
            // onAnimationEnd callback won't be invoked. In this case, remove the toast
            // manually.
            state.remove(props.toast.key);
        }
    }, [prefersReducedMotion, props.toast.animation, props.toast.key, state]);

    return (
        <div
            {...toastProps}
            ref={ref}
            className={clsx(
                "jkl-toast",
                {
                    "jkl-toast--info": props.toast.variant === "info",
                    "jkl-toast--error": props.toast.variant === "error",
                    "jkl-toast--warning": props.toast.variant === "warning",
                    "jkl-toast--success": props.toast.variant === "success",
                },
                className,
            )}
            data-animation={props.toast.animation}
            onAnimationEnd={() => {
                // Remove the toast when the exiting animation completes.
                if (props.toast.animation === "exiting") {
                    state.remove(props.toast.key);
                }
            }}
        >
            <span className="jkl-toast__progress">
                {props.toast.timeout ? (
                    <Countdown
                        from={props.toast.timeout}
                        isPaused={isPaused}
                        onAnimationEnd={(e) => {
                            // Avoid triggering the toast's onAnimationEnd handler so we still get our exit animation
                            e.stopPropagation();
                        }}
                    />
                ) : null}
            </span>
            {getIcon(props.toast.variant)}
            <div {...titleProps} className="jkl-toast__content">
                {title && <p className="jkl-toast__title">{title}</p>}
                <p className="jkl-toast__message">{content}</p>
                {props.toast.action && (
                    <div className="jkl-toast__action">
                        <Button
                            variant="secondary"
                            density="compact"
                            onClick={props.toast.action.onClick}
                        >
                            {props.toast.action.label}
                        </Button>
                    </div>
                )}
            </div>
            <IconButton
                data-theme={!props.toast.variant ? undefined : "light"}
                aria-label="Lukk varsel"
                className="jkl-toast__dismiss-button"
                onClick={() => {
                    state.close(props.toast.key);
                }}
            >
                <CloseIcon />
            </IconButton>
        </div>
    );
}
