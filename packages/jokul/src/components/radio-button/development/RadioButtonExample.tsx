import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import type { LabelVariant } from "../../input-group/types.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { RadioButton } from "../RadioButton.js";
import { RadioButtonGroup } from "../RadioButtonGroup.js";

export const radioButtonExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 1,
        },
    ],
};

export const RadioButtonExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const choices = [
        "Send en e-post",
        "Ring meg",
        "Send et brev til folkeregistrert adresse",
    ];
    const [selectedValue, setSelectedValue] = React.useState("Yes");

    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Ved å velge e-post får du beskjed raskest mulig"
        : undefined;
    const errorLabel = boolValues?.["Med feil"]
        ? "Du må velge hvordan du vil bli kontaktet. Ved å velge e-post får du beskjed raskest mulig."
        : undefined;
    const variant = choiceValues?.["Variant"]
        ? (choiceValues["Variant"] as LabelVariant)
        : "medium";

    const tooltip = boolValues?.["Med tooltip"] ? (
        <PopupTip
            content={
                "Dette burde kanskje vært en FieldGroup med Checkbox, og ikke en RadioButtonGroup? 🤔"
            }
        />
    ) : undefined;

    return (
        <RadioButtonGroup
            legend="Hvordan vil du bli kontaktet?"
            name="kontaktmetode"
            labelProps={{ variant }}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            tooltip={tooltip}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
        >
            {choices.map((value) => (
                <RadioButton key={value} value={value}>
                    {value}
                </RadioButton>
            ))}
        </RadioButtonGroup>
    );
};
