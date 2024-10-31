import React, { FC } from "react";
import { ErrorIcon } from "../../icon/icons/ErrorIcon.js";
import { InfoIcon } from "../../icon/icons/InfoIcon.js";
import { SuccessIcon } from "../../icon/icons/SuccessIcon.js";
import { WarningIcon } from "../../icon/icons/WarningIcon.js";

type MessageTypes = "info" | "error" | "success" | "warning";

type Props = {
    messageType: MessageTypes;
};

export const MessageIcon: FC<Props> = ({ messageType }) => {
    switch (messageType) {
        case "error":
            return <ErrorIcon className="jkl-system-message__icon" />;
        case "info":
            return <InfoIcon className="jkl-system-message__icon" />;
        case "success":
            return <SuccessIcon className="jkl-system-message__icon" />;
        case "warning":
            return <WarningIcon className="jkl-system-message__icon" />;

        default:
            return null;
    }
};
