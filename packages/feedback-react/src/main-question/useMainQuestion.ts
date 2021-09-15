import { useState, useRef, useCallback, useEffect } from "react";
import { FeedbackType, FeedbackOption } from "../types";

export const useMainQuestion = (onSubmit: (f: FeedbackType) => void) => {
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
