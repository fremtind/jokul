import React from "react";
import { Example } from "../components";
import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import { SecondaryButton } from "@fremtind/jkl-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";

import radioButtonOptionType from "!raw-loader!@fremtind/jkl-radio-button-react/build/RadioButtonOption.d.ts";
import RadioButtonsType from "!raw-loader!@fremtind/jkl-radio-button-react/build/RadioButtons.d.ts";

const example = `() => {
  const [selectedValue, setSelectedValue] = React.useState("No");
  const [selectedValue2, setSelectedValue2] = React.useState("");

  return (
    <>
      <RadioButtons
        legend="Do you like radio buttons?"
        name="likesradiobuttons"
        choices={["Yes", "No", "I don't know"]}
        selectedValue={selectedValue}
        onChange={e => setSelectedValue(e.target.value)}
      />
      <RadioButtons
        legend="Liker du radioknapper"
        name="likesradiobuttons2"
        choices={["Ja", "Nei", "Vet ikke"]}
        selectedValue={selectedValue2}
        onChange={e => setSelectedValue2(e.target.value)}
        helpLabel="Velg med omhu"
        errorLabel={selectedValue2 === "" && "Du må velge"}
        inline={false}
      />
      <SecondaryButton
        onClick={() => {
          setSelectedValue("No");
          setSelectedValue2("");
        }}
      >
        Reset
      </SecondaryButton>
    </>
  );
};
`;

const exampleImport = `import { RadioButtons } from "@fremtind/jkl-radio-button-react";
import "@fremtind/jkl-radio-button/radio-button.min.css";`;

const RadioButtonExample = () => (
    <Example
        exampleComponents={{ RadioButtons, SecondaryButton }}
        exampleCode={example}
        types={[
            { name: "RadioButtonOption", type: radioButtonOptionType },
            { name: "RadioButtons", type: RadioButtonsType },
        ]}
        exampleImport={exampleImport}
    />
);

export default RadioButtonExample;
