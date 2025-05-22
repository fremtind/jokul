import React, { createContext, type FC, useContext } from "react";
import type { WithChildren } from "../../core/types.js";
import type { BaseTextAreaProps } from "../text-area/types.js";

type FeedbackContext = {
    feedbackSubmitted: boolean;
    followupStarted: boolean;
    followupSubmitted: boolean;
    contactSubmitted: boolean;
    landmarkLabel?: string;
    setFeedbackSubmitted: (state: boolean) => void;
    setFollowupStarted: (state: boolean) => void;
    setFollowupSubmitted: (state: boolean) => void;
    setContactSubmitted: (state: boolean) => void;
} & Pick<BaseTextAreaProps, "counter">;

const initialState: FeedbackContext = {
    feedbackSubmitted: false,
    followupStarted: false,
    followupSubmitted: false,
    contactSubmitted: false,
    setFeedbackSubmitted: () => null,
    setFollowupStarted: () => null,
    setFollowupSubmitted: () => null,
    setContactSubmitted: () => null,
};

const feedbackContext = createContext(initialState);

export const useFeedbackContext = (): FeedbackContext =>
    useContext(feedbackContext);

interface FeedbackContextProviderProps extends WithChildren {
    value: FeedbackContext;
}

export const FeedbackContextProvider: FC<FeedbackContextProviderProps> = ({
    value,
    children,
}) => (
    <feedbackContext.Provider value={value}>
        {children}
    </feedbackContext.Provider>
);
