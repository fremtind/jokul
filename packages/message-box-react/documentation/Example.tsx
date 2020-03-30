import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";


export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
//export function Example({ boolValues, choiceValues }: ExampleComponentProps) {
    const types = {
        Infomelding: InfoMessage,
        Suksessmelding: SuccessMessage,
        Advarselsmelding: WarningMessage,
        Feilmelding: ErrorMessage,
    };

    //@ts-ignore
    const C = types[choiceValues["Type"]] || InfoMessage;
    return (
        <C fullWidth={boolValues && boolValues["Full bredde"]} title={choiceValues && choiceValues["Type"]} inverted={boolValues && boolValues["Invertert"]}>
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </C>
    );
}

export default Example;
