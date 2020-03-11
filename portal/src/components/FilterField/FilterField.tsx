import React from "react";
import { ActionTextField } from "@fremtind/jkl-text-input-react";

interface Props {
    filter: string;
    setFilter: (filter: string) => void;
}

export function FilterField({ filter, setFilter }: Props) {
    return (
        <ActionTextField
            forceCompact
            variant="small"
            label="Filtrér komponenter"
            action={{
                icon: "clear",
                label: "Nullstill filtrering",
                onClick: () => setFilter(""),
            }}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="jkl-spacing--bottom-2"
        />
    );
}
