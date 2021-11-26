import React, { VFC, useState } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Slider } from "../src";
import { LabelVariant } from "@fremtind/jkl-core";

export const SliderExample: VFC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const variant = choiceValues?.["Etikettvariant"] as LabelVariant;
    const errorLabel = boolValues?.["Med feil"] ? "Du må velge en verdi, høyere tall er mer fornøyd" : undefined;
    const helpLabel = boolValues?.["Med hjelpetekst"] ? "1 betyr veldig misførnøyd, 5 betyr veldig fornøyd" : undefined;

    const [value, setValue] = useState<number>();

    return (
        <Slider
            variant={variant}
            label="På en skala fra 1 til 5, hvor fornøyd er du med løsningen?"
            name="fornøyd"
            value={value}
            onChange={(e) => setValue(Number.parseInt(e.target.value))}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
        />
    );
};

export const sliderExampleCode: CodeExample = ({ choiceValues, boolValues }) => `
<Slider
    variant="${choiceValues?.["Etikettvariant"]}"
    label="På en skala fra 1 til 5, hvor fornøyd er du med løsningen?"
    name="fornøyd"
    value={value}
    onChange={(e) => setValue(Number.parseInt(e.target.value))}
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"1 betyr veldig misførnøyd, 5 betyr veldig fornøyd"` : `{undefined}`}
    errorLabel=${boolValues?.["Med feil"] ? `"Du må velge en verdi, høyere tall er mer fornøyd"` : `{undefined}`}
/>
`;
