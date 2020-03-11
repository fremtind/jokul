import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Checkbox } from "../src";

export const Example = ({ boolValues }: ExampleComponentProps) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox
            name="checklist"
            value="checkbox"
            checked={checked}
            invalid={boolValues && boolValues["Med feil"]}
            forceCompact={boolValues && boolValues["Kompakt"]}
            onChange={() => setChecked(!checked)}
        >
            Jeg vil bli kontaktet via epost
        </Checkbox>
    );
};

export default Example;
