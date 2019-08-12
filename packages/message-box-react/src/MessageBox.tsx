import React, { ReactNode } from "react";
import { H4 } from "@fremtind/jkl-typography-react";

interface Props {
    title: string;
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

type messageTypes = "info" | "error" | "success" | "warning";

const baseClassName = "jkl-message-box";

function messageFactory(messageType: messageTypes) {
    return function messageBox({ title, fullWidth, className = "", children }: Props) {
        return (
            <div
                className={`${baseClassName} ${baseClassName}--${messageType} ${
                    fullWidth ? baseClassName + "--full" : ""
                } ${className}`}
            >
                <H4 className="jkl-message-box__title">{title}</H4>
                <div className="jkl-p jkl-message-box__message">{children}</div>
            </div>
        );
    };
}

export const InfoMessage = messageFactory("info");
export const ErrorMessage = messageFactory("error");
export const WarningMessage = messageFactory("warning");
export const SuccessMessage = messageFactory("success");
