import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import React, { type ComponentPropsWithRef, type FC, forwardRef } from "react";
import { Button } from "../../button/Button.js";
import { ChevronDownIcon, ErrorIcon } from "../../icon/index.js";
import { Menu } from "../Menu.js";
import { MenuDivider } from "../MenuDivider.js";
import { MenuItem } from "../MenuItem.js";

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
export const MenuExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
    displayValues,
}) => {
    const isOpen =
        choiceValues?.["isOpen"] !== "tom"
            ? choiceValues?.["isOpen"] === "true"
            : undefined;

    /* Force a re-render whenever theme or density changes */
    const key =
        displayValues?.theme || `none${displayValues?.density}` || "none";

    const CustomLink = forwardRef<
        HTMLAnchorElement,
        ComponentPropsWithRef<"a">
    >(function CustomLink(props, ref) {
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
                keepOpenOnClickOutside={
                    boolValues?.["Ikke lukk ved klikk utenfor"]
                }
                triggerElement={
                    <Button
                        variant="ghost"
                        data-testid="open-menu"
                        iconRight={<ChevronDownIcon bold />}
                    >
                        Ola Nordmann
                    </Button>
                }
            >
                <MenuItem>Forsikringsprofil</MenuItem>
                <MenuItem onClick={() => console.log("Hei fra Dokumenter")}>
                    Dokumenter
                </MenuItem>
                <MenuItem icon={<ErrorIcon />}>Skadesaker</MenuItem>
                <MenuDivider />
                <Menu
                    triggerElement={
                        <MenuItem expandable={true}>Ressurser</MenuItem>
                    }
                >
                    <MenuItem as="a" href="https://jokul.fremtind.no/">
                        Jøkuls hjemmeside
                    </MenuItem>
                    <MenuItem as="a" href="https://fremtind.no/">
                        Fremtind Forsikring
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                        as={CustomLink}
                        href="https://www.w3.org/TR/WCAG22/"
                        external
                        target="_blank"
                    >
                        WCAG 2.2
                    </MenuItem>
                </Menu>
            </Menu>
        </div>
    );
};

export default MenuExample;
