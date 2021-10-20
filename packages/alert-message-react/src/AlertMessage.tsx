import React, { ReactNode } from "react";
import classNames from "classnames";
import { MessageIcon } from "./common/MessageIcon";
import { IconButton } from "@fremtind/jkl-icon-button-react";

type messageTypes = "info" | "error" | "success" | "warning";

interface Props {
    children: ReactNode;
    className?: string;
    /** @deprecated */
    inverted?: boolean;
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

function alertFactory(messageType: messageTypes) {
    return function alertMessage({
        className = "",
        inverted,
        maxContentWidth,
        paddingLeft,
        role = "status",
        dismissed,
        dismissAction,
        children,
    }: Props) {
        const componentClassName = classNames("jkl-alert-message", "jkl-alert-message--" + messageType, className, {
            "jkl-alert-message--dark": inverted,
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
}

export const InfoAlertMessage = alertFactory("info");
export const ErrorAlertMessage = alertFactory("error");
export const WarningAlertMessage = alertFactory("warning");
export const SuccessAlertMessage = alertFactory("success");
