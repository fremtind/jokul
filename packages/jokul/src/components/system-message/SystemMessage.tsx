import clsx from "clsx";
import React from "react";
import { useId } from "../../hooks/useId/useId.js";
import { DismissButton } from "../message/DismissButton.js";
import { MessageIcon } from "./common/MessageIcon.js";
import type { SystemMessageProps } from "./types.js";

function systemFactory(
    variant: SystemMessageProps["variant"],
): React.FC<SystemMessageProps> {
    const SystemMessage: React.FC<SystemMessageProps> = ({
        id,
        className,
        maxContentWidth,
        paddingLeft,
        role = "status",
        dismissed,
        dismissAction,
        children,
        ...rest
    }) => {
        const systemId = useId(id || "jkl-system-message", {
            generateSuffix: !id,
        });

        return (
            <div
                role={role}
                {...rest}
                id={systemId}
                className={clsx(
                    "jkl-system-message",
                    `jkl-system-message--${variant}`,
                    className,
                    {
                        "jkl-system-message--dismissed": dismissed,
                    },
                )}
            >
                <div
                    className="jkl-system-message__content"
                    data-testid="system-message-content"
                    data-theme="light"
                    style={{
                        maxWidth: maxContentWidth,
                        paddingLeft,
                    }}
                >
                    <MessageIcon variant={variant || "info"} />
                    <span className="jkl-system-message__message">
                        {children}
                    </span>
                    {dismissAction?.handleDismiss && (
                        <DismissButton
                            data-theme="light"
                            aria-controls={systemId}
                            className="jkl-system-message__dismiss-button"
                            label={dismissAction.buttonTitle || "Lukk"}
                            onClick={dismissAction.handleDismiss}
                        />
                    )}
                </div>
            </div>
        );
    };
    return SystemMessage;
}

export const SystemMessage: React.FC<SystemMessageProps> = ({
    id,
    className,
    maxContentWidth,
    paddingLeft,
    role = "status",
    dismissed,
    variant = "info",
    dismissAction,
    children,
    ...rest
}) => {
    const systemId = useId(id || "jkl-system-message", {
        generateSuffix: !id,
    });

    return (
        <div
            role={role}
            {...rest}
            id={systemId}
            className={clsx(
                "jkl-system-message",
                `jkl-system-message--${variant}`,
                className,
                {
                    "jkl-system-message--dismissed": dismissed,
                },
            )}
        >
            <div
                className="jkl-system-message__content"
                data-testid="system-message-content"
                data-theme="light"
                style={{
                    maxWidth: maxContentWidth,
                    paddingLeft,
                }}
            >
                <MessageIcon variant={variant} />
                <span className="jkl-system-message__message">{children}</span>
                {dismissAction?.handleDismiss && (
                    <DismissButton
                        data-theme="light"
                        aria-controls={systemId}
                        className="jkl-system-message__dismiss-button"
                        label={dismissAction.buttonTitle || "Lukk"}
                        onClick={dismissAction.handleDismiss}
                    />
                )}
            </div>
        </div>
    );
};

/**
 * @deprecated bruk {@link SystemMessage} med variant="info"
 */
export const InfoSystemMessage = systemFactory("info");
InfoSystemMessage.displayName = "InfoSystemMessage";
/**
 * @deprecated bruk {@link SystemMessage} med variant="error"
 */
export const ErrorSystemMessage = systemFactory("error");
ErrorSystemMessage.displayName = "ErrorSystemMessage";
/**
 * @deprecated bruk {@link SystemMessage} med variant="warning"
 */
export const WarningSystemMessage = systemFactory("warning");
WarningSystemMessage.displayName = "WarningSystemMessage";
/**
 * @deprecated bruk {@link SystemMessage} med variant="success"
 */
export const SuccessSystemMessage = systemFactory("success");
SuccessSystemMessage.displayName = "SuccessSystemMessage";
