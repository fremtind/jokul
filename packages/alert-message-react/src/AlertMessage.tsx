import React from "react";
import classNames from "classnames";
import { MessageIcon } from "./common/MessageIcon";

type messageTypes = "info" | "error" | "success" | "warning";

interface Props {
    children: React.ReactNode;
    className?: string;
    inverted?: boolean;
    maxContentWidth?: string;
    paddingLeft?: string;
    role?: string;
}

interface StyleMap {
    [key: string]: string;
}

// map css properties to more descriptive names
const styleMap: StyleMap = {
    maxContentWidth: "maxWidth",
    paddingLeft: "paddingLeft",
};

function alertFactory(messageType: messageTypes) {
    return function alertMessage({
        className = "",
        inverted,
        maxContentWidth,
        paddingLeft,
        role = "status",
        children,
    }: Props) {
        const componentClassName = classNames("jkl-alert-message", "jkl-alert-message--" + messageType, className, {
            "jkl-alert-message--dark": inverted,
        });

        const styles = Object.entries({
            maxContentWidth,
            paddingLeft,
        }).reduce((styleObject: { [key: string]: string }, [style, value]) => {
            if (!!value) {
                styleObject[styleMap[style] || style] = value;
            }

            return styleObject;
        }, {});

        return (
            <div className={componentClassName} role={role}>
                <div className="jkl-alert-message__content" data-testid="alert-message-content" style={{ ...styles }}>
                    <div className="jkl-alert-message__icon">
                        <MessageIcon messageType={messageType} />
                    </div>
                    <p className="jkl-alert-message__message jkl-body">{children}</p>
                </div>
            </div>
        );
    };
}

export const InfoAlertMessage = alertFactory("info");
export const ErrorAlertMessage = alertFactory("error");
export const WarningAlertMessage = alertFactory("warning");
export const SuccessAlertMessage = alertFactory("success");
