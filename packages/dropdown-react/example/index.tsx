import React from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "../src";
import "@fremtind/jkl-dropdown/dropdown.css";

const DropdownDemo = () => (
    <form>
        <Dropdown
            label="Favorite The Room scene"
            items={["The flower shop", "I have cancer", "Throwing the football", "ChripChripChrip"]}
        />
    </form>
);

var mountNode = document.getElementById("app");
ReactDOM.render(<DropdownDemo />, mountNode);
