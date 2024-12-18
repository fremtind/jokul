import { Density, WithChildren } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React from "react";
import { DismissButton } from "./common/DismissButton";
import { MessageIcon } from "./common/MessageIcon";

type messageTypes = "info" | "error" | "success" | "warning";

export interface SystemMessageProps extends WithChildren {
    id?: string;
    className?: string;
    density?: Density;
    maxContentWidth?: string;
    paddingLeft?: string;
    /** Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none presentation`. */
    role?: string;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
}

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
                className={cn(
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
