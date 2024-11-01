import React, { CSSProperties, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../utils/dev-example";
import { tokens } from "../../../core";
import { Flex } from "../Flex";

import "../styles/_index.scss";

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
            values: Object.keys(tokens.spacing).sort((a, b) => parseInt(a) - parseInt(b)),
            defaultValue: 0,
        },
        {
            name: "rowGap",
            values: Object.keys(tokens.spacing).sort((a, b) => parseInt(a) - parseInt(b)),
            defaultValue: 0,
        },
        {
            name: "colGap",
            values: Object.keys(tokens.spacing).sort((a, b) => parseInt(a) - parseInt(b)),
            defaultValue: 0,
        },
    ],
};

const boxStyle: CSSProperties = {
    backgroundColor: "var(--jkl-color-background-container-low)",
    border: "1px solid var(--jkl-color-border-subdued)",
    borderRadius: "4px",
};

export const FlexExample: FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    const gap = choiceValues?.["gap"] === "0" ? undefined : (parseInt(choiceValues?.["gap"] || "0") as GapValue);
    const colGap =
        choiceValues?.["colGap"] === "0" ? undefined : (parseInt(choiceValues?.["colGap"] || "0") as GapValue);
    const rowGap =
        choiceValues?.["rowGap"] === "0" ? undefined : (parseInt(choiceValues?.["rowGap"] || "0") as GapValue);

    return (
        <Flex center layout={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }}>
            <div style={boxStyle}>1</div>
            <div style={boxStyle}>2</div>
            <div style={boxStyle}>3</div>
            <div style={boxStyle}>4</div>
            <div style={boxStyle}>5</div>
            <div style={boxStyle}>6</div>
            <div style={boxStyle}>7</div>
            <div style={boxStyle}>8</div>
            <div style={boxStyle}>9</div>
        </Flex>
    );
};

export default FlexExample;
