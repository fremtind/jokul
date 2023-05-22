import React, { createContext, useContext } from "react";
import { ColorScheme, Density, WithChildren } from "../packages/core";

type ExampleContext = {
    density: Density;
    theme: ColorScheme;
};

const exampleContext = createContext<ExampleContext>({
    density: "comfortable",
    theme: "light",
});

export const useExampleContext = (): ExampleContext => useContext(exampleContext);

interface Props extends WithChildren {
    state: ExampleContext;
}

export const ExampleContextProvider: React.FC<Props> = ({ state, children }) => (
    <exampleContext.Provider value={state}>{children}</exampleContext.Provider>
);
