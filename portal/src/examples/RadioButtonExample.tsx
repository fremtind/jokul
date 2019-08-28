import React from "react";
import { Example } from "../components";
import { RadioButtonChoice } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";
// @ts-ignore
import radioButtonType from "!raw-loader!@fremtind/jkl-radio-button-react/build/RadioButton.d.ts";
// @ts-ignore
import radioButtonChoiceType from "!raw-loader!@fremtind/jkl-radio-button-react/build/RadioButtonChoice.d.ts";

const example = `() => {
    const [selectedValue, setSelectedValue] = React.useState("No");
    return (
        <RadioButtonChoice
            legend="Do you like radio buttons?"
            name="likesradiobuttons"
            choices={["Yes", "No", "I don't know"]}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            helpLabel="Choose wisely"
            errorLabel={selectedValue === "No" ? "Oh no!" : undefined }
        />
    );
};`;

const exampleImport = `import { RadioButtonChoice } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";`;

const RadioButtonExample = () => (
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

export default RadioButtonExample;
