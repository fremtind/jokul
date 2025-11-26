import clsx from "clsx";
import React, { forwardRef, useEffect, useRef } from "react";
import { useAnimatedHeight } from "../../hooks/useAnimatedHeight/useAnimatedHeight.js";
import { Message } from "./Message.js";
import type { FormErrorMessageProps } from "./types.js";

const defaultMessageProps = {
    title: "Feil og mangler i skjemaet",
};

export const FormErrorMessage = forwardRef<
    HTMLDivElement,
    FormErrorMessageProps
>((props, forwardedRef): JSX.Element | null => {
    const { className, errors, isSubmitted, isValid, messageProps, ...rest } =
        props;

    const showSummary = isSubmitted && !isValid;

    const [messageRef] = useAnimatedHeight<HTMLDivElement>(showSummary, {
        display: "grid",
    });

    const previousErrors = useRef<Array<string | undefined>>(errors);
    useEffect(() => {
        previousErrors.current = errors;
    }, [errors]);
    const hasNewErrors = errors.length > previousErrors.current.length;

    return (
        <div
            ref={forwardedRef}
            className={clsx("jkl-form-error-message", className)}
            {...rest}
        >
            <Message
                {...defaultMessageProps}
                {...messageProps}
                variant="error"
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
            </Message>
        </div>
    );
});

FormErrorMessage.displayName = "FormErrorMessage";
