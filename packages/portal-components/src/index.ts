export { ComponentExample } from "./ComponentExample";

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
