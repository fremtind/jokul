import { SupportLabel } from "@fremtind/jkl-input-group-react";
import { useId } from "@fremtind/jkl-react-hooks";
import React, { FC } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { Checkbox } from "../src";

export const singleCheckboxExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil"],
};

export const SingleCheckboxExample: FC<ExampleComponentProps> = ({
    boolValues,
}) => {
    const labelId = useId();
    const [checked, setChecked] = React.useState(false);

    const helpText = boolValues?.["Med hjelpetekst"];
    const error = boolValues?.["Med feil"];

    let label: string | undefined = undefined;
    if (helpText) {
        label = "Vedlegget har viktig informasjon om forsikringen din";
    }
    if (error) {
        label =
            "Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din.";
    }

    return (
        <div>
            <Checkbox
                aria-describedby={labelId}
                name="confirmation"
                value="read"
                checked={checked}
                invalid={error}
                onChange={() => setChecked(!checked)}
            >
                Jeg har lest vedlegget
            </Checkbox>
            <SupportLabel
                id={labelId}
                label={label}
                labelType={error ? "error" : "help"}
            />
        </div>
    );
};

export const singleCheckboxExampleCode: CodeExample = ({
    boolValues,
    choiceValues,
}) => {
    return `
<div>
  <Checkbox
    aria-describedby="label-id"
    name="confirmation"
    value="read"
    invalid={error}
  >
    Telefon
  </Checkbox>
  <SupportLabel
    id="label-id"
    label={label}
    labelType={error ? "error" : "help"}
  />
</div>
`;
};
