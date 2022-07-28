import { FieldGroup } from "@fremtind/jkl-field-group-react";
import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Checkbox } from "../src";

export const checkboxExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Compact", "Med hjelpetekst", "Med feil"],
};

export const CheckboxExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [phone, setPhone] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [snailMail, setSnailMail] = React.useState(false);

    const helpText = boolValues?.["Med hjelpetekst"];
    const invalid = boolValues?.["Med feil"];
    const forceCompact = boolValues?.["Compact"];

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
    const forceCompact = boolValues?.["Compact"];

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
        forceCompact={${forceCompact}}
    >
        Telefon
    </Checkbox>
    <Checkbox
        name="checklist"
        value="email"
        invalid={${invalid}}
        forceCompact={${forceCompact}}
    >
        E-post
    </Checkbox>
    <Checkbox
        name="checklist"
        value="snailmail"
        invalid={${invalid}}
        forceCompact={${forceCompact}}
    >
        Brev
    </Checkbox>
</FieldGroup>
`;
};
