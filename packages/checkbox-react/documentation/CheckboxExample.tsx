import { FieldGroup, type LabelVariant } from "@fremtind/jkl-input-group-react";
import React, { FC } from "react";
import {
    CodeExample,
    ExampleComponentProps,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { Checkbox } from "../src";

export const checkboxExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Med hjelpetekst",
        "Med feil",
        "Med tooltip",
        "Indeterminate state",
    ],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 1,
        },
    ],
};

export const CheckboxExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const [phone, setPhone] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [snailMail, setSnailMail] = React.useState(false);

    const variant = choiceValues?.["Variant"]
        ? (choiceValues["Variant"] as LabelVariant)
        : "medium";

    const helpText = boolValues?.["Med hjelpetekst"];
    const invalid = boolValues?.["Med feil"];
    const indeterminate = boolValues?.["Indeterminate state"];

    const tooltip = boolValues?.["Med tooltip"]
        ? {
              content:
                  "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed.",
          }
        : undefined;

    return (
        <FieldGroup
            legend="Hvordan kan vi kontakte deg?"
            labelProps={{ variant }}
            helpLabel={
                helpText
                    ? "Vi sender viktige beskjeder til deg med de valgte metodene"
                    : undefined
            }
            errorLabel={
                invalid
                    ? "Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"
                    : undefined
            }
            tooltipProps={tooltip}
        >
            <Checkbox
                name="checklist"
                value="phone"
                checked={phone}
                invalid={invalid}
                onChange={() => setPhone(!phone)}
                indeterminate={indeterminate}
            >
                Telefon
            </Checkbox>
            <Checkbox
                name="checklist"
                value="email"
                checked={email}
                invalid={invalid}
                onChange={() => setEmail(!email)}
                indeterminate={indeterminate}
            >
                E-post
            </Checkbox>
            <Checkbox
                name="checklist"
                value="snailmail"
                checked={snailMail}
                invalid={invalid}
                onChange={() => setSnailMail(!snailMail)}
                indeterminate={indeterminate}
            >
                Brev
            </Checkbox>
        </FieldGroup>
    );
};

export const checkboxExampleCode: CodeExample = ({
    boolValues,
    choiceValues,
}) => {
    const helpText = boolValues?.["Med hjelpetekst"];
    const invalid = boolValues?.["Med feil"];

    return `
<FieldGroup
    legend="Hvordan kan vi kontakte deg?"
    labelProps={{ variant: "${choiceValues?.["Variant"] || "medium"}" }}
    helpLabel=${
        helpText
            ? `"Vi sender viktige beskjeder til deg med de valgte metodene"`
            : "{undefined}"
    }
    errorLabel=${
        invalid
            ? `"Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"`
            : "{undefined}"
    }${
        boolValues?.["Med tooltip"]
            ? `
    tooltipProps={{ content: "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed." }}`
            : ""
    }
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
