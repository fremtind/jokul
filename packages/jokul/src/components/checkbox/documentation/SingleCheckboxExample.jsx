import React, { useId } from "react";
import { SupportLabel } from "../../input-group";
import { Checkbox } from "../src";

export const SingleCheckboxExample = () => {
    /* -- EXAMPLE CODE START -- */
    const labelId = useId();
    const [checked, setChecked] = React.useState(false);

    const helpText = boolKnob("Med hjelpetekst");
    const error = boolKnob("Med feil");

    let label = undefined;
    if (helpText) {
        label = "Vedlegget har viktig informasjon om forsikringen din";
    }
    if (error) {
        label = "Du må bekrefte at du har lest vedlegget. Det har viktig informasjon om forsikringen din.";
    }

    return (
        <div>
            <Checkbox
                aria-describedby={labelId}
                name="confirmation"
                value="read"
                checked={checked}
                invalid={error}
                onChange={() => setChecked(!checked)}
            >
                Jeg har lest vedlegget
            </Checkbox>
            <SupportLabel id={labelId} label={label} labelType={error ? "error" : "help"} />
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
