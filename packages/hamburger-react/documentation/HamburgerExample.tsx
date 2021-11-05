import React, { VFC, useState } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Hamburger } from "../src";

export const HamburgerExample: VFC<ExampleComponentProps> = ({ boolValues }) => {
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
                          animated: boolValues["Skaler tekst ved hover"],
                      }
                    : undefined
            }
        />
    );
};
