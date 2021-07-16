import React, { useState } from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ContentToggle } from "@fremtind/jkl-content-toggle-react";
import { Hamburger } from "../src";

const Example = ({ boolValues }: ExampleComponentProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Hamburger
            isOpen={isOpen}
            inverted={boolValues && boolValues["Invertert"]}
            onClick={() => setIsOpen(!isOpen)}
            addon={
                boolValues &&
                boolValues["Addon"] && (
                    <ContentToggle
                        secondary="Lukk"
                        showSecondary={isOpen}
                        variant="fade"
                        className="jkl-hamburger-example__addon"
                    >
                        Meny
                    </ContentToggle>
                )
            }
            addonPosition="before"
        />
    );
};

export default Example;
