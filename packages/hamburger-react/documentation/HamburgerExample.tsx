import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import React, { FC, useState } from "react";
import { Hamburger } from "../src";

export const hamburgerExampleKnobs: ExampleKnobsProps = {
    boolProps: ["Med tekst", "Tekst før knapp", "Skaler tekst ved hover"],
};

export const HamburgerExample: FC<ExampleComponentProps> = ({ boolValues }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div>
                <Hamburger
                    aria-controls="jkl-example-menu-placeholder"
                    id="jkl-example-hamburger"
                    isOpen={isOpen}
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
            </div>
            <div
                id="jkl-example-menu-placeholder"
                aria-labelledby="jkl-example-hamburger"
                role="group"
                hidden={!isOpen}
            >
                Menyinnholdet ville vært inni et element med disse attributtene
            </div>
        </div>
    );
};

export const hamburgerExampleCode: CodeExample = ({ boolValues }) => `
const [isOpen, setIsOpen] = useState(false);
return (
    <div>
        <div>
            <Hamburger
                aria-controls="jkl-example-menu-placeholder"
                id="jkl-example-hamburger"
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                actionLabel={${
                    boolValues && boolValues["Med tekst"]
                        ? `{
                    close: "Lukk",
                    open: "Meny",
                    position: "${boolValues["Tekst før knapp"] ? "before" : "after"}",
                    animated: ${boolValues["Skaler tekst ved hover"]},
                }`
                        : "undefined"
                }}
            />
        </div>
        <div
            id="jkl-example-menu-placeholder"
            aria-labelledby="jkl-example-hamburger"
            role="group"
            hidden={!isOpen}
        >
            Menyinnholdet ville vært inni et element med disse attributtene
        </div>
    </div>
);
`;
