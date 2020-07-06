import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Checkbox } from "../src";

export const Example = ({ boolValues }: ExampleComponentProps) => {
    const [checked, setChecked] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    return (
        <div>
            <Checkbox
                name="checklist"
                value="checkbox"
                checked={checked}
                invalid={boolValues && boolValues["Med feil"]}
                inverted={boolValues && boolValues["Invertert"]}
                forceCompact={boolValues && boolValues["Kompakt"]}
                onChange={() => setChecked(!checked)}
            >
                Jeg vil bli kontaktet via telefon, i tillegg til at jeg vil motta brev på posten
            </Checkbox>
            <Checkbox
                name="checklist"
                value="checkbox2"
                checked={checked2}
                invalid={boolValues && boolValues["Med feil"]}
                inverted={boolValues && boolValues["Invertert"]}
                forceCompact={boolValues && boolValues["Kompakt"]}
                onChange={() => setChecked2(!checked2)}
            >
                Jeg vil bli kontaktet via epost
            </Checkbox>
        </div>
    );
};

export default Example;
