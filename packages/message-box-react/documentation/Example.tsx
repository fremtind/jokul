import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Infomelding":
            return InfoMessage;
        case "Suksessmelding":
            return SuccessMessage;
        case "Advarselsmelding":
            return WarningMessage;
        case "Feilmelding":
            return ErrorMessage;
        default:
            return InfoMessage;
    }
};

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [dismissed, setDismissed] = useState(false);
    const C = getTypeOfBox(choiceValues ? choiceValues["Type"] : "");
    const dismissAction =
        boolValues && boolValues["Avvisbar"]
            ? {
                  handleDismiss: () => setDismissed(true),
                  buttonTitle: "Merk som lest",
              }
            : undefined;
    return (
        <C
            fullWidth={boolValues && boolValues["Full bredde"]}
            title={choiceValues && choiceValues["Type"]}
            inverted={boolValues && boolValues["Invertert"]}
            dismissed={dismissed}
            dismissAction={dismissAction}
        >
            Hei, jeg er en melding av typen {choiceValues ? choiceValues["Type"] : "ʕ•ᴥ•ʔ"}
        </C>
    );
};

export default Example;
