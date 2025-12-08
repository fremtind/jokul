import type React from "react";
import { useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Link } from "../../link/Link.js";
import {
    ErrorMessage,
    InfoMessage,
    SuccessMessage,
    WarningMessage,
} from "../Message.js";

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

export const MessageExample: React.FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
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
        // biome-ignore lint/a11y/useValidAriaRole: Role beregnes vanligvis av komponenten, men er overstyrt her i eksempelet for å unngå at beskjeden leses opp utenfor konteksten av eksempelet.
        <C
            role="none presentation"
            fullWidth={boolValues?.["Full width"]}
            title={
                !boolValues?.["No title"]
                    ? choiceValues?.["Variant"]
                    : undefined
            }
            dismissed={dismissed}
            dismissAction={dismissAction}
        >
            <p>
                Hei, jeg er en melding av typen {choiceValues?.["Variant"]} med{" "}
                <Link href="/komponenter/Message">en lenke</Link>
            </p>
        </C>
    );
};
