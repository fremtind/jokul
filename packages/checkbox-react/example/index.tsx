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
            <Checkbox
                name="checklist"
                value="checkbox1"
                onChange={(e) => console.log(`${e.target.value} is now ${e.target.checked}`)}
            >
                I am checkbox!
            </Checkbox>
            <Checkbox name="checklist" value="checkbox2" className="custom-classname">
                I am special
            </Checkbox>
            <Checkbox name="checklist" value="checkbox2" invalid={true}>
                I have an error
            </Checkbox>
            <Checkbox name="checklist" value="checkbox3" checked>
                I will never change
            </Checkbox>
            <Checkbox name="checklist" value="coolness" checked={isCool} onChange={() => changeCoolness(!isCool)}>
                I am {isCool ? "cool" : "not cool"}{" "}
            </Checkbox>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
