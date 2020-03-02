import React from "react";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-message-box/message-box.scss";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

interface Props {
    boolValues: { [key: string]: boolean };
    choiceValues: { [key: string]: string };
}

export function Example({ boolValues, choiceValues }: Props) {
    const types = {
        Infomelding: InfoMessage,
        Suksessmelding: SuccessMessage,
        Advarselsmelding: WarningMessage,
        Feilmelding: ErrorMessage,
    };

    console.log(choiceValues["Type"]);

    //@ts-ignore
    const C = types[choiceValues["Type"]] || InfoMessage;
    return (
        <C fullWidth={boolValues["Full bredde"]} title={choiceValues["Type"]}>
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </C>
    );
}

export default Example;
