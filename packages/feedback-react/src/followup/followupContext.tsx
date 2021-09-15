import React, { createContext, useContext } from "react";
import { FollowupState } from "../types";

const followUpContext = createContext<FollowupState | undefined>(undefined);

export const useFollowUpContext = () => useContext(followUpContext);

export const FollowUpProvider: React.FC<{ state: FollowupState }> = ({ state, children }) => (
    <followUpContext.Provider value={state}>{children}</followUpContext.Provider>
);
