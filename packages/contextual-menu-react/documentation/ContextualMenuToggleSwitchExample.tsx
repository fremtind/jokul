import { type ColorScheme } from "@fremtind/jkl-core";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { DotsIcon } from "@fremtind/jkl-icons-react";
import { useBrowserPreferences } from "@fremtind/jkl-react-hooks";
import React, { type FC, useCallback, useState, useRef } from "react";
import { ExampleComponentProps, ExampleKnobsProps, CodeExample } from "../../../doc-utils";
import { ContextualMenu, ContextualMenuItemCheckbox } from "../src";

export const contextualMenuToggleSwitchExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "isOpen",
            values: ["true", "false", "tom"],
            defaultValue: 2,
        },
    ],
};

export const ContextualMenuToggleSwitchExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
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
                height: "5rem",
                width: "100%",
                padding: "1rem",
            }}
        >
            <ContextualMenu
                initialPlacement="bottom-start"
                isOpen={isOpen}
                triggerElement={
                    <IconButton className="jkl-portal-navigation__contextual-menu-trigger" title="Åpne innstillinger">
                        <DotsIcon variant="medium" bold />
                    </IconButton>
                }
            >
                <ContextualMenuItemCheckbox
                    aria-checked={colorScheme === "dark"}
                    onChange={(_, pressed) => {
                        handleSetColorScheme(pressed ? "dark" : "light");
                    }}
                >
                    Mørkt tema
                </ContextualMenuItemCheckbox>
            </ContextualMenu>
        </div>
    );
};

export default ContextualMenuToggleSwitchExample;

export const contextualMenuToggleSwitchExampleCode: CodeExample = () => `
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
    <div ref={bodyRef} className="jkl" data-theme={colorScheme}>
        <ContextualMenu
            initialPlacement="bottom-start"
            triggerElement={
                <IconButton className="jkl-portal-navigation__contextual-menu-trigger" title="Åpne innstillinger">
                    <DotsIcon variant="medium" bold />
                </IconButton>
            }
        >
            <ContextualMenuItemCheckbox
                aria-checked={colorScheme === "dark"}
                onChange={(_, pressed) => {
                    handleSetColorScheme(pressed ? "dark" : "light");
                }}
            >
                Mørkt tema
            </ContextualMenuItemCheckbox>
        </ContextualMenu>
    </div>
);
`;
