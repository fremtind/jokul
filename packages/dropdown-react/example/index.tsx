import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropdown, Select } from "../src";
import { initTabListener } from "@fremtind/jkl-core";

import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-dropdown/dropdown.min.css";
import "./index.scss";

initTabListener();
const DropdownDemo = () => {
    let items = ["The flower shop", "I have cancer", "Throwing the football", "ChripChripChrip", "hei, se her!"];

    const years = [...Array(120)].map((_, i) => (i + 1900).toString()); // 1900 - 2019

    const [c, setC] = useState(0);
    const [d, setD] = useState(1000);
    const [favoriteScene, setFavoriteScene] = useState("");

    return (
        <>
            <Dropdown
                inline
                key={c}
                label="The Room scene"
                defaultPrompt="Choose your favorite"
                items={items}
                onChange={(value) => setFavoriteScene(value)}
                helpText="The room is the greatest movie"
                isInvalid={favoriteScene !== ""}
                errorText="You can't pick, they are all the best"
            />
            <Dropdown inline key={d} label="Fødselsår" items={years} initialInputValue="1986" />

            <Select isInvalid label="Standard select" items={items} onChange={(e) => console.log(e.target.value)} />
            <Select
                helpText="The room is the greatest movie"
                isInvalid={favoriteScene !== ""}
                errorText="You can't pick, they are all the best"
                label="Standard select"
                items={items}
                onChange={(e) => console.log(e.target.value)}
            />

            <div>
                <button
                    onClick={() => {
                        setC(c + 1);
                        setD(d + 1);
                    }}
                >
                    Reset
                </button>
            </div>

            <div>
                <Dropdown key={c} label="Favorite The Room scene" items={items} />
            </div>

            <div>
                <Dropdown className="short" key={d} label="Fødselsår" items={years} />
            </div>
        </>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<DropdownDemo />, mountNode);
