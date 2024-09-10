import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, useEffect, useRef } from "react";
import { MessageProps, ErrorMessage } from "./Message";

export interface FormErrorMessageProps {
    className?: string;
    id?: string;
    /**
     * @default { title: "Feil og mangler i skjemaet" }
     */
    messageProps?: Partial<MessageProps>;
    errors: (string | undefined)[];
    isSubmitted: boolean;
    isValid: boolean;
}

const defaultMessageProps = {
    title: "Feil og mangler i skjemaet",
};

export const FormErrorMessage = forwardRef<HTMLDivElement, FormErrorMessageProps>(
    (props, forwardedRef): JSX.Element | null => {
        const { className, errors, isSubmitted, isValid, messageProps, ...rest } = props;

        const showSummary = isSubmitted && !isValid;

        const [messageRef] = useAnimatedHeight<HTMLDivElement>(showSummary, { display: "grid" });

        const previousErrors = useRef<Array<string | undefined>>(errors);
        useEffect(() => {
            previousErrors.current = errors;
        }, [errors]);
        const hasNewErrors = errors.length > previousErrors.current.length;

        return (
            <div ref={forwardedRef} className={cn("jkl-form-error-message", className)} {...rest}>
                <ErrorMessage
                    {...defaultMessageProps}
                    {...messageProps}
                    ref={messageRef}
                    role={hasNewErrors ? "alert" : "presentation"} // Unngå å repetere hele oppsummeringen etter hvert som feilene rettes
                >
                    <ul className="jkl-list">
                        {errors
                            .filter((error) => typeof error !== "undefined")
                            .map((error) => (
                                <li className="jkl-list__item" key={error}>
                                    {error}
                                </li>
                            ))}
                    </ul>
                </ErrorMessage>
            </div>
        );
    },
);

FormErrorMessage.displayName = "FormErrorMessage";
