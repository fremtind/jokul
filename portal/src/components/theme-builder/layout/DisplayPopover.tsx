"use client";

import { Button } from "@fremtind/jokul/button";
import { Flex } from "@fremtind/jokul/flex";
import { Icon } from "@fremtind/jokul/icon";
import { Popover } from "@fremtind/jokul/popover";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "@fremtind/jokul/segmented-control";
import { useState } from "react";
import { DATA_ATTRIBUTES, type DisplayState } from "../displayAttributes";

type DisplayPopoverProps = {
    state: DisplayState;
    onChange: (next: DisplayState) => void;
};

/**
 * Ghost-knapp som åpner en popover med én SegmentedControl per entry i
 * {@link DATA_ATTRIBUTES}. Legger du til en ny data-attributt der, dukker
 * det opp en ny kontroll her uten andre endringer.
 */
export function DisplayPopover({ state, onChange }: DisplayPopoverProps) {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <Popover.Trigger asChild>
                <Button
                    variant="ghost"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-haspopup="dialog"
                    icon={<Icon>brush</Icon>}
                >
                    Visningsmodus
                </Button>
            </Popover.Trigger>
            <Popover.Content padding={24}>
                <Flex direction="column" gap="m">
                    {DATA_ATTRIBUTES.map((attr) => (
                        <SegmentedControl key={attr.key} legend={attr.label}>
                            {attr.values.map((value) => (
                                <SegmentedControlButton
                                    key={value}
                                    name={`display-${attr.key}`}
                                    value={value}
                                    checked={state[attr.key] === value}
                                    onChange={() =>
                                        onChange({
                                            ...state,
                                            [attr.key]: value,
                                        })
                                    }
                                >
                                    {value}
                                </SegmentedControlButton>
                            ))}
                        </SegmentedControl>
                    ))}
                </Flex>
            </Popover.Content>
        </Popover>
    );
}
