import clsx from "clsx";
import React from "react";
import { useId } from "../../hooks/useId/useId.js";
import { DismissButton } from "../message/DismissButton.js";
import { COMPONENT_NAMES } from "../metadata.js";
import { getExtraTrackingAttributes } from "../types.js";
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
                {...rest}
                role={role}
                id={systemId}
                className={clsx("jkl-system-message", className, {
                    "jkl-system-message--dismissed": dismissed,
                })}
                data-color={variant}
                data-testid="jkl-system-message"
            >
                <div
                    className="jkl-system-message__content"
                    data-testid="system-message-content"
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
    trackingProps,
    ...rest
}) => {
    const systemId = useId(id || "jkl-system-message", {
        generateSuffix: !id,
    });

    return (
        <div
            {...rest}
            role={role}
            id={systemId}
            className={clsx("jkl-system-message", className, {
                "jkl-system-message--dismissed": dismissed,
            })}
            data-color={variant}
            data-testid="jkl-system-message"
            data-track-component-name={COMPONENT_NAMES.SystemMessage}
            data-track-id={trackingProps?.id}
            data-track-label={
                typeof children === "string" ? children : undefined
            }
            data-track-dismissed={dismissed}
            data-track-max-content-width={maxContentWidth}
            {...getExtraTrackingAttributes(trackingProps?.extra, rest)}
        >
            <div
                className="jkl-system-message__content"
                data-testid="system-message-content"
                style={{
                    maxWidth: maxContentWidth,
                    paddingLeft,
                }}
            >
                <MessageIcon variant={variant} />
                <span className="jkl-system-message__message">{children}</span>
                {dismissAction?.handleDismiss && (
                    <DismissButton
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
