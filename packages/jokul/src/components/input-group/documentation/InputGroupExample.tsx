import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { Link } from "../../link/Link.js";
import { BaseTextInput } from "../../text-input/BaseTextInput.js";
import { InputGroup } from "../InputGroup.js";
import { LabelVariant } from "../Label.js";

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

    const tooltip = boolValues?.["Med tooltip"]
        ? {
              content: (
                  <>
                      Du må fylle ut fødelsnummer eller D-nummer. Se{" "}
                      <Link href="">guiden vår</Link> hvis du er usikker på
                      hvordan du finner D-nummer.
                  </>
              ),
          }
        : undefined;

    return (
        <InputGroup
            label="Fødselsnummer"
            errorLabel={errorLabel}
            helpLabel={helpLabel}
            labelProps={labelProps}
            tooltipProps={tooltip}
        >
            <BaseTextInput />
        </InputGroup>
    );
};

export default InputGroupExample;
