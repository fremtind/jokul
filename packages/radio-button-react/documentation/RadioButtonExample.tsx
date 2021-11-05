import React, { VFC } from "react";
import { LabelVariant } from "@fremtind/jkl-core";
import { ExampleComponentProps } from "../../../doc-utils";
import { RadioButtons } from "../src";

export const RadioButtonExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const choices = [
        "Jeg vil at dere skal ringe meg",
        "Nei",
        "Jeg vil at dere sender et brev til meg til min registrerte adresse fra folkeregisteret",
        "Jeg vil at dere skal sende en e-post",
    ];
    const [selectedValue, setSelectedValue] = React.useState("Yes");
    const errorLabel = boolValues && boolValues["Med feil"] ? "Her er det noe feil" : undefined;
    const variant = choiceValues && choiceValues["Variant"] ? (choiceValues["Variant"] as LabelVariant) : "medium";

    return (
        <RadioButtons
            legend="Hvordan vil du bli kontaktet?"
            name="likesradiobuttons"
            choices={choices}
            inline={boolValues && boolValues["Inline"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            selectedValue={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
            helpLabel="Hvis du trenger hjelp, kan du kontakte supporten vår"
            errorLabel={errorLabel}
            variant={variant}
            inverted={boolValues && boolValues["Invertert"]}
        />
    );
};
