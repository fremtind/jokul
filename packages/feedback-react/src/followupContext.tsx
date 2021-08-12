import React, { createContext, useContext } from "react";
import { FollowupState } from "./types";

const initialValue: FollowupState = {
    handleNext: () => null,
    handleAbort: () => null,
    step: {
        number: 0,
        isLast: false,
        question: {
            label: "",
            options: [],
            type: "text",
        },
    },
    submitted: false,
    values: [],
};

const followUpContext = createContext<FollowupState>(initialValue);

export const useFollowUpContext = () => useContext(followUpContext);

export const FollowUpProvider: React.FC<{ state: FollowupState }> = ({ state, children }) => (
    <followUpContext.Provider value={state}>{children}</followUpContext.Provider>
);
