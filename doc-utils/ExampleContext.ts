import { ReactNode, createContext } from "react";

interface ContextProps {
    registerKnobs?: (arg0: ReactNode[]) => void;
    darkMode?: boolean;
    isCompact?: boolean;
}

export const ExampleContext = createContext<ContextProps>({});
