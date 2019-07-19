import React from "react";
import { Example } from "../components";
import { RadioButtonChoice } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";
// @ts-ignore
import radioButtonType from "!raw-loader!@fremtind/jkl-radio-button-react/build/RadioButton.d.ts";
// @ts-ignore
import radioButtonChoiceType from "!raw-loader!@fremtind/jkl-radio-button-react/build/RadioButtonChoice.d.ts";

const example = `() => {
    const [selectedValue, setSelectedValue] = React.useState("Yes");
    return (
        <RadioButtonChoice
            legend="Do you like radio buttons?"
            name="likesradiobuttons"
            choices={["Yes", "No", "I don't know"]}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        />
    );
};`;

const exampleImport = `import { RadioButtonChoice } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";`;

export const RadioButtonExample = () => (
    <Example
        exampleComponents={{ RadioButtonChoice }}
        exampleCode={example}
        types={[
            { name: "RadioButton", type: radioButtonType },
            { name: "RadioButtonChoice", type: radioButtonChoiceType },
        ]}
        exampleImport={exampleImport}
    />
);
