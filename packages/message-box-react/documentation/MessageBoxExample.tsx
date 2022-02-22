import React, { useState } from "react";
import { NavLink } from "@fremtind/jkl-core";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { ErrorMessageBox, InfoMessageBox, SuccessMessageBox, WarningMessageBox } from "../src";

export const messageBoxExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Full width", "Compact", "Dismissable", "No title"],
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
            return InfoMessageBox;
        case "Success":
            return SuccessMessageBox;
        case "Warning":
            return WarningMessageBox;
        case "Error":
            return ErrorMessageBox;
        default:
            return InfoMessageBox;
    }
};

export const MessageBoxExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
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
            forceCompact={boolValues?.["Compact"]}
            fullWidth={boolValues?.["Full width"]}
            title={!boolValues?.["No title"] ? choiceValues?.["Variant"] : undefined}
            dismissed={dismissed}
            dismissAction={dismissAction}
        >
            <p className={boolValues?.["Compact"] ? "jkl-small" : "jkl-body"}>
                Hei, jeg er en melding av typen {choiceValues?.["Variant"]} med{" "}
                <NavLink href="/komponenter/messagebox">en navlink</NavLink>
            </p>
        </C>
    );
};

export const messageBoxExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps): string => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Variant"] : "");
    return `
<${C.displayName}${
        !boolValues?.["No title"]
            ? ""
            : `
    title="${choiceValues?.["Variant"]}`
    }
    forceCompact={${boolValues?.["Compact"]}}
    fullWidth={${boolValues?.["Full width"]}}
    dismissed={false}
    dismissAction={${
        boolValues?.["Dismissable"]
            ? `{
        handleDismiss: () => setDismissed(true),
        buttonTitle: "Merk som lest",
    }`
            : undefined
    }}
/>
`;
};
