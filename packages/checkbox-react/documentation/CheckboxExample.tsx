import { FieldGroup } from "@fremtind/jkl-field-group-react";
import React, { FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Checkbox } from "../src";

export const checkboxExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil"],
};

export const CheckboxExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [phone, setPhone] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [snailMail, setSnailMail] = React.useState(false);

    const helpText = boolValues?.["Med hjelpetekst"];
    const invalid = boolValues?.["Med feil"];

    return (
        <FieldGroup
            legend="Hvordan kan vi kontakte deg?"
            helpLabel={helpText ? "Vi sender viktige beskjeder til deg med de valgte metodene" : undefined}
            errorLabel={invalid ? "Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder" : undefined}
        >
            <Checkbox
                name="checklist"
                value="phone"
                checked={phone}
                invalid={invalid}
                onChange={() => setPhone(!phone)}
            >
                Telefon
            </Checkbox>
            <Checkbox
                name="checklist"
                value="email"
                checked={email}
                invalid={invalid}
                onChange={() => setEmail(!email)}
            >
                E-post
            </Checkbox>
            <Checkbox
                name="checklist"
                value="snailmail"
                checked={snailMail}
                invalid={invalid}
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

    return `
<FieldGroup
    legend="Hvordan kan vi kontakte deg?"
    helpLabel=${helpText ? `"Vi sender viktige beskjeder til deg med de valgte metodene"` : "{undefined}"}
    errorLabel=${invalid ? `"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"` : "{undefined}"}
>
    <Checkbox
        name="checklist"
        value="phone"
        invalid={${invalid}}
    >
        Telefon
    </Checkbox>
    <Checkbox
        name="checklist"
        value="email"
        invalid={${invalid}}
    >
        E-post
    </Checkbox>
    <Checkbox
        name="checklist"
        value="snailmail"
        invalid={${invalid}}
    >
        Brev
    </Checkbox>
</FieldGroup>
`;
};
