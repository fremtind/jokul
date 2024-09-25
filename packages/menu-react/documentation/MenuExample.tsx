import { ErrorIcon, ChevronDownIcon } from "@fremtind/jkl-icons-react";
import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { Button } from "../../button-react";
import { Menu } from "../src/Menu";
import { MenuItem } from "../src/MenuItem";

export const MenuExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "isOpen",
            values: ["true", "false", "tom"],
            defaultValue: 2,
        },
    ],
    boolProps: ["Ikke lukk ved klikk utenfor"],
};
export const MenuExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues, displayValues }) => {
    const isOpen = choiceValues?.["isOpen"] !== "tom" ? choiceValues?.["isOpen"] === "true" : undefined;

    /* Force a re-render whenever theme or density changes */
    const key = displayValues?.theme || "none" + displayValues?.density || "none";

    return (
        <div
            style={{
                width: "500px",
                textAlign: "center",
            }}
        >
            <Menu
                id={key}
                initialPlacement="bottom-end"
                isOpen={isOpen}
                keepOpenOnClickOutside={boolValues?.["Ikke lukk ved klikk utenfor"]}
                triggerElement={
                    <Button variant="ghost" iconRight={<ChevronDownIcon bold />}>
                        Ola Nordmann
                    </Button>
                }
            >
                <MenuItem>Forsikringsprofil</MenuItem>
                <MenuItem onClick={() => console.log("Hei fra Dokumenter")}>Dokumenter</MenuItem>
                <MenuItem icon={<ErrorIcon />}>Skadesaker</MenuItem>
            </Menu>
        </div>
    );
};

export default MenuExample;
export const MenuExampleCode: CodeExample = ({ boolValues, choiceValues }) => {
    const isOpen = !choiceValues || choiceValues["isOpen"] === "tom" ? `` : `\n    isOpen={${choiceValues["isOpen"]}}`;
    const keepOpen = boolValues?.["Ikke lukk ved klikk utenfor"] ? `\n    keepOpenOnClickOutside` : ``;

    return `
<Menu
    initialPlacement="bottom-end"${isOpen}${keepOpen}
    triggerElement={
        <Button variant="ghost" iconRight={<ChevronDownIcon bold />}>
            Ola Nordmann
        </Button>
    }
>
    <MenuItem>Forsikringsprofil</MenuItem>
    <MenuItem onClick={() => console.log("Hei fra Skadesaker")}>Dokumenter</MenuItem>
    <MenuItem icon={<ErrorIcon />}>Skadesaker</MenuItem>
</Menu>
`;
};
