import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { useCallback, useRef, useState, type FC } from "react";
import { ColorScheme } from "../../../core/types.js";
import { useBrowserPreferences } from "../../../hooks/useBrowserPreferences/useBrowserPreferences.js";
import { DotsIcon } from "../../icon/index.js";
import { IconButton } from "../../icon-button/IconButton.js";
import { Tooltip } from "../../tooltip/Tooltip.js";
import { TooltipContent } from "../../tooltip/TooltipContent.js";
import { TooltipTrigger } from "../../tooltip/TooltipTrigger.js";
import { Menu } from "../Menu.js";
import { MenuItemCheckbox } from "../MenuItemCheckbox.js";

export const MenuToggleSwitchExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "isOpen",
            values: ["true", "false", "tom"],
            defaultValue: 2,
        },
    ],
};

export const MenuToggleSwitchExample: FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const isOpen =
        choiceValues?.["isOpen"] !== "tom"
            ? choiceValues?.["isOpen"] === "true"
            : undefined;

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
