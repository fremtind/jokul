import React, { useState } from "react";
import { NavLink } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "../../../doc-utils";
import { InfoAlertMessage, WarningAlertMessage, ErrorAlertMessage, SuccessAlertMessage } from "../src";

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Info":
            return InfoAlertMessage;
        case "Success":
            return SuccessAlertMessage;
        case "Warning":
            return WarningAlertMessage;
        case "Error":
            return ErrorAlertMessage;
        default:
            return InfoAlertMessage;
    }
};

export const AlertMessageExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Type"] : "");
    const [dismissed, setDismissed] = useState(false);
    const dismissAction = boolValues?.["Dismissable"]
        ? {
              handleDismiss: () => {
                  setDismissed(true);
                  setTimeout(() => setDismissed(false), 2600);
              },
              buttonTitle: "Merk som lest",
          }
        : undefined;

    return (
        <C dismissed={dismissed} dismissAction={dismissAction}>
            Hei, jeg er en varslingsmelding av typen {choiceValues ? choiceValues["Type"] : "ᕙ(⇀‸↼‶)ᕗ"} med{" "}
            <NavLink href="/komponenter/alertmessage">en navlink</NavLink>
        </C>
    );
};

export const alertMessageExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Type"] : "");
    return `
<${C.displayName} dismissed={false} dismissAction={${
        boolValues?.["Dismissable"]
            ? `{
    handleDismiss: () => setDismissed(true),
    buttonTitle: "Merk som lest",
}`
            : undefined
    }}  />
`;
};
