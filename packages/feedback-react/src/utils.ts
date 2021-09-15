import React, { JSXElementConstructor } from "react";
import { CheckboxQuestion, RadioQuestion, SliderQuestion, TextQuestion } from "./questions";
import { QuestionType } from "./types";

export function getChildrenOfType<P>(...allowedTypes: Array<string | JSXElementConstructor<P>>) {
    return (children: React.ReactNode) =>
        React.Children.map(children, (child) => {
            if (React.isValidElement<P>(child) && allowedTypes.includes(child.type)) {
                return child;
            }
            return undefined;
        });
}

export const getTypeFromComponent = (component: React.ReactElement): QuestionType => {
    switch (component.type) {
        case SliderQuestion:
            return "slider";
        case RadioQuestion:
            return "radio";
        case CheckboxQuestion:
            return "checkbox";
        case TextQuestion:
            return "text";
        default:
            return "radio";
    }
};

export const getQuestionFromType = (type: QuestionType) => {
    switch (type) {
        case "radio":
            return RadioQuestion;
        case "checkbox":
            return CheckboxQuestion;
        case "text":
            return TextQuestion;
        case "slider":
            return SliderQuestion;

        default:
            return RadioQuestion;
    }
};
