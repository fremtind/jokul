import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "../src";
import { initTabListener } from "@fremtind/jkl-core";

initTabListener();
const DropdownDemo = () => {
    let items = ["The flower shop", "I have cancer", "Throwing the football", "ChripChripChrip"];

    let years = Array(120)
        .fill(1900)
        .map((a, i) => a + i); // 1900 - 2019

    const [c, setC] = useState(0);
    const [d, setD] = useState(1000);

    return (
        <>
            <Dropdown
                key={c}
                label="The Room scene"
                items={items}
                onChange={(value) => console.log(`You selected "${value}"!`)}
            />
            <Dropdown key={d} label="Fødselsår" items={years} initialInputValue="1904" />

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
                <Dropdown key={d} label="Fødselsår" items={years} />
            </div>
        </>
    );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<DropdownDemo />, mountNode);
