import type {
    ColorScheme,
    Density,
} from "../../packages/jokul/src/core/types.js";

export { ComponentExample } from "./ComponentExample.js";
export { DevExample } from "./DevExample.js";
export { useExampleContext } from "./exampleContext.js";

export interface Dictionary<T> {
    [key: string]: T;
}

export interface ExampleComponentProps {
    boolValues?: Dictionary<boolean>;
    choiceValues?: Dictionary<string>;
    displayValues?: DisplayValues;
}

export interface DisplayValues {
    density: Density;
    theme: ColorScheme;
}

export interface ChoiceProp {
    name: string;
    values: Array<string>;
    defaultValue: number;
}

export type BoolProp = string | { prop: string; defaultValue: boolean };

export interface ExampleKnobsProps {
    boolProps?: Array<BoolProp>;
    choiceProps?: Array<ChoiceProp>;
}

/**
 * Nye kodeeksempler skal være "live", altså funksjonsvarianten som tar inn ExampleComponentProps.
 */
export type CodeExample =
    | ((exampleComponentProps: ExampleComponentProps) => string)
    | string;
