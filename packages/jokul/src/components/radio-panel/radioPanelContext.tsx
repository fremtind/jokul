import { createContext } from "react";

type Context = {
    checkedValue?: string;
    onValueChange?: (value: string) => void;
};

export const context = createContext<Context>({});
