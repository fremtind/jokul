import React, { type CSSProperties, type FC } from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import tokens from "../../../core/tokens.js";
import { Card } from "../../card/Card.js";
import { Flex } from "../Flex.js";
import type { FlexDirection, GapValue } from "../types.js";

export const flexExampleKnobs: ExampleKnobsProps = {
    boolProps: ["wrap"],
    choiceProps: [
        {
            name: "direction",
            values: ["row", "row-reverse", "column", "column-reverse"],
            defaultValue: 0,
        },
        {
            name: "gap",
            values: Object.keys(tokens.spacing).sort(
                (a, b) => Number.parseInt(a) - Number.parseInt(b),
            ),
            defaultValue: 0,
        },
        {
            name: "rowGap",
            values: Object.keys(tokens.spacing).sort(
                (a, b) => Number.parseInt(a) - Number.parseInt(b),
            ),
            defaultValue: 0,
        },
        {
            name: "colGap",
            values: Object.keys(tokens.spacing).sort(
                (a, b) => Number.parseInt(a) - Number.parseInt(b),
            ),
            defaultValue: 0,
        },
    ],
};

const boxStyle: CSSProperties = {
    width: "250px",
    height: "150px",
    backgroundColor: "var(--jkl-color-background-container-low)",
    border: "1px solid var(--jkl-color-border-subdued)",
    borderRadius: "4px",
    display: "grid",
    placeContent: "center",
    flexGrow: 1,
};

export const FlexExample: FC<ExampleComponentProps> = ({
    boolValues,
    choiceValues,
}) => {
    const gap =
        choiceValues?.["gap"] === "0"
            ? undefined
            : (Number.parseInt(choiceValues?.["gap"] || "0") as GapValue);
    const colGap =
        choiceValues?.["colGap"] === "0"
            ? undefined
            : (Number.parseInt(choiceValues?.["colGap"] || "0") as GapValue);
    const rowGap =
        choiceValues?.["rowGap"] === "0"
            ? undefined
            : (Number.parseInt(choiceValues?.["rowGap"] || "0") as GapValue);

    return (
        <Flex
            asChild
            direction={choiceValues?.["direction"] as FlexDirection}
            wrap={boolValues?.["wrap"]}
            gap={gap}
            colGap={colGap}
            rowGap={rowGap}
            style={{ maxWidth: "80vw" }}
        >
            <Card variant="outlined" padding="l">
                <div style={boxStyle}>1</div>
                <div style={boxStyle}>2</div>
                <div style={boxStyle}>3</div>
                <div style={boxStyle}>4</div>
                <div style={boxStyle}>5</div>
                <div style={boxStyle}>6</div>
                <div style={boxStyle}>7</div>
                <div style={boxStyle}>8</div>
                <div style={boxStyle}>9</div>
            </Card>
        </Flex>
    );
};

export default FlexExample;
