import React, { createContext, ReactNode, useContext } from "react";
import { FollowupState } from "../types";

const followUpContext = createContext<FollowupState | undefined>(undefined);

export const useFollowUpContext = (): FollowupState | undefined => useContext(followUpContext);

interface FollowupContextProviderProps {
    state: FollowupState;
    children?: ReactNode;
}

export const FollowUpProvider: React.FC<FollowupContextProviderProps> = ({ state, children }) => (
    <followUpContext.Provider value={state}>{children}</followUpContext.Provider>
);
