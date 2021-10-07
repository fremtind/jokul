import { useState, useRef, useCallback, useEffect, SetStateAction, Dispatch } from "react";
import { FeedbackType, FeedbackOption } from "../types";

type Value = FeedbackOption<string | number> | FeedbackOption<string | number>[] | undefined;

type MainQuestion = {
    currentValue: Value;
    setCurrentValue: Dispatch<SetStateAction<Value>>;
    message: string | undefined;
    setMessage: Dispatch<SetStateAction<string | undefined>>;
    submitted: boolean;
    handleSubmit: () => void;
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

    const _handleSubmit = useCallback(() => {
        const refValue = feedbackRef.current;
        if (!refValue.submitted && refValue.currentValue !== undefined) {
            const feedbackValue = Array.isArray(refValue.currentValue)
                ? refValue.currentValue.map((option) => option.value)
                : refValue.currentValue?.value;
            feedbackRef.current.onSubmit({
                feedbackValue,
                message: feedbackRef.current.message,
            });
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", _handleSubmit);
        }
        return () => {
            _handleSubmit();
            window.removeEventListener("beforeunload", _handleSubmit);
        };
    }, [_handleSubmit]);

    const handleSubmit = () => {
        _handleSubmit();
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
