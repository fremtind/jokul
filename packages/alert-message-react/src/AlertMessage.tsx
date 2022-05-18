import { WithChildren } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import classNames from "classnames";
import React from "react";
import { MessageIcon } from "./common/MessageIcon";

type messageTypes = "info" | "error" | "success" | "warning";

interface Props extends WithChildren {
    className?: string;
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
        className = "",
        maxContentWidth,
        paddingLeft,
        role = "status",
        dismissed,
        dismissAction,
        children,
    }) => {
        const componentClassName = classNames("jkl-alert-message", "jkl-alert-message--" + messageType, className, {
            "jkl-alert-message--dismissed": dismissed,
        });

        const styles = {
            maxWidth: maxContentWidth,
            paddingLeft,
        };

        return (
            <div className={componentClassName} role={role} data-theme="light">
                <div className="jkl-alert-message__content" data-testid="alert-message-content" style={{ ...styles }}>
                    <div aria-hidden className="jkl-alert-message__icon">
                        <MessageIcon messageType={messageType} />
                    </div>
                    <span className="jkl-alert-message__message jkl-body">{children}</span>
                    {dismissAction?.handleDismiss && (
                        <IconButton
                            className="jkl-alert-message__dismiss-button"
                            iconType="clear"
                            buttonTitle={dismissAction.buttonTitle || "Lukk"}
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
