import React, { ReactNode } from "react";
import classNames from "classnames";
import { messageTypes } from "./common/types.d";
import { MessageIcon } from "./common/MessageIcon";

interface Props {
    messageType: messageTypes;
    title: string;
    children: ReactNode;
    fullWidth?: boolean;
    className?: string;
    inverted?: boolean;
}

export const MessageBox: React.FC<Props> = ({ messageType, title, fullWidth, className = "", children, inverted }) => {
    const componentClassName = classNames("jkl-message-box", "jkl-message-box--" + messageType, className, {
        "jkl-message-box--full": fullWidth,
        "jkl-message-box--dark": inverted,
    });

    return (
        <div className={componentClassName} role="alert">
            <div className="jkl-message-box__icon">
                <MessageIcon messageType={messageType} />
            </div>
            <div className="jkl-message-box__title jkl-heading-small">{title}</div>
            <p className="jkl-message-box__message jkl-body">{children}</p>
        </div>
    );
};
