import { Link } from "@fremtind/jkl-core";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import type { LabelVariant } from "@fremtind/jkl-input-group-react";
import React, { useState, ChangeEvent, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { IconButton } from "../../icon-button-react/src";
import { PopupTip } from "../../tooltip-react/src";
import { TextInput } from "../src/TextInput";

export const textInputExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Med hjelpetekst",
        "Med feil",
        "Med tooltip",
        "Med handling",
        "Med benevnelse",
        "Inline",
    ],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const TextInputExample: FC<ExampleComponentProps> = ({
    choiceValues,
    boolValues,
}) => {
    const [value, setValue] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Boareal er innvendig bruksareal unntatt bodarealet"
        : undefined;
    const errorLabel = boolValues?.["Med feil"] ? (
        <>
            Du må fylle ut boarealet. Se <Link href="">guiden vår</Link> hvis du
            er usikker på hvordan du finner riktig areal.
        </>
    ) : undefined;

    const tooltip = boolValues?.["Med tooltip"] ? (
        <PopupTip
            content={
                <>
                    Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke
                    vet boarealet ditt kan du lese guiden vi lenker til under.
                </>
            }
        />
    ) : undefined;

    const unit = boolValues?.["Med benevnelse"] ? (
        <>
            m<sup>2</sup>
        </>
    ) : undefined;
    const inline = boolValues?.["Inline"];
    const variant = choiceValues?.["Variant"] as LabelVariant;
    const actionButton = boolValues?.["Med handling"] ? (
        <IconButton title="Nullstill feltet" onClick={() => setValue("")}>
            <CloseIcon />
        </IconButton>
    ) : undefined;

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
                    actionButton={actionButton}
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
            tooltip={tooltip}
            value={value}
            onChange={handleChange}
            onKeyDown={() => console.log("onKeyDown event")}
            inline={inline}
            actionButton={actionButton}
            unit={unit}
            align="right"
            width="min(10rem, 100%)"
        />
    );
};

export const textInputExampleCode = ({
    choiceValues,
    boolValues,
}: ExampleComponentProps): string => {
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
    label="Boareal"
    name="boareal"
    align="right"
    labelProps={{ variant: "${choiceValues?.["Variant"]}" }}${
        boolValues?.["Med hjelpetekst"]
            ? `
    helpLabel="Boareal er innvendig bruksareal unntatt bodarealet"`
            : ""
    }${
        boolValues?.["Med feil"]
            ? `
    errorLabel={<>Du må fylle ut boarealet. Se <a href="#">guiden vår</a> hvis du er usikker på hvordan du finner riktig areal.</>}`
            : ""
    }${
        boolValues?.["Med tooltip"]
            ? `
    tooltip={
        <PopupTip
            content={
                <>
                    Boareal måles i kvadratmeter (m<sup>2</sup>). Hvis du ikke
                    vet boarealet ditt kan du lese guiden vi lenker til under.
                </>
            }
        />
    }`
            : ""
    }${
        boolValues?.["Med handling"]
            ? `
    actionButton={
        <IconButton title="Nullstill feltet" onClick={() => setValue("")}>
            <CloseIcon />
        </IconButton>    
    }`
            : ""
    }${
        boolValues?.["Med benevnelse"]
            ? `
    unit={<>m<sup>2</sup></>}`
            : ""
    }
/>
`;
};
