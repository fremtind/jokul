import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { FieldGroup } from "../../input-group/FieldGroup.js";
import type { LabelVariant } from "../../input-group/types.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { Checkbox } from "../Checkbox.js";

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

    const tooltip = boolValues?.["Med tooltip"] ? (
        <PopupTip
            content={
                "Du kan velge flere metoder. Ved brev vil det ta lenger tid å få en beskjed."
            }
        />
    ) : undefined;

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
            tooltip={tooltip}
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
