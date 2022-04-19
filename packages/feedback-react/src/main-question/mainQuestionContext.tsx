import React, { createContext, ReactNode, useContext } from "react";
import { FeedbackState } from "../types";

const mainQuestionContext = createContext<FeedbackState | undefined>(undefined);

export const useMainQuestionContext = (): FeedbackState | undefined => useContext(mainQuestionContext);

interface Props {
    state: FeedbackState;
    children?: ReactNode;
}

export const MainQuestionContextProvider: React.FC<Props> = ({ state, children }) => (
    <mainQuestionContext.Provider value={state}>{children}</mainQuestionContext.Provider>
);
