import React, { JSXElementConstructor, VFC } from "react";
import { CheckboxQuestion, RadioQuestion, SliderQuestion, TextQuestion, SmileyQuestion } from "./questions";
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

export const getQuestionFromType = (type: QuestionType): VFC<QuestionProps> => {
    switch (type) {
        case "radio":
            return RadioQuestion;
        case "checkbox":
            return CheckboxQuestion;
        case "text":
            return TextQuestion;
        case "slider":
            return SliderQuestion;
        case "smiley":
            return SmileyQuestion;

        default:
            return RadioQuestion;
    }
};
