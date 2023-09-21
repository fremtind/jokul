import { Density, WithChildren } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React from "react";
import { DismissButton } from "./common/DismissButton";
import { MessageIcon } from "./common/MessageIcon";

type messageTypes = "info" | "error" | "success" | "warning";

interface Props extends WithChildren {
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

function alertFactory(messageType: messageTypes): React.FC<Props> {
    const AlertMessage: React.FC<Props> = ({
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
        const alertId = useId(id || "jkl-alert-message", { generateSuffix: !id });

        return (
            <div
                role={role}
                {...rest}
                id={alertId}
                className={cn("jkl-alert-message", "jkl-alert-message--" + messageType, className, {
                    "jkl-alert-message--dismissed": dismissed,
                })}
                data-density={density}
            >
                <div
                    className="jkl-alert-message__content"
                    data-testid="alert-message-content"
                    data-theme="light"
                    style={{
                        maxWidth: maxContentWidth,
                        paddingLeft,
                    }}
                >
                    <MessageIcon messageType={messageType} />
                    <span className="jkl-alert-message__message">{children}</span>
                    {dismissAction?.handleDismiss && (
                        <DismissButton
                            aria-controls={alertId}
                            className="jkl-alert-message__dismiss-button"
                            label={dismissAction.buttonTitle || "Lukk"}
                            onClick={dismissAction.handleDismiss}
                        />
                    )}
                </div>
            </div>
        );
    };
    return AlertMessage;
}

export const InfoAlertMessage = alertFactory("info");
InfoAlertMessage.displayName = "InfoAlertMessage";
export const ErrorAlertMessage = alertFactory("error");
ErrorAlertMessage.displayName = "ErrorAlertMessage";
export const WarningAlertMessage = alertFactory("warning");
WarningAlertMessage.displayName = "WarningAlertMessage";
export const SuccessAlertMessage = alertFactory("success");
SuccessAlertMessage.displayName = "SuccessAlertMessage";
