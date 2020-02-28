import React from "react";
import { Checkbox } from "../src";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

interface Props {
    boolValues: { [key: string]: boolean };
}

const Example = ({ boolValues }: Props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox
            name="checklist"
            value="checkbox"
            checked={checked}
            invalid={boolValues["Med feil"]}
            forceCompact={boolValues["Kompakt"]}
            onChange={() => setChecked(!checked)}
        >
            Jeg vil bli kontaktet via epost
        </Checkbox>
    );
};

export default Example;
