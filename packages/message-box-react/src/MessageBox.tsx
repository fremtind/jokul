import React, { ReactNode } from "react";
import cx from "classnames";

interface Props {
    title: string;
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

type messageTypes = "info" | "error" | "success" | "warning";

function messageFactory(messageType: messageTypes) {
    return function messageBox({ title, fullWidth, className = "", children }: Props) {
        const componentClassName = cx("jkl-message-box", "jkl-message-box--" + messageType, className, {
            "jkl-message-box--full": fullWidth,
        });

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
