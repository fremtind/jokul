import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { MessageBox } from "../src";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const types = {
        Infomelding: "info",
        Suksessmelding: "success",
        Advarselsmelding: "warning",
        Feilmelding: "error",
    };

    return (
        <MessageBox
            title={choiceValues && choiceValues["Type"]}
            fullWidth={boolValues && boolValues["Full bredde"]}
            inverted={boolValues && boolValues["Invertert"]}
            messageType={choiceValues && types[choiceValues["Type"]]}
        >
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </MessageBox>
    );
};

export default Example;
