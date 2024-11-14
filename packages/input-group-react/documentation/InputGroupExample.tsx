import { Link } from "@fremtind/jkl-core";
import React, { FC } from "react";
import {
    ExampleComponentProps,
    ExampleKnobsProps,
    CodeExample,
} from "../../../doc-utils";
import { BaseTextInput } from "../../text-input-react/src/BaseTextInput";
import { PopupTip } from "../../tooltip-react/src";
import { InputGroup, type LabelVariant } from "../src";

export const inputGroupExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med tooltip"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const InputGroupExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const helpLabel = boolValues?.["Med hjelpetekst"]
        ? "Fødselsnummer består av 11 siffer"
        : undefined;
    const errorLabel = boolValues?.["Med feil"] ? (
        <>
            Du må fylle ut fødelsnummer eller D-nummer. Se{" "}
            <Link href="">guiden vår</Link> hvis du er usikker på hvordan du
            finner D-nummer.
        </>
    ) : undefined;
    const labelProps = {
        variant: choiceValues?.["Variant"] as LabelVariant,
    };

    const tooltip = boolValues?.["Med tooltip"] ? (
        <PopupTip
            content={
                <>
                    Du må fylle ut fødelsnummer eller D-nummer. Se{" "}
                    <Link href="">guiden vår</Link> hvis du er usikker på
                    hvordan du finner D-nummer.
                </>
            }
        />
    ) : undefined;

    return (
        <InputGroup
            label="Fødselsnummer"
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            labelProps={labelProps}
            tooltip={tooltip}
        >
            <BaseTextInput />
        </InputGroup>
    );
};

export default InputGroupExample;

export const inputGroupExampleCode: CodeExample = ({ boolValues }) => `
<InputGroup
    label="Fødselsnummer"
    helpLabel=${
        boolValues?.["Med hjelpetekst"]
            ? `"Fødselsnummer består av 11 siffer"`
            : `{undefined}`
    }
    errorLabel=${
        boolValues?.["Med feil"]
            ? `<>
            Du må fylle ut fødelsnummer eller D-nummer. Se <Link href="">guiden vår</Link> hvis du er usikker på hvordan
            du finner D-nummer.
        </>`
            : `{undefined}`
    }${
    boolValues?.["Med tooltip"]
        ? `
    tooltip={
        <PopupTip
            content={
                <>
                    Du må fylle ut fødelsnummer eller D-nummer. Se{" "}
                    <Link href="">guiden vår</Link> hvis du er usikker på
                    hvordan du finner D-nummer.
                </>
            }
        />
    }`
        : ""
}
>
    <BaseTextInput />
</InputGroup>
`;
