import React, { JSXElementConstructor } from "react";
import { MultipleChoiceQuestion, SingleChoiceQuestion, SliderQuestion, TextQuestion } from "./questions";

export function getChildrenOfType<P>(...allowedTypes: Array<string | JSXElementConstructor<P>>) {
    return (children: React.ReactNode) =>
        React.Children.map(children, (child) => {
            if (React.isValidElement<P>(child) && allowedTypes.includes(child.type)) {
                return child;
            }
            return undefined;
        });
}

export const getTypeFromComponent = (component: React.ReactElement) => {
    switch (component.type) {
        case SliderQuestion:
        case SingleChoiceQuestion:
            return "single";
        case MultipleChoiceQuestion:
            return "multiple";
        case TextQuestion:
            return "text";
        default:
            return "single";
    }
};
