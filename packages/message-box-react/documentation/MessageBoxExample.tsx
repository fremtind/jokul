import React, { useState } from "react";
import { NavLink } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "../../../doc-utils";
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
            dismissed={dismissed}
            dismissAction={dismissAction}
        >
            Hei, jeg er en melding av typen {choiceValues ? choiceValues["Type"] : "ʕ•ᴥ•ʔ"} med{" "}
            <NavLink href="/">en navlink</NavLink>
        </C>
    );
};
