import { ErrorIcon, InfoIcon, WarningIcon, SuccessIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";

type MessageTypes = "info" | "error" | "success" | "warning";

type Props = {
    messageType: MessageTypes;
};

export const MessageIcon: FC<Props> = ({ messageType }) => {
    switch (messageType) {
        case "error":
            return <ErrorIcon variant="medium" className="jkl-alert-message__icon" />;
        case "info":
            return <InfoIcon variant="medium" className="jkl-alert-message__icon" />;
        case "success":
            return <SuccessIcon variant="medium" className="jkl-alert-message__icon" />;
        case "warning":
            return <WarningIcon variant="medium" className="jkl-alert-message__icon" />;

        default:
            return null;
    }
};
