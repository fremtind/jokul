import React, { type FC } from "react";
import type { ExampleComponentProps } from "utils/dev-example/index.js";
import { Flex } from "../../flex/Flex.jsx";
import { Text } from "../../typography/index.js";
import { Help } from "../Help.jsx";

export const MultipleHelpExample: FC<ExampleComponentProps> = () => {
    return (
        <Flex gap="xl">
            <Flex gap="xs">
                <Text>Egenandel ved skade</Text>
                <Help buttonText="Hjelp for egenandel">
                    Egenandelen er beløpet du selv betaler når forsikringen
                    brukes.
                </Help>
            </Flex>
            <Flex gap="xs">
                <Text>Forsikringssum</Text>
                <Help buttonText="Hjelp for forsikringssum">
                    Forsikringssummen er det maksimale beløpet forsikringen
                    dekker.
                </Help>
            </Flex>
        </Flex>
    );
};
