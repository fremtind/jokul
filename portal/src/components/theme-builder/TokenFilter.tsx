"use client";

import { Flex } from "@fremtind/jokul/flex";
import { Search } from "@fremtind/jokul/search";
import { ToggleSwitch } from "@fremtind/jokul/toggle-switch";
import { useThemeBuilder } from "./ThemeBuilderProvider";

/**
 * Søkefelt + "vis kun endrede"-toggle for å begrense token-lista.
 * Begge styrer felles state i provideren slik at filtreringen er konsistent
 * mellom editor (visuell) og Farge-tokens-fanen.
 */
export function TokenFilter() {
    const { filter, setFilter, showOnlyEdited, setShowOnlyEdited, isDirty } =
        useThemeBuilder();

    return (
        <Flex direction="row" wrap="wrap" alignItems="center" gap="m">
            <Search
                label="Filtrer tokens"
                labelProps={{ srOnly: true }}
                placeholder="text.default, warning.background, …"
                icon="filter_list"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                data-size="small"
            />
            <ToggleSwitch
                aria-pressed={showOnlyEdited}
                disabled={!isDirty}
                onChange={(_event, pressed) => setShowOnlyEdited(pressed)}
            >
                Vis kun endrede
            </ToggleSwitch>
        </Flex>
    );
}
