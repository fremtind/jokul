import { useState, useRef, useCallback, useEffect } from "react";
import { FeedbackType, FeedbackOption } from "./types";

export const useFeedback = (onSubmit: (f: FeedbackType) => void) => {
    const [value, setValue] = useState<FeedbackOption>();
    const [message, setMessage] = useState<string>();
    const [submitted, setSubmitted] = useState(false);

    const feedbackRef = useRef({
        onSubmit,
        value,
        message,
        submitted,
    });

    useEffect(() => {
        feedbackRef.current = {
            ...feedbackRef.current,
            onSubmit,
            value,
            message,
            submitted,
        };
    }, [onSubmit, value, message, submitted]);

    const _handleSubmit = useCallback(() => {
        if (!feedbackRef.current.submitted && feedbackRef.current.value !== undefined) {
            feedbackRef.current.onSubmit({
                feedbackValue: feedbackRef.current.value.value,
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
        value,
        setValue,
        message,
        setMessage,
        submitted,
        handleSubmit,
    };
};
