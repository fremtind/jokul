import { FieldGroup } from "@fremtind/jkl-field-group-react";
import React, { VFC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Checkbox } from "../src";

export const CheckboxExample: VFC<ExampleComponentProps> = ({ boolValues }) => {
    const [phone, setPhone] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [snailMail, setSnailMail] = React.useState(false);

    const helpText = boolValues?.["Med hjelpetekst"];
    const invalid = boolValues?.["Med feil"];
    const inverted = boolValues?.["Invertert"];
    const forceCompact = boolValues?.["Kompakt"];

    return (
        <FieldGroup
            legend="Hvordan kan vi kontakte deg?"
            labelProps={{ variant: forceCompact ? "small" : "medium" }}
            helpLabel={helpText ? "Vi sender viktige beskjeder til deg med de valgte metodene" : undefined}
            errorLabel={invalid ? "Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder" : undefined}
        >
            <Checkbox
                name="checklist"
                value="phone"
                checked={phone}
                invalid={invalid}
                inverted={inverted}
                forceCompact={forceCompact}
                onChange={() => setPhone(!phone)}
            >
                Telefon
            </Checkbox>
            <Checkbox
                name="checklist"
                value="email"
                checked={email}
                invalid={invalid}
                inverted={inverted}
                forceCompact={forceCompact}
                onChange={() => setEmail(!email)}
            >
                E-post
            </Checkbox>
            <Checkbox
                name="checklist"
                value="snailmail"
                checked={snailMail}
                invalid={invalid}
                inverted={inverted}
                forceCompact={forceCompact}
                onChange={() => setSnailMail(!snailMail)}
            >
                Brev
            </Checkbox>
        </FieldGroup>
    );
};

export const checkboxExampleCode: CodeExample = ({ boolValues }) => {
    const helpText = boolValues?.["Med hjelpetekst"];
    const invalid = boolValues?.["Med feil"];
    const inverted = boolValues?.["Invertert"];
    const forceCompact = boolValues?.["Kompakt"];

    return `
<FieldGroup
    legend="Hvordan kan vi kontakte deg?"
    labelProps={{ variant: "${forceCompact ? "small" : "medium"}" }}
    helpLabel=${helpText ? `"Vi sender viktige beskjeder til deg med de valgte metodene"` : "{undefined}"}
    errorLabel=${invalid ? `"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"` : "{undefined}"}
>
    <Checkbox
        name="checklist"
        value="phone"
        invalid={${invalid}}
        inverted={${inverted}}
        forceCompact={${forceCompact}}
    >
        Telefon
    </Checkbox>
    <Checkbox
        name="checklist"
        value="email"
        invalid={${invalid}}
        inverted={${inverted}}
        forceCompact={${forceCompact}}
    >
        E-post
    </Checkbox>
    <Checkbox
        name="checklist"
        value="snailmail"
        invalid={${invalid}}
        inverted={${inverted}}
        forceCompact={${forceCompact}}
    >
        Brev
    </Checkbox>
</FieldGroup>
`;
};
