import { useState, useRef, useCallback, useEffect, SetStateAction, Dispatch, FormEventHandler } from "react";
import { FeedbackType, FeedbackOption } from "../types.js";

type Value = FeedbackOption<string | number> | FeedbackOption<string | number>[] | undefined;

type MainQuestion = {
    currentValue: Value;
    setCurrentValue: Dispatch<SetStateAction<Value>>;
    message: string | undefined;
    setMessage: Dispatch<SetStateAction<string | undefined>>;
    submitted: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const useMainQuestion = (onSubmit: (f: FeedbackType) => void): MainQuestion => {
    const [currentValue, setCurrentValue] = useState<FeedbackOption | FeedbackOption[]>();
    const [message, setMessage] = useState<string>();
    const [submitted, setSubmitted] = useState(false);

    const feedbackRef = useRef({
        onSubmit,
        currentValue,
        message,
        submitted,
    });

    useEffect(() => {
        feedbackRef.current = {
            ...feedbackRef.current,
            onSubmit,
            currentValue,
            message,
            submitted,
        };
    }, [onSubmit, currentValue, message, submitted]);

    const submitHandler = useCallback((intentionalSubmit = true) => {
        const { message, currentValue, submitted, onSubmit } = feedbackRef.current;

        if (!submitted && currentValue !== undefined) {
            const feedbackValue = Array.isArray(currentValue)
                ? currentValue.map((option) => option.value)
                : currentValue?.value;
            onSubmit({
                feedbackValue,
                intentionalSubmit,
                ...(intentionalSubmit && message ? { message } : {}),
            });
        }
    }, []);

    const autoSubmit = useCallback(() => submitHandler(false), [submitHandler]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", autoSubmit);
        }
        return () => {
            autoSubmit();
            window.removeEventListener("beforeunload", autoSubmit);
        };
    }, [autoSubmit]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        submitHandler();
        setSubmitted(true);
    };

    return {
        currentValue,
        setCurrentValue,
        message,
        setMessage,
        submitted,
        handleSubmit,
    };
};
