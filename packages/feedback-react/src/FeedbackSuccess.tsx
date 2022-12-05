import { SuccessMessageBox, MessageBoxProps } from "@fremtind/jkl-message-box-react";
import cn from "classnames";
import React, { FC } from "react";

export const FeedbackSuccess: FC<MessageBoxProps> = ({ children, className, ...rest }) => (
    <SuccessMessageBox className={cn("jkl-feedback__fade-in", className)} {...rest} aria-live="polite">
        {children}
    </SuccessMessageBox>
);
