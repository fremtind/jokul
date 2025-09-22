"use client";

import { Chip } from "@fremtind/jokul/chip";
import { ChevronDownIcon } from "@fremtind/jokul/icon";
import styles from "./component-filter-toolbar.module.scss";
import { Button } from "@fremtind/jokul/button";
import { Menu, MenuItem, MenuItemCheckbox } from "@fremtind/jokul/menu";
import { useUserPreferences } from "@/context/UserPreferencesContext/UserPreferencesContext";
import { COMPONENT_GRID_SIZES } from "@/context/UserPreferencesContext/types";

const componentKeywords = [
    "Knapper",
    "Skjema",
    "Navigasjon",
    "Layout",
    "Feedback",
];

type ComponentFilterToolbarProps = {
    selectedKeywords: string[] | null;
    onSelectedKeywordsChangeAction: (keywords: string[]) => void;
};

export const ComponentFilterToolbar = ({
    selectedKeywords,
    onSelectedKeywordsChangeAction,
}: ComponentFilterToolbarProps) => {
    const { preferences, setPreference } = useUserPreferences();

    return (
        <search title="komponenter" className={styles.componentFilterToolbar}>
            <div className={styles.category}>
                {componentKeywords.map((keyword) => (
                    <Chip
                        key={keyword}
                        variant="filter"
                        selected={selectedKeywords?.includes(keyword)}
                        onClick={() =>
                            onSelectedKeywordsChangeAction(
                                selectedKeywords?.includes(keyword)
                                    ? selectedKeywords.filter(
                                          (k) => k !== keyword,
                                      )
                                    : [...(selectedKeywords || []), keyword],
                            )
                        }
                    >
                        {keyword}
                    </Chip>
                ))}
            </div>
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
                    onChange={() =>
                        setPreference(
                            "showComponentImage",
                            !preferences.showComponentImage,
                        )
                    }
                >
                    Se bilde
                </MenuItemCheckbox>
                <MenuItemCheckbox
                    aria-checked={preferences.showComponentDescription}
                    onChange={() =>
                        setPreference(
                            "showComponentDescription",
                            !preferences.showComponentDescription,
                        )
                    }
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
                            key={size}
                            onClick={() =>
                                setPreference("componentGridSize", size)
                            }
                        >
                            {size.replace(/^./, size[0].toUpperCase())}
                        </MenuItem>
                    ))}
                </Menu>
            </Menu>
        </search>
    );
};
