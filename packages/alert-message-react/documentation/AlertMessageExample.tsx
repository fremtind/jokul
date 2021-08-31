import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage } from "../src";

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Infomelding":
            return InfoAlertMessage;
        case "Suksessmelding":
            return SuccessAlertMessage;
        case "Advarselmelding":
            return WarningAlertMessage;
        case "Feilmelding":
            return ErrorAlertMessage;
        default:
            return InfoAlertMessage;
    }
};

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Type"] : "");
    const [dismissed, setDismissed] = useState(false);
    const dismissAction =
        boolValues && boolValues["Avvisbar"]
            ? {
                  handleDismiss: () => setDismissed(true),
                  buttonTitle: "Merk som lest",
              }
            : undefined;

    return (
        <C inverted={boolValues && boolValues["Invertert"]} dismissed={dismissed} dismissAction={dismissAction}>
            Hei, jeg er en varslingsmelding av typen {choiceValues ? choiceValues["Type"] : "ᕙ(⇀‸↼‶)ᕗ"}
        </C>
    );
};

export default Example;
