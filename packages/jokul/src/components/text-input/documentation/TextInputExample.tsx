import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { ChangeEvent, FC, useState } from "react";
import { CloseIcon } from "../../icon/index.js";
import { LabelVariant } from "../../input-group/Label.js";
import { Link } from "../../link/Link.js";
import { Action } from "../BaseTextInput.js";
import { TextInput } from "../TextInput.js";

export const textInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip", "Med handling", "Med benevnelse", "Inline"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const TextInputExample: FC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Boareal er innvendig bruksareal unntatt bodarealet"
        : undefined;
    const errorLabel = boolValues?.["Med feil"] ? (
        <>
            Du må fylle ut boarealet. Se <Link href="">guiden vår</Link> hvis du er usikker på hvordan du finner riktig
            areal.
        </>
    ) : undefined;

    const tooltipProps = boolValues?.["Med tooltip"]
        ? {
              content: (
                  <>
                      Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke vet boarealet ditt kan du lese guiden
                      vi lenker til under.
                  </>
              ),
          }
        : undefined;

    const unit = boolValues?.["Med benevnelse"] ? (
        <>
            m<sup>2</sup>
        </>
    ) : undefined;
    const inline = boolValues?.["Inline"];
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const action = boolValues?.["Med handling"]
        ? ({
              icon: <CloseIcon />,
              label: "Nullstill feltet",
              onClick: () => setValue(""),
          } as Action)
        : undefined;

    if (inline) {
        return (
            <div>
                Jeg er{" "}
                <TextInput
                    value={value}
                    onChange={handleChange}
                    inline
                    label="Alder"
                    maxLength={3}
                    width="2rem"
                    errorLabel={errorLabel}
                    action={action}
                />{" "}
                år gammel
            </div>
        );
    }

    return (
        <TextInput
            label="Boareal"
            name="boareal"
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            labelProps={{ variant }}
            tooltipProps={tooltipProps}
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
            inline={inline}
            action={action}
            unit={unit}
            align="right"
            width="min(10rem, 100%)"
        />
    );
};
