import React, { ReactNode } from "react";
import { H4 } from "@fremtind/jkl-typography-react";

interface Props {
    title: string;
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
}

type messageTypes = "info" | "error" | "success" | "warning";

const css = "jkl-message-box";

function messageFactory(messageType: messageTypes) {
    return function messageBox({ title, fullWidth, className = "", children }: Props) {
        return (
            <div className={`${css} ${css}__${messageType} ${fullWidth ? css + "--full" : ""} ${className}`}>
                <H4>{title}</H4>
                <div className="jkl-p">{children}</div>
            </div>
        );
    };
}

export const InfoMessage = messageFactory("info");
export const ErrorMessage = messageFactory("error");
export const WarningMessage = messageFactory("warning");
export const SuccessMessage = messageFactory("success");
