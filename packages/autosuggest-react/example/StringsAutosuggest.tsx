import React from "react";
import { Autosuggest } from "../src";
import { AutosuggestTypeahed } from "../src";

const items = [
    "3D Designer",
    "Abonnementselger",
    "Bussjåfør",
    "Cafemedarbeider",
    "Dukkefilmfotograf",
    "Elektroingeniør",
    "Klovn",
];

type ExampleType = "STRING_ITEMS" | "TYPEAHED" | "ERROR_STATE" | "CUSTOM_LABEL";

const StringsAutosuggest = ({ exampleType }: { exampleType: ExampleType }) => {
    const props = {
        allItems: items,
        onChange: (item: string | null) =>
            item ? console.log(`Item selected: ${item}`) : console.log("input cleared"),
        noHitsMessage: <p className="no-hits-message">Ingen treff!</p>,
    };

    switch (exampleType) {
        case "STRING_ITEMS":
            return <Autosuggest label="Velg yrke" {...props} />;
        case "TYPEAHED":
            return <AutosuggestTypeahed label="Velg yrke" {...props} />;
        case "ERROR_STATE":
            return (
                <Autosuggest
                    label="Velg yrke"
                    isInvalid={true}
                    errorText="Du er for gammel for dette yrket"
                    {...props}
                />
            );
        case "CUSTOM_LABEL":
            return (
                <>
                    <label id="custom-label" htmlFor="autosuggest-input">
                        Velg yrke
                    </label>
                    <Autosuggest inputId="autosugget-input" labelId="custom-label" {...props} />
                </>
            );
    }
};

export default StringsAutosuggest;
