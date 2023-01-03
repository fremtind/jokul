import { LabelVariant, Link } from "@fremtind/jkl-core";
import { SearchIcon } from "@fremtind/jkl-icons-react";
import React, { useState, ChangeEvent, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { TextInput } from "../src";
import { Action } from "../src/TextInput";

export const textInputExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med handling", "Med benevnelse", "Inline"],
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

    const unit = boolValues?.["Med benevnelse"] ? (
        <>
            m<sup>2</sup>
        </>
    ) : undefined;
    const inline = boolValues?.["Inline"];
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const action = boolValues?.["Med handling"]
        ? ({
              icon: <SearchIcon variant="inherit" />,
              label: "Søk",
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
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
            inline={inline}
            variant={variant}
            action={action}
            unit={unit}
            align="right"
        />
    );
};

export const textInputExampleCode = ({ choiceValues, boolValues }: ExampleComponentProps): string => {
    const inline = boolValues?.["Inline"];
    if (inline) {
        return `
<div>
    Jeg er <TextInput inline label="Alder" width="3rem" errorLabel=${
        boolValues?.["Med feil"] ? `"Du må fylle ut alder"` : `{undefined}`
    } /> år gammel
</div>
`;
    }

    return `
<TextInput
    label="Fødselsnummer"
    name="fodselsnummer"
    helpLabel=${boolValues?.["Med hjelpetekst"] ? `"Fødselsnummer består av 11 siffer"` : `{undefined}`}
    errorLabel=${
        boolValues?.["Med feil"]
            ? `<>Du må fylle ut fødselsnummer, 11 siffer. <Link href="">Kontakt oss </Link> hvis du ikke har norsk fødselsnummer.{" "}</>`
            : `{undefined}`
    }
    variant={${choiceValues?.["Variant"]}}
    action={${
        boolValues?.["Med handling"]
            ? `{
        icon: "clear",
        label: "Nullstill feltet",
        onClick: () => setValue(""),
    }`
            : undefined
    }}
/>
`;
};
