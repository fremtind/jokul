import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { SystemMessage } from "../src";
import { messageTypes } from "../src/common/types.d";

interface Types {
    [key: string]: messageTypes;
}

const types: Types = {
    Infomelding: "info",
    Suksessmelding: "success",
    Advarselsmelding: "warning",
    Feilmelding: "error",
};

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    if (!choiceValues) {
        return null;
    }

    return (
        <>
            <SystemMessage
                inverted={boolValues && boolValues["Invertert"]}
                messageType={choiceValues && types[choiceValues["Type"]]}
            >
                Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
            </SystemMessage>
        </>
    );
};

export default Example;
