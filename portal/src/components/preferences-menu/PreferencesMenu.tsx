"use client";

import {
    COMPONENT_GRID_SIZES,
    useUserPreferences,
} from "@/utils/user-preferences";
import { Button } from "@fremtind/jokul/button";
import { CheckIcon, ChevronDownIcon } from "@fremtind/jokul/icon";
import { Menu, MenuItem, MenuItemCheckbox } from "@fremtind/jokul/menu";

export function PreferencesMenu() {
    const { preferences, updatePreference } = useUserPreferences();

    return (
        <Menu
            initialPlacement="bottom-end"
            triggerElement={
                <Button
                    variant="ghost"
                    iconPosition="right"
                    icon={<ChevronDownIcon />}
                >
                    Visning
                </Button>
            }
        >
            <MenuItemCheckbox
                aria-checked={preferences.showComponentImage}
                onChange={() => {
                    updatePreference(
                        "showComponentImage",
                        !preferences.showComponentImage,
                    );
                }}
            >
                Se bilde
            </MenuItemCheckbox>
            <MenuItemCheckbox
                aria-checked={preferences.showComponentDescription}
                onChange={() => {
                    updatePreference(
                        "showComponentDescription",
                        !preferences.showComponentDescription,
                    );
                }}
            >
                Se beskrivelse
            </MenuItemCheckbox>
            <Menu
                initialPlacement="right-end"
                triggerElement={
                    <MenuItem expandable={true}>Størrelse</MenuItem>
                }
            >
                {COMPONENT_GRID_SIZES.map((size) => (
                    <MenuItem
                        icon={
                            preferences.componentGridSize === size && (
                                <CheckIcon />
                            )
                        }
                        key={size}
                        onClick={() => {
                            updatePreference("componentGridSize", size);
                        }}
                    >
                        {size.replace(/^./, size[0].toUpperCase())}
                    </MenuItem>
                ))}
            </Menu>
        </Menu>
    );
}
