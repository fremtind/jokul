import React, { FC, useState } from "react";
import { Combobox, type ComboboxValuePair } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";
import type { LabelVariant } from "../../input-group";

export const comboboxExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med hjelpetekst", "Med feil", "Med empty state", "Med tagHover"],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 0,
        },
    ],
};

export const ComboboxExample: FC<ExampleComponentProps> = ({ choiceValues, boolValues }) => {
    const variant = choiceValues && (choiceValues["Variant"] as LabelVariant);

    const items: ComboboxValuePair[] = [
        { value: "a080", label: "A080 - Rotavirusenteritt", tagLabel: "A080" },
        { value: "a081", label: "A081 - Akutt gastroenteritt som skyldes norovirus", tagLabel: "A081" },
        { value: "a082", label: "A082 - Adenovirusenteritt", tagLabel: "A082" },
        { value: "a083", label: "A083 - Annen virusenteritt", tagLabel: "A083" },
        { value: "a084", label: "A084 - Uspesifisert virusinfeksjon i mage-tarmkanalen", tagLabel: "A084" },
        { value: "a085", label: "A085 - Annen spesifisert mage-tarminfeksjon", tagLabel: "A085" },
        {
            value: "a090",
            label: "A090 - Annen eller uspesifisert gastroenteritt eller kolitt av infeksiøs årsak",
            tagLabel: "A090",
        },
        { value: "a099", label: "A099 - Gastroenteritt eller kolitt av uspesifisert årsak", tagLabel: "A099" },
        {
            value: "a150",
            label: "A150 - Lungetuberkulose bekreftet ved mikroskopi av sputum med eller uten kultur",
            tagLabel: "A150",
        },
    ];

    const [selectedValues, setSelectedValues] = useState<Array<ComboboxValuePair>>([]);

    const errorLabel =
        boolValues && boolValues["Med feil"] ? "Du må velge sykdommer, for eksempel A090 og A150." : undefined;
    const helpLabel =
        boolValues && boolValues["Med hjelpetekst"] ? "Med sykdommer mener vi for eksempel A090 og A150." : undefined;
    const noMatchingOption = boolValues && boolValues["Med empty state"] ? "Ingen valg matcher søket" : undefined;
    const hasTagHover = boolValues && boolValues["Med tagHover"] ? true : undefined;

    return (
        <Combobox
            id="produsent"
            name="produsent"
            placeholder="Søk"
            width="220px"
            labelProps={{ variant }}
            helpLabel={helpLabel}
            errorLabel={errorLabel}
            label="Velg sykdommer"
            noMatchingOption={noMatchingOption}
            hasTagHover={hasTagHover}
            items={items}
            value={selectedValues}
            onChange={(event) => {
                setSelectedValues(event.target.selectedOptions);
                console.log("Change: ", event);
            }}
        />
    );
};

export default ComboboxExample;
