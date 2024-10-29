import { SuccessMessage, MessageProps } from "@fremtind/jkl-message-react";
import cn from "classnames";
import React, { FC } from "react";

export const FeedbackSuccess: FC<MessageProps> = ({
    children,
    className,
    ...rest
}) => (
    <SuccessMessage
        className={cn("jkl-feedback__fade-in", className)}
        {...rest}
        aria-live="polite"
    >
        {children}
    </SuccessMessage>
);
