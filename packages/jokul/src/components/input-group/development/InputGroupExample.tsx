import type { FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Link } from "../../link/Link.js";
import { BaseTextInput } from "../../text-input/BaseTextInput.js";
import { PopupTip } from "../../tooltip/PopupTip.js";
import { InputGroup } from "../InputGroup.js";
import type { LabelVariant } from "../types.js";

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
