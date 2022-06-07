import { useAnimatedHeight } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { forwardRef, useEffect, useRef } from "react";
import { MessageBoxProps, ErrorMessageBox } from "./MessageBox";

export interface FormErrorMessageBoxProps {
    className?: string;
    id?: string;
    /**
     * @default { title: "Feil og mangler i skjemaet" }
     */
    messageBoxProps?: Partial<MessageBoxProps>;
    errors: (string | undefined)[];
    isSubmitted: boolean;
    isValid: boolean;
}

const defaultMessageBoxProps = {
    title: "Feil og mangler i skjemaet",
};

export const FormErrorMessageBox = forwardRef<HTMLDivElement, FormErrorMessageBoxProps>(
    (props, forwardedRef): JSX.Element | null => {
        const { className, errors, isSubmitted, isValid, messageBoxProps, ...rest } = props;

        const showSummary = isSubmitted && !isValid;

        const [messageBoxRef] = useAnimatedHeight<HTMLDivElement>(showSummary);

        const previousErrors = useRef<Array<string | undefined>>(errors);
        useEffect(() => {
            previousErrors.current = errors;
        }, [errors]);
        const hasNewErrors = errors.length > previousErrors.current.length;

        return (
            <div ref={forwardedRef} className={cn("jkl-form-error-message-box", className)} {...rest}>
                <ErrorMessageBox
                    {...defaultMessageBoxProps}
                    {...messageBoxProps}
                    ref={messageBoxRef}
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
                </ErrorMessageBox>
            </div>
        );
    },
);

FormErrorMessageBox.displayName = "FormErrorMessageBox";
