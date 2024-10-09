import React from "react";
import { FieldGroup } from "../../input-group";
import { Checkbox } from "../Checkbox";

export const knobs = [
    {
        type: "bool",
        label: "Med hjelpetekst",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "bool",
        label: "Med feil",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "bool",
        label: "Indeterminate",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
];

export const CheckboxExample = () => {
    /* -- EXAMPLE CODE START -- */
    const [phone, setPhone] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [snailMail, setSnailMail] = React.useState(false);

    return (
        <FieldGroup
            legend="Hvordan kan vi kontakte deg?"
            helpLabel={
                boolKnob("Med hjelpetekst") ? "Vi sender viktige beskjeder til deg med de valgte metodene" : undefined
            }
            errorLabel={
                boolKnob("Med feil")
                    ? "Du må velge minst én kontaktmetode hvor vi kan sende viktige beskjeder"
                    : undefined
            }
        >
            <Checkbox
                name="checklist"
                value="phone"
                checked={phone}
                invalid={boolKnob("Med feil")}
                onChange={() => setPhone(!phone)}
                indeterminate={boolKnob("Indeterminate")}
            >
                Telefon
            </Checkbox>
            <Checkbox
                name="checklist"
                value="email"
                checked={email}
                invalid={boolKnob("Med feil")}
                onChange={() => setEmail(!email)}
                indeterminate={boolKnob("Indeterminate")}
            >
                E-post
            </Checkbox>
            <Checkbox
                name="checklist"
                value="snailmail"
                checked={snailMail}
                invalid={boolKnob("Med feil")}
                onChange={() => setSnailMail(!snailMail)}
                indeterminate={boolKnob("Indeterminate")}
            >
                Brev
            </Checkbox>
        </FieldGroup>
    );
    /* -- EXAMPLE CODE END -- */
};
