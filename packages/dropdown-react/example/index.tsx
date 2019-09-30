import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropdown, Select } from "../src";
import { initTabListener } from "@fremtind/jkl-core";

import "@fremtind/jkl-core/core.min.css";
import "@fremtind/jkl-dropdown/dropdown.min.css";
import "./index.scss";

initTabListener();
const SelectDemo = () => {
    const items = ["The flower shop", "I have cancer", "Throwing the football", "ChirpChirpChirp"];
    const valuePairs = [{ value: "firstvalue", label: "Value 1" }, { value: "secondvalue", label: "Value 2" }];
    const years = [...Array(120)].map((_, i) => (i + 1900).toString()); // 1900 - 2019

    const [favoriteScene, setFavoriteScene] = useState("");
    const [valuePair, setValuePair] = useState<string>();

    return (
        <>
            <Dropdown
                inline
                className="jkl-spacing--top-3"
                label="The Room scene"
                defaultPrompt="Choose your favorite"
                items={items}
                onChange={setFavoriteScene}
                helpLabel="The room is the greatest movie"
                errorLabel={favoriteScene !== "" ? "You can't pick, they are all the best" : undefined}
                variant="secondary"
            />
            <Dropdown
                inline
                className="jkl-spacing--top-3"
                label="Fødselsår"
                items={years}
                initialInputValue="1986"
                variant="small"
            />

            <Select
                className="jkl-spacing--top-5"
                label="Native select"
                items={valuePairs}
                onChange={(e) => setValuePair(e.target.value)}
                value={valuePair}
                helpLabel="This uses value/label pairs"
            />
            <Select
                className="jkl-spacing--top-3"
                helpLabel="The room is the greatest movie"
                errorLabel={favoriteScene !== "" ? "You can't pick, they are all the best" : undefined}
                label="Native select"
                items={items}
                onChange={(e) => setFavoriteScene(e.target.value)}
                placeholder="Choose your favorite"
                variant="secondary"
                value={favoriteScene}
            />

            <Dropdown className="jkl-spacing--top-5" label="Favorite The Room scene" items={items} />
            <Dropdown
                className="jkl-spacing--top-3"
                label="Value pairs"
                items={valuePairs}
                onChange={(v) => console.log(v)}
                helpLabel="This uses value/label pairs"
            />
        </>
    );
};

ReactDOM.render(<SelectDemo />, document.getElementById("app"));
