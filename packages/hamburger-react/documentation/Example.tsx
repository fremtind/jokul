import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Hamburger } from "../src";

const Example = ({ boolValues }: ExampleComponentProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <Hamburger
                isOpen={isOpen}
                inverted={boolValues && boolValues["Invertert"]}
                onClick={() => setIsOpen(!isOpen)}
            />
        </div>
    );
};

export default Example;
