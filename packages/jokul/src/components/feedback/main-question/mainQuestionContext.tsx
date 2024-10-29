import React, { createContext, useContext } from "react";
import { WithChildren } from "../../../core/types.js";
import { FeedbackState } from "../types.js";

const mainQuestionContext = createContext<FeedbackState | undefined>(undefined);

export const useMainQuestionContext = (): FeedbackState | undefined =>
    useContext(mainQuestionContext);

interface Props extends WithChildren {
    state: FeedbackState;
}

export const MainQuestionContextProvider: React.FC<Props> = ({
    state,
    children,
}) => (
    <mainQuestionContext.Provider value={state}>
        {children}
    </mainQuestionContext.Provider>
);
