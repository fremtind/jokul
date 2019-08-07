import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropdown, Select } from "../src";
import { initTabListener } from "@fremtind/jkl-core";

import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-dropdown/dropdown.min.css";
import "./index.scss";

initTabListener();
const DropdownDemo = () => {
    const items = ["The flower shop", "I have cancer", "Throwing the football", "ChripChripChrip", "hei, se her!"];
    const years = [...Array(120)].map((_, i) => (i + 1900).toString()); // 1900 - 2019

    const [favoriteScene, setFavoriteScene] = useState("");

    return (
        <>
            <Dropdown
                inline
                label="The Room scene"
                defaultPrompt="Choose your favorite"
                items={items}
                onChange={setFavoriteScene}
                helpLabel="The room is the greatest movie"
                errorLabel={favoriteScene !== "" ? "You can't pick, they are all the best" : undefined}
            />
            <Dropdown inline label="Fødselsår" items={years} initialInputValue="1986" />

            <Select label="Standard select" items={items} onChange={(e) => console.log(e.target.value)} />
            <Select
                helpLabel="The room is the greatest movie"
                errorLabel={favoriteScene !== "" ? "You can't pick, they are all the best" : undefined}
                label="Standard select"
                items={items}
                onChange={(e) => console.log(e.target.value)}
            />

            <Dropdown label="Favorite The Room scene" items={items} />
            <Dropdown className="short" label="Fødselsår" items={years} />
        </>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<DropdownDemo />, mountNode);
