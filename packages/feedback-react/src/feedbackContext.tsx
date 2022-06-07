import { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useContext, FC } from "react";

interface FeedbackContext {
    feedbackSubmitted: boolean;
    followupStarted: boolean;
    followupSubmitted: boolean;
    contactSubmitted: boolean;
    maxLength?: number;
    setFeedbackSubmitted: (state: boolean) => void;
    setFollowupStarted: (state: boolean) => void;
    setFollowupSubmitted: (state: boolean) => void;
    setContactSubmitted: (state: boolean) => void;
}

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

export const useFeedbackContext = (): FeedbackContext => useContext(feedbackContext);

interface FeedbackContextProviderProps extends WithChildren {
    value: FeedbackContext;
}

export const FeedbackContextProvider: FC<FeedbackContextProviderProps> = ({ value, children }) => (
    <feedbackContext.Provider value={value}>{children}</feedbackContext.Provider>
);
