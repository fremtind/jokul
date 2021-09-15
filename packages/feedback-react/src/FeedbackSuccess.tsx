import React from "react";
import cn from "classnames";
import { SuccessMessage } from "@fremtind/jkl-message-box-react";

type Props = React.ComponentProps<typeof SuccessMessage>;

export const FeedbackSuccess = ({ children, className, ...rest }: Props) => (
    <SuccessMessage className={cn("jkl-feedback__fade-in", className)} {...rest}>
        {children}
    </SuccessMessage>
);
