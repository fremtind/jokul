import { NavLink } from "@fremtind/jkl-core";
import React, { useState } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

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

export const messageExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Variant"] : "");
    return `
<${C.displayName}${
        !boolValues?.["No title"]
            ? ""
            : `
    title="${choiceValues?.["Variant"]}`
    }
    fullWidth={${boolValues?.["Full width"]}}
    dismissed={false}${
        boolValues?.["Dismissable"]
            ? `
    dismissAction={{
        handleDismiss: () => setDismissed(true),
        buttonTitle: "Merk som lest",
    }}`
            : ""
    }
/>
`;
};
