import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { CSSProperties, FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../utils/dev-example";
import { Flex } from "../Flex";

import "../styles/_index.scss";

export const flexExampleKnobs: ExampleKnobsProps = {
    boolProps: ["fill", "inline"],
    choiceProps: [
        {
            name: "layout",
            values: [
                "auto",
                "1",
                "2",
                "3",
                "4",
                "6",
                "4.8",
                "8.4",
                "2.10",
                "10.2",
                "3.9",
                "9.3",
                "5.7",
                "7.5",
                "{ xs: 1, md: 2, lg: 4 }",
                "{ xs: 1, md: 'auto' }",
            ],
            defaultValue: 0,
        },
        {
            name: "gap",
            values: [
                "none",
                "xs",
                "sm",
                "md",
                "lg",
                "xl",
                "xxl",
                "xxl xl",
                "xxl lg",
                "xxl md",
                "xxl sm",
                "xxl xs",
                "xl none",
                "xl xxl",
                "xl lg",
                "xl md",
                "xl sm",
                "xl xs",
                "xl none",
                "lg xxl",
                "lg xl",
                "lg md",
                "lg sm",
                "lg xs",
                "lg none",
                "md xxl",
                "md xl",
                "md lg",
                "md sm",
                "md xs",
                "md none",
                "sm xxl",
                "sm xl",
                "sm lg",
                "sm md",
                "sm xs",
                "sm none",
                "xs xxl",
                "xs xl",
                "xs lg",
                "xs md",
                "xs sm",
                "xs none",
                "none xxl",
                "none xl",
                "none lg",
                "none md",
                "none sm",
                "none xs",
            ],
            defaultValue: 0,
        },
        {
            name: "direction",
            values: ["row", "column", "row-reverse", "column-reverse"],
            defaultValue: 0,
        },
        {
            name: "center",
            values: ["false", "true", "xxl", "xl", "lg", "md"],
            defaultValue: 0,
        },
        {
            name: "align",
            values: ["normal", "start", "center", "end", "baseline", "stretch"],
            defaultValue: 0,
        },
        {
            name: "alignContent",
            values: [
                "normal",
                "start",
                "center",
                "end",
                "baseline",
                "stretch",
                "space-around",
                "space-between",
                "space-evenly",
            ],
            defaultValue: 0,
        },
        {
            name: "justify",
            values: ["normal", "start", "center", "end", "space-around", "space-between", "space-evenly"],
            defaultValue: 0,
        },
        {
            name: "wrap",
            values: ["wrap", "nowrap", "reverse"],
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
    return (
        <Flex fill gap="xs" layout={1}>
            <div style={boxStyle}>1</div>
            <div style={boxStyle}>2</div>
            <div style={boxStyle}>3</div>
            <div style={boxStyle}>4</div>
            <div style={boxStyle}>5</div>
            <div style={boxStyle}>6</div>
            <div style={boxStyle}>7</div>
            <div style={boxStyle}>8</div>
            <div style={boxStyle}>9</div>
            <div style={boxStyle}>10</div>
            <div style={boxStyle}>11</div>
            <div style={boxStyle}>12</div>
        </Flex>
    );
};

export default FlexExample;
