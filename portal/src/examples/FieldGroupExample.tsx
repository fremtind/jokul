import React from "react";
import { Example } from "../components";
import { FieldGroup } from "@fremtind/jkl-field-group-react";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import "@fremtind/jkl-field-group/field-group.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
// @ts-ignore
import type from "!raw-loader!@fremtind/jkl-field-group-react/build/FieldGroup.d.ts";

const example = `<FieldGroup standalone legend="Jeg vil bli kontaktet via" errorLabel="Velg hvilke måter vi kan kontakte deg på">
    <Checkbox>E-post</Checkbox>
    <Checkbox>Tekstmelding</Checkbox>
    <Checkbox>Telefon</Checkbox>
</FieldGroup>`;

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
