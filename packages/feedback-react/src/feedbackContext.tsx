import React, { ReactNode, createContext, useContext } from "react";

interface FeedbackContext {
    feedbackSubmitted: boolean;
    followupStarted: boolean;
    followupSubmitted: boolean;
    contactSubmitted: boolean;
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

export const useFeedbackContext = () => useContext(feedbackContext);

interface Props {
    children?: ReactNode;
    value: FeedbackContext;
}

export const FeedbackContextProvider = ({ value, children }: Props) => (
    <feedbackContext.Provider value={value}>{children}</feedbackContext.Provider>
);
