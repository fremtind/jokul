import React, { JSXElementConstructor, FC } from "react";
import { CheckboxQuestion, RadioQuestion, TextQuestion, SmileyQuestion } from "./questions";
import { QuestionProps, QuestionType } from "./types";

export function getChildrenOfType<P>(...allowedTypes: Array<string | JSXElementConstructor<P>>) {
    return (
        children: React.ReactNode,
    ): React.ReactElement<P, string | React.JSXElementConstructor<unknown>>[] | null | undefined =>
        React.Children.map(children, (child) => {
            if (React.isValidElement<P>(child) && allowedTypes.includes(child.type)) {
                return child;
            }
            return undefined;
        });
}

export const getTypeFromComponent = (component: React.ReactElement): QuestionType => {
    switch (component.type) {
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

export const getQuestionFromType = (type: QuestionType): FC<QuestionProps> => {
    switch (type) {
        case "radio":
            return RadioQuestion;
        case "checkbox":
            return CheckboxQuestion;
        case "text":
            return TextQuestion;
        case "smiley":
            return SmileyQuestion;

        default:
            return RadioQuestion;
    }
};
