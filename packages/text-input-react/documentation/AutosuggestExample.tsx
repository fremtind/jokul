import React, { useState } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Autosuggest } from "../src";

export const autosuggestExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "Hjelpetekst",
        "Feiltekst",
        "Leadtekst",
        "Ingen treff",
        "Max antall treff",
        "Placeholder",
        "Vis ikoner",
    ],
    choiceProps: [
        {
            name: "Variant",
            values: ["small", "medium", "large"],
            defaultValue: 1,
        },
    ],
};

export const AutosuggestExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [value, setValue] = useState("");

    const allItems = [
        "Afghanistan",
        "Aland Islands",
        "Algeria",
        "Australia",
        "Austria",
        "Bahrain",
        "Bangladesh",
        "Benin",
        "Bermuda",
        "Bhutan",
    ];

    const filteredItems = allItems.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

    return (
        <div style={{ maxWidth: "400px", width: "100%" }}>
            <Autosuggest
                className="jkl-spacing-l--top"
                label="Velg land"
                onInputValueChange={setValue}
                onChange={setValue}
                value={value}
                onConfirm={() => console.log("onConfirm")}
                allItems={filteredItems}
                helpLabel={boolValues?.Hjelpetekst ? "Velg et land fra listen eller skriv inn landet selv" : undefined}
                errorLabel={boolValues?.Feiltekst ? "Du må velge et land" : undefined}
                placeholder={boolValues?.Placeholder ? "Velg et land" : undefined}
                showDropdownControllerButton={boolValues?.["Vis ikoner"]}
                noHitsMessage={boolValues?.["Ingen treff"] ? "Fant ingen land, men du kan skrive ferdig" : undefined}
                maxNumberOfHits={boolValues?.["Mis maks 3 treff"] ? 3 : undefined}
                variant={(choiceValues?.Variant as "small" | "medium" | "large") || "medium"}
            />
            <p className="jkl-body jkl-spacing-m--top">Du har valgt: {value}</p>
        </div>
    );
};

export default AutosuggestExample;

export const autosuggestExampleCode: CodeExample = ({ boolValues, choiceValues }) => `
const allItems = ["Afghanistan", "Aland Islands", /* etc... */];
const [value, setValue] = useState("");
return (
    <div style={{ maxWidth: "400px", width: "100%" }}>
        <Autosuggest
            className="jkl-spacing-l--top"
            label="Velg land med fritekst"
            onInputValueChange={setValue}
            onChange={setValue}
            value={value}
            allItems={allItems.filter((item) => item.toLowerCase().includes(value.toLowerCase()))}
            helpLabel=${
                boolValues?.Hjelpetekst ? `"Velg et land fra listen eller skriv inn landet selv"` : "{undefined}"
            }
            errorLabel=${boolValues?.Feiltekst ? `"Du må velge et land"` : "{undefined}"}
            placeholder=${boolValues?.Placeholder ? `"Velg et land"` : "{undefined}"}
            showDropdownControllerButton={${boolValues?.["Vis ikoner"]}}
            noHitsMessage=${boolValues?.["Ingen treff"] ? `"Fant ingen land, men du kan skrive ferdig"` : "{undefined}"}
            maxNumberOfHits=${boolValues?.["Mis maks 3 treff"] ? 3 : "{undefined}"}
            variant=${choiceValues?.Variant}
        />
    </div>
);
`;
