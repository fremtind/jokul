import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { useState } from "react";
import { NavLink } from "../../link/NavLink.js";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../Message.js";

export const messageExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Full width", "Dismissable", "No title"],
    choiceProps: [
        {
            name: "Variant",
            values: ["Info", "Success", "Warning", "Error"],
            defaultValue: 0,
        },
    ],
};

const getTypeOfBox = (typeofBox?: string) => {
    switch (typeofBox) {
        case "Info":
            return InfoMessage;
        case "Success":
            return SuccessMessage;
        case "Warning":
            return WarningMessage;
        case "Error":
            return ErrorMessage;
        default:
            return InfoMessage;
    }
};

export const MessageExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [dismissed, setDismissed] = useState(false);
    const C = getTypeOfBox(choiceValues?.["Variant"]);
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
        <C
            fullWidth={boolValues?.["Full width"]}
            title={!boolValues?.["No title"] ? choiceValues?.["Variant"] : undefined}
            dismissed={dismissed}
            dismissAction={dismissAction}
            // Role beregnes vanligvis av komponenten, men er overstyrt her i eksempelet for å unngå at beskjeden leses opp utenfor konteksten av eksempelet.
            role="none presentation"
        >
            <p>
                Hei, jeg er en melding av typen {choiceValues?.["Variant"]} med{" "}
                <NavLink href="/komponenter/Message">en navlink</NavLink>
            </p>
        </C>
    );
};
