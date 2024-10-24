import { Dispatch, FormEvent, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { FeedbackAnswer, FeedbackOption, FollowupQuestion } from "../types.js";

type CurrentValue = FeedbackOption<string | number> | FeedbackOption<string | number>[] | undefined;

type Followup = {
    questions: FollowupQuestion[];
    values: FeedbackAnswer[] | undefined;
    step: {
        number: number;
        question: FollowupQuestion;
        isLast: boolean;
    };
    currentValue: CurrentValue;
    setCurrentValue: Dispatch<SetStateAction<CurrentValue>>;
    submitted: boolean;
    handleNext: () => void;
    handleAbort: () => void;
};

export const useFollowup = (questions: FollowupQuestion[], onSubmit: (a: FeedbackAnswer[]) => void): Followup => {
    const [values, setValues] = useState<FeedbackAnswer[]>();
    const [step, setStep] = useState({
        number: 0,
        question: questions[0],
        isLast: questions.length === 1,
    });
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [currentValue, setCurrentValue] = useState<FeedbackOption | FeedbackOption[]>();

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
    function handleNext(e?: FormEvent<HTMLFormElement>) {
        e?.preventDefault();

        const value = Array.isArray(currentValue)
            ? currentValue.map((option) => option.value.toString())
            : currentValue?.value;

        const newValue = {
            ...step.question,
            name: step.question.name || step.question.label,
            value,
        };

        setValues((oldValues) => {
            const filteredValues = oldValues?.filter((oldValue) => oldValue.name !== newValue.name) || [];
            return [...filteredValues, newValue as FeedbackAnswer];
        });
        setCurrentValue(undefined);

        if (step.isLast) {
            setShouldSubmit(true);
        } else {
            setStep((currentStep) => {
                const newStepNum = currentStep.number + 1;
                return {
                    number: newStepNum,
                    question: questions[newStepNum],
                    isLast: newStepNum + 1 >= questions.length,
                };
            });
        }
    }

    // Let the user abort without submitting answers
    function handleAbort() {
        setValues(undefined);
        setCurrentValue(undefined);
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

    return { questions, values, step, currentValue, setCurrentValue, submitted, handleNext, handleAbort };
};
