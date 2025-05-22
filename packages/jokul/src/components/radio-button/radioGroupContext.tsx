import React, { createContext, useContext, type ChangeEventHandler } from "react";
import type { Density, WithChildren } from "../../core/types.js";

type RadioGroupContext = {
    name: string | undefined;
    value: string | undefined;
    inline: boolean;
    density?: Density;
    invalid: boolean;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};

const radioGroupContext = createContext<RadioGroupContext>({
    name: undefined,
    value: undefined,
    onChange: () => {
        return;
    },
    inline: false,
    density: undefined,
    invalid: false,
});

export const useRadioGroupContext = (): RadioGroupContext =>
    useContext(radioGroupContext);

interface Props extends WithChildren {
    state: RadioGroupContext;
}

export const RadioGroupContextProvider: React.FC<Props> = ({
    state,
    children,
}) => (
    <radioGroupContext.Provider value={state}>
        {children}
    </radioGroupContext.Provider>
);
