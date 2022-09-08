import { Density, WithChildren } from "@fremtind/jkl-core";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { AriaRole, forwardRef } from "react";
import { DismissButton } from "./DismissButton";

export interface MessageBoxProps extends WithChildren {
    id?: string;
    title?: string;
    fullWidth?: boolean;
    density?: Density;
    className?: string;
    dismissed?: boolean;
    dismissAction?: {
        handleDismiss: () => void;
        buttonTitle?: string;
    };
    /** Overstyr standardrollen til meldingen. Om du ønsker å "skru av" rollen kan du bruke verdien `none presentation`. */
    role?: AriaRole;
}

type messageTypes = "info" | "error" | "success" | "warning";

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
                    viewBox="2 3 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3588 20.5107L5.64157 20.5107C3.33259 20.5107 1.88917 18.0116 3.04301 16.0116L9.40163 4.98996C10.5561 2.98885 13.4443 2.98885 14.5987 4.98996L20.9574 16.0116C22.1112 18.0116 20.6678 20.5107 18.3588 20.5107ZM12.7515 13.6525L12.7515 7.63131L11.9988 7.63131L11.2462 7.63131L11.2462 13.6525L12.7515 13.6525ZM12.0012 15.0458C11.441 15.0458 10.9868 15.5 10.9868 16.0602C10.9868 16.6205 11.441 17.0747 12.0012 17.0747C12.5615 17.0747 13.0157 16.6205 13.0157 16.0602C13.0157 15.5 12.5615 15.0458 12.0012 15.0458Z"
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

function messageFactory(messageType: messageTypes) {
    const MessageBox = forwardRef<HTMLDivElement, MessageBoxProps>((props, ref) => {
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

        const boxId = useId(id || "jkl-message-box", { generateSuffix: !id });

        const hasStringChild = React.Children.map(children, (child) => typeof child === "string");
        const newChildren = hasStringChild?.[0] ? <p>{children}</p> : children;

        return (
            <div
                {...rest}
                id={id}
                ref={ref}
                className={cn("jkl-message-box", "jkl-message-box--" + messageType, className, {
                    "jkl-message-box--full": fullWidth,
                    "jkl-message-box--dismissed": dismissed,
                })}
                role={role || getRole(messageType)}
                data-theme="light"
                data-density={density}
            >
                {getIcon(messageType)}
                <div className="jkl-message-box__content">
                    {title !== undefined && <p className="jkl-message-box__title">{title}</p>}
                    <div className="jkl-message-box__message">{newChildren}</div>
                </div>
                {dismissAction?.handleDismiss && (
                    <DismissButton
                        aria-controls={boxId}
                        className="jkl-message-box__dismiss-button"
                        label={dismissAction.buttonTitle || "Lukk"}
                        onClick={dismissAction.handleDismiss}
                    />
                )}
            </div>
        );
    });

    MessageBox.displayName = "MessageBox";

    return MessageBox;
}

export const InfoMessageBox = messageFactory("info");
InfoMessageBox.displayName = "InfoMessageBox";
export const ErrorMessageBox = messageFactory("error");
ErrorMessageBox.displayName = "ErrorMessageBox";
export const WarningMessageBox = messageFactory("warning");
WarningMessageBox.displayName = "WarningMessageBox";
export const SuccessMessageBox = messageFactory("success");
SuccessMessageBox.displayName = "SuccessMessageBox";
