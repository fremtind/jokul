import React, { useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Autosuggest } from "../src";

export const AutosuggestExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("");

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

    const filteredItems = allItems.filter((item) => item.toLowerCase().includes(value2.toLowerCase()));

    return (
        <div style={{ maxWidth: "400px", width: "100%" }}>
            <Autosuggest
                label="Velg land"
                onChange={setValue}
                value={value}
                onConfirm={() => console.log("onConfirm")}
                allItems={allItems}
                helpLabel={boolValues?.Hjelpetekst ? "Velg et land" : undefined}
                errorLabel={boolValues?.Feiltekst ? "Du må velge et land" : undefined}
                leadText={boolValues?.Leadtekst ? "Velg det beste landet" : undefined}
                placeholder={boolValues?.Placeholder ? "Velg et land" : undefined}
                showDropdownControllerButton={boolValues && boolValues["Vis kontroller"]}
                noHitsMessage={boolValues && boolValues["Ingen treff"] ? "Tror ikke det er et land" : undefined}
                maxNumberOfHits={boolValues && boolValues["Max antall treff"] ? 3 : undefined}
                variant={(choiceValues?.Variant as "small" | "medium" | "large") || "medium"}
                inverted={boolValues?.Invertert}
            />

            <Autosuggest
                className="jkl-spacing-l--top"
                label="Velg land med fritekst"
                onInputValueChange={setValue2}
                onChange={setValue2}
                value={value2}
                onConfirm={() => console.log("onConfirm")}
                allItems={filteredItems}
                helpLabel={boolValues?.Hjelpetekst ? "Velg et land" : undefined}
                errorLabel={boolValues?.Feiltekst ? "Du må velge et land" : undefined}
                leadText={boolValues?.Leadtekst ? "Velg det beste landet" : undefined}
                placeholder={boolValues?.Placeholder ? "Velg et land" : undefined}
                showDropdownControllerButton={boolValues && boolValues["Vis kontroller"]}
                noHitsMessage={boolValues && boolValues["Ingen treff"] ? "Tror ikke det er et land" : undefined}
                maxNumberOfHits={boolValues && boolValues["Max antall treff"] ? 3 : undefined}
                variant={(choiceValues?.Variant as "small" | "medium" | "large") || "medium"}
                inverted={boolValues?.Invertert}
            />
        </div>
    );
};

export default AutosuggestExample;
