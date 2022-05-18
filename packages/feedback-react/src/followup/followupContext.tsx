import { WithChildren } from "@fremtind/jkl-core";
import React, { createContext, useContext } from "react";
import { FollowupState } from "../types";

const followUpContext = createContext<FollowupState | undefined>(undefined);

export const useFollowUpContext = (): FollowupState | undefined => useContext(followUpContext);

interface FollowupContextProviderProps extends WithChildren {
    state: FollowupState;
}

export const FollowUpProvider: React.FC<FollowupContextProviderProps> = ({ state, children }) => (
    <followUpContext.Provider value={state}>{children}</followUpContext.Provider>
);
