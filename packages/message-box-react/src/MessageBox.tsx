import React, { ReactNode } from "react";
import { H4, P } from "@fremtind/jkl-typography-react";

interface Props {
    title: string;
    children: ReactNode;
}

type messageTypes = "info" | "error" | "success";

function messageFactory(messageType: messageTypes) {
    return function messageBox({ title, children }: Props) {
        return (
            <div className={`jkl-message-box__${messageType}`}>
                <H4>{title}</H4>
                <P>{children}</P>
            </div>
        );
    };
}

export const InfoMessage = messageFactory("info");
export const ErrorMessage = messageFactory("error");
export const SuccessMessage = messageFactory("success");
