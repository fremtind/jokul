import React, { AriaRole, ReactNode } from "react";
import classNames from "classnames";

import { IconButton } from "@fremtind/jkl-icon-button-react";

interface Props {
    children: ReactNode;
    title?: string;
    fullWidth?: boolean;
    className?: string;
    /** @deprecated */
    inverted?: boolean;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
    /** Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none presentation`. */
    role?: AriaRole;
}

type messageTypes = "info" | "error" | "success" | "warning";

function messageFactory(messageType: messageTypes) {
    return function messageBox({
        title,
        fullWidth,
        className = "",
        inverted,
        dismissed,
        dismissAction,
        children,
        role,
    }: Props) {
        const componentClassName = classNames("jkl-message-box", "jkl-message-box--" + messageType, className, {
            "jkl-message-box--full": fullWidth,
            "jkl-message-box--dark": inverted,
            "jkl-message-box--dismissed": dismissed,
        });

        const getIcon = (messageType: messageTypes) => {
            switch (messageType) {
                case "error":
                    return (
                        <svg
                            className="jkl-message-box__icon"
                            aria-hidden
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM17.43 8.41421L13.6371 12.2071L17.43 16L16.0158 17.4142L12 13.6213L8.43001 17.4142L7.01579 16L10.8087 12.2071L7.01579 8.41421L8.43001 7L12 10.7929L16.0158 7L17.43 8.41421Z"
                                fill="currentColor"
                            />
                        </svg>
                    );
                case "info":
                    return (
                        <svg
                            className="jkl-message-box__icon"
                            aria-hidden
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6274 18.8503 24 12 24C5.59548 24 0 18.6274 0 12C0 5.37258 5.59548 0 12 0C18.8503 0 24 5.37258 24 12ZM11 17.4142V10H13.2229V17.4142H11.2229ZM12 8.5C12.9133 8.5 13.4729 7.94036 13.4729 7.25C13.4729 6.55964 12.9133 6 12 6C11.5325 6 10.9729 6.55964 10.9729 7.25C10.9729 7.94036 11.5325 8.5 12 8.5Z"
                                fill="currentColor"
                            />
                        </svg>
                    );
                case "success":
                    return (
                        <svg
                            className="jkl-message-box__icon"
                            aria-hidden
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 24C18.8503 24 24 18.6274 24 12C24 5.37258 18.8503 0 12 0C5.59548 0 0 5.37258 0 12C0 18.6274 5.59548 24 12 24ZM11.5503 16.7071L19.0503 9.20711L17.6361 7.79289L10.8432 14.5858L7.26909 11.0116L5.85486 12.4258L10.1361 16.7071L10.8432 17.4142L11.5503 16.7071Z"
                                fill="currentColor"
                            />
                        </svg>
                    );
                case "warning":
                    return (
                        <svg
                            className="jkl-message-box__icon"
                            aria-hidden
                            viewBox="0 0 26 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.8058 23L3.19424 23C0.885265 23 -0.558162 20.5008 0.595683 18.5008L10.4015 1.50415C11.5559 -0.496963 14.4441 -0.496963 15.5986 1.50415L25.4043 18.5008C26.5582 20.5008 25.1148 23 22.8058 23ZM14 8.00001L14 15.4142L12 15.4142L12 8.00001L14 8.00001ZM13 17C12.3096 17 11.75 17.5597 11.75 18.25C11.75 18.9404 12.3096 19.5 13 19.5C13.6904 19.5 14.25 18.9404 14.25 18.25C14.25 17.5597 13.6904 17 13 17Z"
                                fill="currentColor"
                            />
                        </svg>
                    );
                default:
                    return null;
            }
        };

        const getRole = (messageType: messageTypes) => {
            switch (messageType) {
                case "error":
                case "warning":
                    return "alert";
                case "info":
                case "success":
                    return "status";
                default:
                    return undefined;
            }
        };

        return (
            <div className={componentClassName} role={role || getRole(messageType)} data-theme="light">
                {getIcon(messageType)}
                <div className="jkl-message-box__content">
                    {title !== undefined && <p className="jkl-message-box__title">{title}</p>}
                    <p className="jkl-body">{children}</p>
                </div>
                {dismissAction?.handleDismiss && (
                    <IconButton
                        className="jkl-message-box__dismiss-button"
                        iconType="clear"
                        buttonTitle={dismissAction.buttonTitle || "Lukk"}
                        onClick={dismissAction.handleDismiss}
                    />
                )}
            </div>
        );
    };
}

export const InfoMessage = messageFactory("info");
export const ErrorMessage = messageFactory("error");
export const WarningMessage = messageFactory("warning");
export const SuccessMessage = messageFactory("success");
