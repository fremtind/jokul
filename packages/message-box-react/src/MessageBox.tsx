import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
    children: ReactNode;
    title?: string;
    fullWidth?: boolean;
    className?: string;
    inverted?: boolean;
}

type messageTypes = "info" | "error" | "success" | "warning";

function messageFactory(messageType: messageTypes) {
    return function messageBox({ title, fullWidth, className = "", children, inverted }: Props) {
        const componentClassName = classNames("jkl-message-box", "jkl-message-box--" + messageType, className, {
            "jkl-message-box--full": fullWidth,
            "jkl-message-box--dark": inverted,
        });

        const getIcon = (messageType: messageTypes) => {
            switch (messageType) {
                case "error":
                    return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                            <rect
                                x="4"
                                y="4.22168"
                                width="1"
                                height="22"
                                transform="rotate(-45 4 4.22168)"
                                fill="currentColor"
                            />
                        </svg>
                    );
                case "info":
                    return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                            <path
                                d="M11.952 7.328C12.384 7.328 12.688 7.072 12.688 6.624C12.688 6.192 12.384 5.92 11.952 5.92C11.536 5.92 11.248 6.192 11.248 6.624C11.248 7.072 11.536 7.328 11.952 7.328ZM11.504 18H12.512V9.408H11.504V18Z"
                                fill="currentColor"
                            />
                        </svg>
                    );
                case "success":
                    return (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                            <path d="M7 13.5L10 16.5L19.5 7" stroke="currentColor" />
                        </svg>
                    );
                case "warning":
                    return (
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
                            <path
                                className="jkl-icon-exclamation"
                                d="M11.112 14.624H11.688L11.896 11.36V6H10.904V11.36L11.112 14.624ZM11.4 18.24C11.784 18.24 12.136 17.952 12.136 17.504C12.136 17.072 11.784 16.784 11.4 16.784C11.016 16.784 10.664 17.072 10.664 17.504C10.664 17.952 11.016 18.24 11.4 18.24Z"
                                fill="currentColor"
                            />
                        </svg>
                    );
                default:
                    return null;
            }
        };

        return (
            <div className={componentClassName} role="alert">
                <div className="jkl-message-box__icon">{getIcon(messageType)}</div>
                {title !== undefined && <div className="jkl-message-box__title jkl-heading-small">{title}</div>}
                <span className="jkl-message-box__message jkl-body">{children}</span>
            </div>
        );
    };
}

export const InfoMessage = messageFactory("info");
export const ErrorMessage = messageFactory("error");
export const WarningMessage = messageFactory("warning");
export const SuccessMessage = messageFactory("success");
