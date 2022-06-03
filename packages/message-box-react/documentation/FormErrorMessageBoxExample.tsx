import React from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { FormErrorMessageBox } from "../src";

export const formErrorMessageBoxKnobs: ExampleKnobsProps = {
    boolProps: ["Full width", "Compact", "Submitted", "Gyldig fornavn", "Gyldig etternavn"],
};

export const FormErrorMessageBoxExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <div>
            <FormErrorMessageBox
                errors={[
                    !boolValues?.["Gyldig fornavn"] ? "Du må oppgi fornavn" : undefined,
                    !boolValues?.["Gyldig etternavn"] ? "Du må oppgi etternavn" : undefined,
                ]}
                isSubmitted={boolValues?.["Submitted"] || false}
                isValid={(boolValues?.["Gyldig fornavn"] && boolValues?.["Gyldig etternavn"]) || false}
                messageBoxProps={{
                    forceCompact: boolValues?.["Compact"],
                    fullWidth: boolValues?.["Full width"],
                }}
            />
            <p className="jkl-small">
                Velg <i>Submitted</i> for å animere inn komponenten
            </p>
        </div>
    );
};

export const formErrorMessageBoxExampleCode = ({ boolValues }: ExampleComponentProps): string => `
<FormErrorMessageBox
    errors={[${!boolValues?.["Gyldig fornavn"] ? `"Du må oppgi fornavn", ` : ""}${
    !boolValues?.["Gyldig etternavn"] ? `"Du må oppgi etternavn"` : ""
}]}
    isSubmitted={${boolValues?.["Submitted"] || false}}
    isValid={${boolValues?.["Gyldig fornavn"] && boolValues?.["Gyldig etternavn"]}}
    messageBoxProps={{
        forceCompact: ${boolValues?.["Compact"]},
        fullWidth: ${boolValues?.["Full width"]},
    }}
/>
`;
