import React, { createContext, useContext } from "react";
import type {
    ColorScheme,
    Size,
    WithChildren,
} from "../../packages/jokul/src/core/types.js";

type ExampleContext = {
    size: Size;
    theme: ColorScheme;
};

const exampleContext = createContext<ExampleContext>({
    size: "medium",
    theme: "light",
});

export const useExampleContext = (): ExampleContext =>
    useContext(exampleContext);

interface Props extends WithChildren {
    state: ExampleContext;
}

export const ExampleContextProvider: React.FC<Props> = ({
    state,
    children,
}) => (
    <exampleContext.Provider value={state}>{children}</exampleContext.Provider>
);
