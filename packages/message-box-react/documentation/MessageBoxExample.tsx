import React, { useState } from "react";
import { NavLink } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "../../../doc-utils";
import { ErrorMessageBox, InfoMessageBox, SuccessMessageBox, WarningMessageBox } from "../src";

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Infomelding":
            return InfoMessageBox;
        case "Suksessmelding":
            return SuccessMessageBox;
        case "Advarselsmelding":
            return WarningMessageBox;
        case "Feilmelding":
            return ErrorMessageBox;
        default:
            return InfoMessageBox;
    }
};

export const MessageBoxExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [dismissed, setDismissed] = useState(false);
    const C = getTypeOfBox(choiceValues?.["Type"]);
    const dismissAction = boolValues?.["Avvisbar"]
        ? {
              handleDismiss: () => {
                  setDismissed(true);
                  setTimeout(() => setDismissed(false), 2600);
              },
              buttonTitle: "Merk som lest",
          }
        : undefined;
    return (
        <C
            fullWidth={boolValues?.["Full bredde"]}
            title={choiceValues?.["Type"]}
            dismissed={dismissed}
            dismissAction={dismissAction}
        >
            Hei, jeg er en melding av typen {choiceValues?.["Type"]} med <NavLink href="/">en navlink</NavLink>
        </C>
    );
};

export const messageBoxExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Type"] : "");
    return `
<${C.displayName}
    title="${choiceValues?.["Type"]}"
    fullWidth={${boolValues?.["Full bredde"]}}
    dismissed={false}
    dismissAction={${
        boolValues?.["Avvisbar"]
            ? `{
        handleDismiss: () => setDismissed(true),
        buttonTitle: "Merk som lest",
    }`
            : undefined
    }}
/>
`;
};
