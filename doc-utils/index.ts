export { ComponentExample } from "./ComponentExample";
export { DevExample } from "./DevExample";
export { ExampleContext } from "./ExampleContext";
export { renderExample } from "./renderExample";

export interface Dictionary<T> {
    [key: string]: T;
}

export interface ExampleComponentProps {
    boolValues?: Dictionary<boolean>;
    choiceValues?: Dictionary<string>;
}

export interface ChoiceProp {
    name: string;
    values: Array<string>;
    defaultValue: number;
}

export type BoolProp = string | { prop: string; defaultValue: boolean };

/**
 * Nye kodeeksempler skal være "live", altså funksjonsvarianten som tar inn ExampleComponentProps.
 */
export type CodeExample = ((exampleComponentProps: ExampleComponentProps) => string) | string;
