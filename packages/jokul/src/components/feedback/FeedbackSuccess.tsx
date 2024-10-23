import clsx from "clsx";
import React, { FC } from "react";
import { MessageProps, SuccessMessage } from "../message/Message.js";

export const FeedbackSuccess: FC<MessageProps> = ({ children, className, ...rest }) => (
    <SuccessMessage className={clsx("jkl-feedback__fade-in", className)} {...rest} aria-live="polite">
        {children}
    </SuccessMessage>
);
