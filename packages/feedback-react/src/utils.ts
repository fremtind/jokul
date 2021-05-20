import { FeedbackOption, FeedbackValue } from "./types";

export function hasPrompt(option: FeedbackValue | FeedbackOption): option is FeedbackOption {
    return option?.hasOwnProperty("prompt");
}

export function hasLabel(option: FeedbackValue | FeedbackOption): option is FeedbackOption {
    return option?.hasOwnProperty("label");
}

export function getLabel(option: FeedbackValue | FeedbackOption) {
    return hasLabel(option) ? (option as FeedbackOption).label : `${getRawFeedbackValue(option)}`;
}

export function getRawFeedbackValue(option: FeedbackValue | FeedbackOption) {
    return isFeedbackValue(option) ? option : option?.value;
}

export function getRawFeedbackValues(options: Array<FeedbackValue | FeedbackOption>) {
    return options.map(getRawFeedbackValue);
}

export function isFeedbackValue(option: FeedbackValue | FeedbackOption): option is FeedbackValue {
    return typeof option === "number";
}

export function transformToValuePair(option: FeedbackValue | FeedbackOption) {
    return {
        label: getLabel(option),
        value: getRawFeedbackValue(option),
    };
}
