import clsx from "clsx";
import React, { forwardRef } from "react";
import { useId } from "../../hooks/useId/useId.js";
import { ErrorIcon } from "../icon/icons/ErrorIcon.js";
import { InfoIcon } from "../icon/icons/InfoIcon.js";
import { SuccessIcon } from "../icon/icons/SuccessIcon.js";
import { WarningIcon } from "../icon/icons/WarningIcon.js";
import { DismissButton } from "./DismissButton.js";
import type { MessageProps } from "./types.js";

const getIcon = (messageType: MessageProps["variant"]) => {
    switch (messageType) {
        case "error":
            return <ErrorIcon className="jkl-message__icon" />;
        case "info":
            return <InfoIcon className="jkl-message__icon" />;
        case "success":
            return <SuccessIcon className="jkl-message__icon" />;
        case "warning":
            return <WarningIcon className="jkl-message__icon" />;
        default:
            return null;
    }
};

function messageFactory(messageType: MessageProps["variant"]) {
    const Message = forwardRef<HTMLDivElement, MessageProps>((props, ref) => {
        const {
            id,
            title,
            fullWidth,
            density,
            className = "",
            dismissed,
            dismissAction,
            children,
            role,
            ...rest
        } = props;

        const boxId = useId(id || "jkl-message", { generateSuffix: !id });

        const hasStringChild = React.Children.map(
            children,
            (child) => typeof child === "string",
        );
        const newChildren = hasStringChild?.[0] ? <p>{children}</p> : children;

        return (
            <div
                {...rest}
                id={id}
                ref={ref}
                className={clsx(
                    "jkl-message",
                    `jkl-message--${messageType}`,
                    className,
                    {
                        "jkl-message--full": fullWidth,
                        "jkl-message--dismissed": dismissed,
                    },
                )}
                role={role}
                data-density={density}
            >
                {getIcon(messageType)}
                <div className="jkl-message__content" data-theme="light">
                    {title && <p className="jkl-message__title">{title}</p>}
                    <div className="jkl-message__message">{newChildren}</div>
                </div>
                {dismissAction?.handleDismiss && (
                    <DismissButton
                        data-theme="light"
                        aria-controls={boxId}
                        className="jkl-message__dismiss-button"
                        label={dismissAction.buttonTitle || "Lukk"}
                        onClick={dismissAction.handleDismiss}
                    />
                )}
            </div>
        );
    });

    Message.displayName = "Message";

    return Message;
}

export const Message = forwardRef<HTMLDivElement, MessageProps>(
    (props, ref) => {
        const {
            id,
            title,
            fullWidth,
            density,
            className = "",
            dismissed,
            dismissAction,
            children,
            variant = "info",
            role,
            ...rest
        } = props;

        const boxId = useId(id || "jkl-message", { generateSuffix: !id });

        const hasStringChild = React.Children.map(
            children,
            (child) => typeof child === "string",
        );
        const newChildren = hasStringChild?.[0] ? <p>{children}</p> : children;

        return (
            <div
                {...rest}
                id={id}
                ref={ref}
                className={clsx(
                    "jkl-message",
                    `jkl-message--${variant}`,
                    className,
                    {
                        "jkl-message--full": fullWidth,
                        "jkl-message--dismissed": dismissed,
                    },
                )}
                role={role}
                data-density={density}
            >
                {getIcon(variant)}
                <div className="jkl-message__content" data-theme="light">
                    {title && <p className="jkl-message__title">{title}</p>}
                    <div className="jkl-message__message">{newChildren}</div>
                </div>
                {dismissAction?.handleDismiss && (
                    <DismissButton
                        data-theme="light"
                        aria-controls={boxId}
                        className="jkl-message__dismiss-button"
                        label={dismissAction.buttonTitle || "Lukk"}
                        onClick={dismissAction.handleDismiss}
                    />
                )}
            </div>
        );
    },
);

/**
 * @deprecated bruk Message med variant="info"
 */
export const InfoMessage = messageFactory("info");
InfoMessage.displayName = "InfoMessage";
/**
 * @deprecated bruk Message med variant="error"
 */
export const ErrorMessage = messageFactory("error");
ErrorMessage.displayName = "ErrorMessage";
/**
 * @deprecated bruk Message med variant="warning"
 */
export const WarningMessage = messageFactory("warning");
WarningMessage.displayName = "WarningMessage";
/**
 * @deprecated bruk Message med variant="success"
 */
export const SuccessMessage = messageFactory("success");
SuccessMessage.displayName = "SuccessMessage";
