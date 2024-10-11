import React from "react";
import { FormErrorMessage } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";

export const formErrorMessageKnobs: ExampleKnobsProps = {
    boolProps: ["Full width", "Submitted", "Gyldig fornavn", "Gyldig etternavn"],
};

export const FormErrorMessageExample: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <div>
            <FormErrorMessage
                errors={[
                    !boolValues?.["Gyldig fornavn"] ? "Du må oppgi fornavn" : undefined,
                    !boolValues?.["Gyldig etternavn"] ? "Du må oppgi etternavn" : undefined,
                ]}
                isSubmitted={boolValues?.["Submitted"] || false}
                isValid={(boolValues?.["Gyldig fornavn"] && boolValues?.["Gyldig etternavn"]) || false}
                messageProps={{
                    fullWidth: boolValues?.["Full width"],
                }}
            />
            <p className="jkl-small">
                Velg <i>Submitted</i> for å animere inn komponenten
            </p>
        </div>
    );
};
