import React from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { RadioButtons } from "../src";

const Example = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const choices = ["Yes", "No", "I don't know"];
    const [selectedValue, setSelectedValue] = React.useState("Yes");
    const errorLabel = boolValues && boolValues["Med feil"] ? "Her er det noe feil" : undefined;
    const variant = choiceValues && choiceValues["Variant"] ? (choiceValues["Variant"] as LabelVariant) : "medium";

    return (
        <RadioButtons
            legend="Do you like radio buttons?"
            name="likesradiobuttons"
            choices={choices}
            inline={boolValues && boolValues["Inline"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            helpLabel="Who dosent like radio buttons?"
            errorLabel={errorLabel}
            variant={variant}
            inverted={boolValues && boolValues["Invertert"]}
        />
    );
};

export default Example;
