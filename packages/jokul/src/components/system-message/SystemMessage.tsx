import clsx from "clsx";
import React from "react";
import { useId } from "../../hooks/useId/useId.js";
import { DismissButton } from "../message/DismissButton.js";
import { MessageIcon } from "./common/MessageIcon.js";
import type { SystemMessageProps } from "./types.js";

type messageTypes = "info" | "error" | "success" | "warning";

function systemFactory(
    messageType: messageTypes,
): React.FC<SystemMessageProps> {
    const SystemMessage: React.FC<SystemMessageProps> = ({
        id,
        className,
        density,
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
                    "jkl-system-message--" + messageType,
                    className,
                    {
                        "jkl-system-message--dismissed": dismissed,
                    },
                )}
                data-density={density}
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
                    <MessageIcon messageType={messageType} />
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

export const InfoSystemMessage = systemFactory("info");
InfoSystemMessage.displayName = "InfoSystemMessage";
export const ErrorSystemMessage = systemFactory("error");
ErrorSystemMessage.displayName = "ErrorSystemMessage";
export const WarningSystemMessage = systemFactory("warning");
WarningSystemMessage.displayName = "WarningSystemMessage";
export const SuccessSystemMessage = systemFactory("success");
SuccessSystemMessage.displayName = "SuccessSystemMessage";
