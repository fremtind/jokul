import { SuccessMessageBox, MessageBoxProps } from "@fremtind/jkl-message-box-react";
import clsx from "clsx";
import React, { FC } from "react";

export const FeedbackSuccess: FC<MessageBoxProps> = ({ children, className, ...rest }) => (
    <SuccessMessageBox className={clsx("jkl-feedback__fade-in", className)} {...rest} aria-live="polite">
        {children}
    </SuccessMessageBox>
);
