import React from "react";
import { Example } from "../components";
import { Dropdown } from "@fremtind/jkl-dropdown-react";
import "@fremtind/jkl-dropdown/dropdown.min.css";
// @ts-ignore
import dropdownType from "!raw-loader!@fremtind/jkl-dropdown-react/build/Dropdown.d.ts";

const example = `<>
    <Dropdown label="Merke" items={["Mercedes", "Opel", "Skoda"]} />
    <Dropdown
        label="Home type"
        defaultPrompt="Choose" // for screen readers
        items={["Apartment", "Duplex", "House", "Mansion"]}
        initialInputValue="House"
        onChange={(value) => alert(value)}
    />
</>`;

const exampleImport = `import { Dropdown } from "@fremtind/jkl-dropdown-react";
import "@fremtind/jkl-dropdown/dropdown.min.css";`;

const DropdownExample = () => (
    <Example exampleComponents={{ Dropdown }} exampleCode={example} type={dropdownType} exampleImport={exampleImport} />
);

export default DropdownExample;
