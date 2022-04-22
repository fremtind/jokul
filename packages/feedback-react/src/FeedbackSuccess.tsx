import React, { FC } from "react";
import cn from "classnames";
import { SuccessMessageBox, MessageBoxProps } from "@fremtind/jkl-message-box-react";

export const FeedbackSuccess: FC<MessageBoxProps> = ({ children, className, ...rest }) => (
    <SuccessMessageBox className={cn("jkl-feedback__fade-in", className)} {...rest}>
        {children}
    </SuccessMessageBox>
);
