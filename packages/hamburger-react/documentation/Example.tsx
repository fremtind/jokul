import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Hamburger } from "../src";

const Example = ({ boolValues }: ExampleComponentProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Hamburger
            isOpen={isOpen}
            inverted={boolValues && boolValues["Invertert"]}
            onClick={() => setIsOpen(!isOpen)}
            openLabel="Meny"
            closeLabel="Lukk"
        />
    );
};

export default Example;
