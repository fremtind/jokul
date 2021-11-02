import React, { VFC, useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Slider } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";

export const SliderExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const variant = choiceValues && (choiceValues["Etikettvariant"] as LabelVariant);
    const errorLabel = boolValues && boolValues["Med feil"] ? "Du må velge en verdi" : undefined;
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "1 = veldig misførnøyd, 5 = veldig fornøyd" : undefined;

    const [value, setValue] = useState<number>();

    return (
        <Slider
            variant={variant}
            label="På en skala fra 1 til 5, hvor fornøyd er du med løsningen?"
            name="fornøyd"
            value={value}
            onChange={(e) => setValue(parseInt(e.target.value))}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
        />
    );
};
