import { type ChangeEventHandler, createContext, useContext } from "react";

export interface InputCardGroupState {
    name?: string;
    value?: string;
    invalid?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const InputCardGroupContext = createContext<InputCardGroupState>({});

export const useInputCardGroupContext = () => useContext(InputCardGroupContext);
