import React from "react";
import { Checkbox } from "../src";
import "@fremtind/jkl-core/core.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-field-group/field-group.min.css";

const Example = () => {
    const [isCool, changeCoolness] = React.useState(false);
    return (
        <section className="jkl-spacing--top-3 jkl-spacing--bottom-3">
            <Checkbox
                name="checklist"
                value="checkbox"
                onChange={(e) => console.log(`${e.target.value} is now ${e.target.checked}`)}
            >
                I am checkbox!
            </Checkbox>
            <Checkbox name="checklist" value="custom" className="custom-classname">
                I am special
            </Checkbox>
            <Checkbox name="checklist" value="error" invalid={true}>
                I have an error
            </Checkbox>
            <Checkbox name="checklist" value="static" checked>
                I will never change
            </Checkbox>
            <Checkbox name="checklist" value="controlled" checked={isCool} onChange={() => changeCoolness(!isCool)}>
                I am {isCool ? "cool" : "not cool"}{" "}
            </Checkbox>
        </section>
    );
};

export default Example;
