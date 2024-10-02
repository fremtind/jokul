import { type ColorScheme } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { DotsIcon } from "@fremtind/jkl-icons-react";
import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import React, { useCallback, useRef, useState, type FC } from "react";
import { CodeExample, ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../tooltip-react/src";
import { Menu, MenuItemCheckbox } from "../src";

export const MenuToggleSwitchExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "isOpen",
            values: ["true", "false", "tom"],
            defaultValue: 2,
        },
    ],
};

export const MenuToggleSwitchExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const isOpen = choiceValues?.["isOpen"] !== "tom" ? choiceValues?.["isOpen"] === "true" : undefined;

    const pref = useBrowserPreferences();
    const [colorScheme, setColorScheme] = useState(pref.prefersColorScheme);

    const bodyRef = useRef<HTMLDivElement>(null);
    const handleSetColorScheme = useCallback(
        (scheme: ColorScheme) => {
            if (!bodyRef.current) {
                return;
            }
            setColorScheme(scheme);
            // @ts-ignore Ikke stabilt i alle nettlesere ennå: https://caniuse.com/view-transitions
            if (!document.startViewTransition) {
                bodyRef.current.dataset.theme = scheme;
                return;
            }
            // @ts-ignore Ikke stabilt i alle nettlesere ennå: https://caniuse.com/view-transitions
            document.startViewTransition(() => {
                if (!bodyRef.current) {
                    return;
                }
                bodyRef.current.dataset.theme = scheme;
            });
        },
        [setColorScheme],
    );

    return (
        <div
            ref={bodyRef}
            className="jkl"
            data-theme={colorScheme}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
                padding: "1rem",
            }}
        >
            <Tooltip>
                <Menu
                    initialPlacement="bottom-start"
                    isOpen={isOpen}
                    triggerElement={
                        <TooltipTrigger>
                            <IconButton className="jkl-portal-navigation_menu-trigger">
                                <DotsIcon variant="medium" bold />
                            </IconButton>
                        </TooltipTrigger>
                    }
                >
                    <MenuItemCheckbox
                        aria-checked={colorScheme === "dark"}
                        onChange={(_, pressed) => {
                            handleSetColorScheme(pressed ? "dark" : "light");
                        }}
                    >
                        Mørkt tema
                    </MenuItemCheckbox>
                </Menu>
                <TooltipContent>Innstillinger</TooltipContent>
            </Tooltip>
        </div>
    );
};

export default MenuToggleSwitchExample;

export const MenuToggleSwitchExampleCode: CodeExample = () => `
// Vi bruker et Tooltip siden knappen ikke har tekst. For å sørge for
// at knappen fortsatt fungerer som trigger for menyen må vi legge Tooltip
// rundt hele menyen, og kun sende inn TooltipTrigger sammen med knappen
// som trigger for menyen.
<Tooltip>
    <Menu
        initialPlacement="bottom-start"
        triggerElement={
            <TooltipTrigger>
                <IconButton className="jkl-portal-navigation__menu-trigger">
                    <DotsIcon variant="medium" bold />
                </IconButton>
            </TooltipTrigger>
        }
    >
        <MenuItemCheckbox
            aria-checked={colorScheme === "dark"}
            onChange={(_, pressed) => {
                setColorScheme(pressed ? "dark" : "light");
            }}
        >
            Mørkt tema
        </MenuItemCheckbox>
    </Menu>
    <TooltipContent>Innstillinger</TooltipContent>
</Tooltip>
`;
