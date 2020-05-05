import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const types = {
        Infomelding: InfoMessage,
        Suksessmelding: SuccessMessage,
        Advarselsmelding: WarningMessage,
        Feilmelding: ErrorMessage,
    };

    //@ts-ignore
    const C = types[choiceValues["Type"]] || InfoMessage;
    return (
        <C
            fullWidth={boolValues && boolValues["Full bredde"]}
            title={choiceValues && choiceValues["Type"]}
            inverted={boolValues && boolValues["Invertert"]}
        >
            Hei, jeg er en melding av typen {choiceValues ? choiceValues["Type"] : "ʕ•ᴥ•ʔ"}
        </C>
    );
};

export default Example;
