import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage } from "../src";

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Infomelding":
            return InfoAlertMessage;
        case "Suksessmelding":
            return SuccessAlertMessage;
        case "Advarselsmelding":
            return WarningAlertMessage;
        case "Feilmelding":
            return ErrorAlertMessage;
        default:
            return InfoAlertMessage;
    }
};

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Type"] : "");

    return (
        <C inverted={boolValues && boolValues["Invertert"]}>
            Hei, jeg er en varslingsmelding av typen {choiceValues ? choiceValues["Type"] : "ᕙ(⇀‸↼‶)ᕗ"}
        </C>
    );
};

export default Example;
