import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage } from "../src";

const types = {
    Infomelding: InfoAlertMessage,
    Suksessmelding: SuccessAlertMessage,
    Advarselmelding: WarningAlertMessage,
    Feilmelding: ErrorAlertMessage,
};

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    //@ts-ignore
    const C = types[choiceValues["Type"]] || InfoAlertMessage;

    return (
        <C inverted={boolValues && boolValues["Invertert"]}>
            Hei, jeg er en varslingsmelding av typen {choiceValues ? choiceValues["Type"] : "ᕙ(⇀‸↼‶)ᕗ"}
        </C>
    );
};

export default Example;
