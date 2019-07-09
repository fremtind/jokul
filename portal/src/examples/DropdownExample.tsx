import React from "react";
import { Dropdown } from "@fremtind/jkl-dropdown-react";

export function DropdownExample() {
    const items = ["Et valg", "Enda et valg", "Nok et valg", "et ganske langt valg for variasjonens skyld"];

    return <Dropdown label="Foreta et valg" items={items} />;
}
