import React, { createContext, useContext } from "react";
import { FeedbackState } from "../types";

const mainQuestionContext = createContext<FeedbackState | undefined>(undefined);

export const useMainQuestionContext = () => useContext(mainQuestionContext);

interface Props {
    state: FeedbackState;
}

export const MainQuestionContextProvider: React.FC<Props> = ({ state, children }) => (
    <mainQuestionContext.Provider value={state}>{children}</mainQuestionContext.Provider>
);
