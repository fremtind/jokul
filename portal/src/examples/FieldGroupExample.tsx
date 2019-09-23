import React from "react";
import { Example } from "../components";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-field-group/field-group.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-field-group-react/build/FieldGroup.d.ts";

const example = `() => {
    const [choices, setChoices] = React.useState([]);
    const handleChange = (_, value, checked) => {
        checked
            ? setChoices([...choices, value])
            : setChoices(choices.filter((c) => c !== value));
    };
    return (
        <FieldGroup
            legend="Jeg vil bli kontaktet via"
            errorLabel={!choices.length && "Velg minst én kontaktmetode"}
        >
            <Checkbox name="kontaktmetoder" value="epost" onChange={handleChange}>
                E-post
            </Checkbox>
            <Checkbox name="kontaktmetoder" value="sms" onChange={handleChange}>
                Tekstmelding
            </Checkbox>
            <Checkbox name="kontaktmetoder" value="telefon" onChange={handleChange}>
                Telefon
            </Checkbox>
        </FieldGroup>
    );
}`;

const exampleImport = `import { FieldGroup } from "@fremtind/jkl-field-group-react;
import "@fremtind/jkl-field-group/field-group.min.css;`;

const FieldGroupExample = () => (
    <Example
        exampleComponents={{ FieldGroup, Checkbox }}
        exampleCode={example}
        exampleImport={exampleImport}
        type={type}
    />
);

export default FieldGroupExample;
