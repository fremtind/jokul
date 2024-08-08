import { Density, WithChildren } from "@fremtind/jkl-core";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "@fremtind/jkl-icons-react";
import { useId } from "@fremtind/jkl-react-hooks";
import clsx from "clsx";
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
    role?: AriaRole;
}

type messageTypes = "info" | "error" | "success" | "warning";

const getIcon = (messageType: messageTypes) => {
    switch (messageType) {
        case "error":
            return <ErrorIcon className="jkl-message-box__icon" />;
        case "info":
            return <InfoIcon className="jkl-message-box__icon" />;
        case "success":
            return <SuccessIcon className="jkl-message-box__icon" />;
        case "warning":
            return <WarningIcon className="jkl-message-box__icon" />;
        default:
            return null;
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
                className={clsx("jkl-message-box", "jkl-message-box--" + messageType, className, {
                    "jkl-message-box--full": fullWidth,
                    "jkl-message-box--dismissed": dismissed,
                })}
                role={role}
                data-density={density}
            >
                {getIcon(messageType)}
                <div className="jkl-message-box__content" data-theme="light">
                    {title && <p className="jkl-message-box__title">{title}</p>}
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
