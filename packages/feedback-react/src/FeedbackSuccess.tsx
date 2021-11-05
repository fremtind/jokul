import React, { FC } from "react";
import cn from "classnames";
import { SuccessMessageBox } from "@fremtind/jkl-message-box-react";

type Props = React.ComponentProps<typeof SuccessMessageBox>;

export const FeedbackSuccess: FC<Props> = ({ children, className, ...rest }) => (
    <SuccessMessageBox className={cn("jkl-feedback__fade-in", className)} {...rest}>
        {children}
    </SuccessMessageBox>
);
