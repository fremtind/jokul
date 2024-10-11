import React, { ComponentPropsWithRef, FC, forwardRef } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../doc-utils";
import { Button } from "../../button";
import { ChevronDownIcon, ErrorIcon } from "../../icon";
import { Menu } from "../Menu";
import { MenuDivider } from "../MenuDivider";
import { MenuItem } from "../MenuItem";

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

    const CustomLink = forwardRef<HTMLAnchorElement, ComponentPropsWithRef<"a">>(function CustomLink(props, ref) {
        return (
            <a ref={ref} {...props}>
                {props.children}
            </a>
        );
    });

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
                <MenuDivider />
                <MenuItem as="a" href="https://jokul.fremtind.no/">
                    Jøkuls hjemmeside
                </MenuItem>
                <MenuItem as={CustomLink} href="https://www.fremtind.no/" external target="_blank">
                    Fremtind Forsikring
                </MenuItem>
            </Menu>
        </div>
    );
};

export default MenuExample;