import React from "react";
import { RadioButtons } from "../src";
import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

interface Props {
    boolValues: { [key: string]: boolean };
    choiceValues: { [key: string]: string };
}

const Example = ({ boolValues, choiceValues }: Props) => {
    const choices = ["Yes", "No", "I don't know"];
    const [selectedValue, setSelectedValue] = React.useState();
    const errorLabel = boolValues && boolValues["Med feil"] ? "Her er det noe feil" : undefined;
    const variant = choiceValues && choiceValues["Variant"] ? choiceValues["Variant"] : "medium";

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
            //@ts-ignore
            variant={variant}
            inverted={boolValues && boolValues["Invertert"]}
        />
    );
};

export default Example;
