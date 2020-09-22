import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Hamburger } from "../src";
import "@fremtind/jkl-hamburger/hamburger.css";
import "@fremtind/jkl-core/core.min.css";

const Example = ({ boolValues }: ExampleComponentProps) => {
    const [active, toggleActive] = useState(false);
    const toggleState = () => toggleActive(!active);

    const description = "Meny knapp";

    const divRef = React.useRef(null);

    return (
        <div style={{ padding: "20px" }} ref={divRef}>
            <Hamburger
                active={active}
                negative={boolValues && boolValues["Invertert"]}
                description={description}
                onClick={toggleState}
            />
        </div>
    );
};

export default Example;
