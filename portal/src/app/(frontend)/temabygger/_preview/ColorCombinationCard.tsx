import { Card } from "@fremtind/jokul/card";
import { Flex } from "@fremtind/jokul/flex";
import { Text } from "@fremtind/jokul/typography";
import type { CSSProperties } from "react";
import type { ColorRole } from "../generator/types";

import styles from "./color-combination.module.scss";

type ContrastType = "text" | "border" | "background";

type ColorCombinationCardProps = {
    foregroundRole: ColorRole;
    backgroundRole: ColorRole;
    contrastError?: {
        actualContrast: number;
        expectedContrast: number;
    };
};

export const ColorCombinationCard = ({
    backgroundRole,
    foregroundRole,
    contrastError,
}: ColorCombinationCardProps): JSX.Element => {
    const type = foregroundRole.split(".")[0] as ContrastType;

    return (
        <Card
            as={Flex}
            padding="s"
            direction="column"
            gap="8"
            style={{ flexBasis: "30ch" }}
        >
            <Card
                outlined={backgroundRole === "background.container"}
                as={Flex}
                alignItems="center"
                justifyContent="center"
                style={{
                    backgroundColor: `var(--jkl-color-${backgroundRole.replaceAll(".", "-")})`,
                    aspectRatio: "2",
                }}
            >
                <ColorCombinationExample
                    type={type}
                    colorRole={foregroundRole}
                />
            </Card>
            <Text short size="s" bold>
                {foregroundRole}
            </Text>
            {contrastError && (
                <Text short size="s">
                    <Text short as="span" bold className={styles.contrastError}>
                        {contrastError.actualContrast}:1
                    </Text>
                    <Text short as="span">
                        Krever {contrastError.expectedContrast}:1 mot{" "}
                        {backgroundRole.split(".")[1]}
                    </Text>
                </Text>
            )}
        </Card>
    );
};

const ColorCombinationExample = ({
    type,
    colorRole,
}: { type: ContrastType; colorRole: ColorRole }) => {
    const colorStyle: CSSProperties = {
        color: `var(--jkl-color-${colorRole.replaceAll(".", "-")})`,
    };

    switch (type) {
        case "text":
            return (
                <Text size="l" style={colorStyle}>
                    Abc
                </Text>
            );
        case "border":
            return (
                <div
                    style={{
                        width: "74px",
                        height: "74px",
                        borderRadius: "var(--jkl-border-radius-s)",
                        border: "1px solid currentColor",
                        ...colorStyle,
                    }}
                />
            );
        case "background":
            return (
                <div
                    style={{
                        width: "74px",
                        height: "74px",
                        borderRadius: "var(--jkl-border-radius-s)",
                        backgroundColor: "currentColor",
                        ...colorStyle,
                    }}
                />
            );
    }
};
