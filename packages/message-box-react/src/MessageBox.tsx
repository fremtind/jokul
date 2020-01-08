import React, { ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

type messageTypes = "info" | "error" | "success" | "warning";

function messageFactory(messageType: messageTypes) {
    return function messageBox({ title, fullWidth, className = "", children }: Props) {
        const componentClassName = "jkl-message-box".concat(
            ` jkl-message-box--${messageType}`,
            fullWidth ? ` jkl-message-box--full` : "",
            className ? ` ${className}` : "",
        );
        return (
            <aside className={componentClassName}>
                <div className="jkl-message-box__title jkl-h4">{title}</div>
                <div className="jkl-message-box__message jkl-body">{children}</div>
            </aside>
        );
    };
}

export const InfoMessage = messageFactory("info");
export const ErrorMessage = messageFactory("error");
export const WarningMessage = messageFactory("warning");
export const SuccessMessage = messageFactory("success");
