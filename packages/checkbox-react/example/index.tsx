import "@fremtind/jkl-checkbox/checkbox.css";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.css";
import React from "react";
import ReactDOM from "react-dom";
import { Checkbox, CheckboxGroup } from "../src";

initTabListener();

const App = () => {
    const [isCool, changeCoolness] = React.useState(false);
    return (
        <>
            <Checkbox name="checkbox1" onChange={(name, value) => alert(`${name} is now ${value}`)}>
                I am checkbox!
            </Checkbox>
            <Checkbox name="Checkbox without children" />
            <Checkbox name="checkbox3" checked>
                I will never change
            </Checkbox>
            <Checkbox name="coolness" checked={isCool} onChange={() => changeCoolness(!isCool)}>
                I am {isCool ? "cool" : "not cool"}{" "}
            </Checkbox>

            <CheckboxGroup legend="Checkbox group" choices={["I am checkbox", "Du you like multiple choices?"]} />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
