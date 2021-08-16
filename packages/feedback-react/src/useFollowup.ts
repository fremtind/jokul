import { useCallback, useEffect, useRef, useState } from "react";
import { FeedbackAnswer, FeedbackQuestion } from "./types";

export const useFollowup = (questions: FeedbackQuestion[], onSubmit: (a: FeedbackAnswer[]) => void) => {
    const [values, setValues] = useState<FeedbackAnswer[]>();
    const [step, setStep] = useState({
        number: 0,
        question: questions[0],
        isLast: questions.length === 1,
    });
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Store info in a ref to facilitate autosubmit on component unmount,
    // or when leaving page
    const followupRef = useRef({
        values,
        submitted,
        onSubmit,
    });

    // Keep values in ref updated
    useEffect(() => {
        followupRef.current = {
            ...followupRef.current,
            values,
            submitted,
        };
    }, [values, submitted]);

    // General method for submitting info
    const _handleSubmit = useCallback(() => {
        if (!followupRef.current.submitted && followupRef.current.values !== undefined) {
            followupRef.current.onSubmit(followupRef.current.values);
        }
    }, []);

    // Function for handling going to the next step in the form wizard
    function handleNext(question: FeedbackQuestion, value: string | string[]) {
        const newValue = {
            ...question,
            name: question.name || question.label,
            value,
        };

        setValues((oldValues) => {
            const filteredValues = oldValues?.filter((oldValue) => oldValue.name !== newValue.name) || [];
            return [...filteredValues, newValue as FeedbackAnswer];
        });

        if (step.isLast) {
            setShouldSubmit(true);
        } else {
            setStep((lastStep2) => {
                const nextStep = lastStep2.number + 1;
                return {
                    number: nextStep,
                    question: questions[nextStep],
                    isLast: nextStep + 1 >= questions.length,
                };
            });
        }
    }

    // Let the user abort without submitting answers
    function handleAbort() {
        setValues(undefined);
        setStep({
            number: 0,
            question: questions[0],
            isLast: questions.length === 1,
        });
        setSubmitted(true);
    }

    // Submit info after user submits last question
    useEffect(() => {
        if (shouldSubmit) {
            _handleSubmit();
            setSubmitted(true);
        }
    }, [shouldSubmit, _handleSubmit]);

    // Submit info if component unmounts or page unloads
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("beforeunload", _handleSubmit);
        }
        return () => {
            _handleSubmit();
            window.removeEventListener("beforeunload", _handleSubmit);
        };
    }, [_handleSubmit]);

    return { values, step, submitted, handleNext, handleAbort };
};
