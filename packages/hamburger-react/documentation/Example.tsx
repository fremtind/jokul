import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Hamburger } from "../src";

const Example = ({ boolValues }: ExampleComponentProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Hamburger
            isOpen={isOpen}
            inverted={boolValues && boolValues["Invertert"]}
            onClick={() => setIsOpen(!isOpen)}
            actionLabel={
                boolValues && boolValues["Med tekst"]
                    ? {
                          close: "Lukk",
                          open: "Meny",
                          position: boolValues["Tekst før knapp"] ? "before" : "after",
                      }
                    : undefined
            }
        />
    );
};

export default Example;
