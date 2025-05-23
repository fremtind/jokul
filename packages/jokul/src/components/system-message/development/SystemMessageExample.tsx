import React, { useState } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { NavLink } from "../../nav-link/NavLink.js";
import {
    ErrorSystemMessage,
    InfoSystemMessage,
    SuccessSystemMessage,
    WarningSystemMessage,
} from "../SystemMessage.js";

export const systemMessageKnobs: ExampleKnobsProps = {
    boolProps: ["Dismissable"],
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
            return InfoSystemMessage;
        case "Success":
            return SuccessSystemMessage;
        case "Warning":
            return WarningSystemMessage;
        case "Error":
            return ErrorSystemMessage;
        default:
            return InfoSystemMessage;
    }
};

export const SystemMessageExample: React.FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const C = getTypeOfBox(choiceValues ? choiceValues["Variant"] : "");
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
        // biome-ignore lint/a11y/useValidAriaRole: Role beregnes vanligvis av komponenten, men er overstyrt her i eksempelet for å unngå at beskjeden leses opp utenfor konteksten av eksempelet.
        <C
            dismissed={dismissed}
            dismissAction={dismissAction}
            role="none presentation"
        >
            Hei, jeg er en varslingsmelding av typen{" "}
            {choiceValues ? choiceValues["Variant"] : "ᕙ(⇀‸↼‶)ᕗ"} med{" "}
            <NavLink href="/komponenter/systemmessage">en navlink</NavLink>
        </C>
    );
};
