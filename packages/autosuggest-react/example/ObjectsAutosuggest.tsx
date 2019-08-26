import React from "react";
import { Autosuggest } from "../src";

interface Country {
    id: number;
    country: string;
    continent: string;
}

const items: Country[] = [
    { id: 1, country: "Albania", continent: "Europe" },
    { id: 2, country: "Austria", continent: "Europe" },
    { id: 3, country: "Angola", continent: "Africa" },
    { id: 4, country: "Algeria", continent: "Africa" },
    { id: 5, country: "Argentina", continent: "South America" },
];

/* 
First try to match the input value against the country field.
Then try to match input value against the continent field.
This will make it possible to search by country or continent in the dropdown.
*/
const keys = ["country", "continent"];

const ObjectsAutosuggest = () => (
    <Autosuggest
        allItems={items}
        label="Velg land"
        placeholder="Søk etter land"
        keys={keys}
        itemToString={(item: Country | null) => (item ? item.country : "")}
        onChange={(item: Country | null) => (item ? console.log("Item selected:", item) : console.log("Input cleared"))}
    />
);

export default ObjectsAutosuggest;
