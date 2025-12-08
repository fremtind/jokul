import clsx from "clsx";
import type { FC } from "react";
import { SuccessMessage } from "../message/Message.js";
import type { MessageProps } from "../message/types.js";

export const FeedbackSuccess: FC<MessageProps> = ({
    children,
    className,
    ...rest
}) => (
    <SuccessMessage
        className={clsx("jkl-feedback__fade-in", className)}
        {...rest}
        aria-live="polite"
    >
        {children}
    </SuccessMessage>
);
