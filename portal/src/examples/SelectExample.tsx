import React from "react";
import { Example } from "../components";
import { Select, NativeSelect } from "@fremtind/jkl-select-react";
import "@fremtind/jkl-dropdown/dropdown.min.css";

import dropdownType from "!raw-loader!@fremtind/jkl-dropdown-react/build/Dropdown.d.ts";

const example = `() => {
    const [selectValue, setSelectValue] = React.useState("");
    return (
        <>
            <Select className="jkl-spacing--bottom-2" label="Merke" items={["Mercedes", "Opel", "Skoda"]} />
            <Select
                variant="large"
                className="jkl-spacing--bottom-2"
                label="Merke"
                items={["Mercedes", "Opel", "Skoda"]}
                initialShow
                helpLabel="Velg produsent"
            />
            <Select
                variant="small"
                className="jkl-spacing--bottom-2"
                label="Home type"
                defaultPrompt="Choose" // for screen readers
                items={["Apartment", "Duplex", "House", "Mansion"]}
                initialInputValue="House"
                onChange={(value) => console.log(value)}
                errorLabel="Select valid place to live"
            />
            <NativeSelect
                className="jkl-spacing--bottom-2"
                label="Home type"
                items={["Apartment", "Duplex", "House", "Mansion"]}
                placeholder="Make a choice"
                helpLabel="This is a native select element"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
            />
        </>
    );
}`;

const exampleImport = `import { Select, NativeSelect } from "@fremtind/jkl-select-react";
import "@fremtind/jkl-select/select.min.css";`;

const SelectExample = () => (
    <Example
        exampleComponents={{ Select, NativeSelect }}
        exampleCode={example}
        type={dropdownType}
        exampleImport={exampleImport}
    />
);

export default SelectExample;
