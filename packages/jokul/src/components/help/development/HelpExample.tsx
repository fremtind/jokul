import React, { type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { Flex } from "../../flex/Flex.jsx";
import { Text } from "../../typography/index.js";
import { Help } from "../Help.js";
import type { HelpProps } from "../types.js";

function getPosition(position?: string): HelpProps["position"] {
    switch (position) {
        case "Bottom":
            return "bottom";
        case "Left":
            return "left";
        case "Right":
            return "right";
        default:
            return "top";
    }
}

export const HelpExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const position = getPosition(choiceValues?.["Plassering"]);

    return (
        <Flex gap="xs">
            <Text>Egenandel ved skade</Text>
            <Help buttonText="Hjelp" position={position}>
                Egenandelen er beløpet du selv betaler når forsikringen brukes.
                Resten av skadekostnaden dekkes av forsikringen din.
            </Help>
        </Flex>
    );
};

export const helpExampleKnobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Plassering",
            values: ["Top", "Bottom", "Left", "Right"],
            defaultValue: 0,
        },
    ],
};
