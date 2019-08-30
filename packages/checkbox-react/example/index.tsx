import React from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "../src";
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

initTabListener();

const App = () => {
    const [isCool, changeCoolness] = React.useState(false);
    return (
        <>
            <Checkbox name="checkbox1" onChange={(name, value) => console.log(`${name} is now ${value}`)}>
                I am checkbox!
            </Checkbox>
            <Checkbox name="checkbox2" className="custom-classname">
                I am special
            </Checkbox>
            <Checkbox name="checkbox3" checked>
                I will never change
            </Checkbox>
            <Checkbox name="coolness" checked={isCool} onChange={() => changeCoolness(!isCool)}>
                I am {isCool ? "cool" : "not cool"}{" "}
            </Checkbox>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
