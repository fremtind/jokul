import type React from "react";
import { createContext, useContext } from "react";
import type { WithChildren } from "../../../core/types.js";
import type { FollowupState } from "../types.js";

const followUpContext = createContext<FollowupState | undefined>(undefined);

export const useFollowUpContext = (): FollowupState | undefined =>
    useContext(followUpContext);

interface FollowupContextProviderProps extends WithChildren {
    state: FollowupState;
}

export const FollowUpProvider: React.FC<FollowupContextProviderProps> = ({
    state,
    children,
}) => (
    <followUpContext.Provider value={state}>
        {children}
    </followUpContext.Provider>
);
