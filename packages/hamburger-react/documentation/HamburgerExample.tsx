import React, { FC, useState } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Hamburger } from "../src";

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
