import React from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Ghost } from "./Ghost";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import { Tertiary } from "./Tertiary";
import "./style.scss";

export const buttonExampleKnobs: ExampleKnobsProps = {
    boolProps: [
        "withLoader",
        "isLoading",
        "icon",
        {
            prop: "label",
            defaultValue: true,
        },
    ],
    choiceProps: [
        {
            name: "iconPosition",
            values: ["left", "right"],
            defaultValue: 0,
        },
    ],
};

export const ButtonExample: React.FC<ExampleComponentProps> = ({ boolValues, choiceValues }) => {
    return (
        <div className="jkl-button-example">
            <div>
                <Primary boolValues={boolValues} choiceValues={choiceValues} />
            </div>
            <div>
                <Secondary boolValues={boolValues} choiceValues={choiceValues} />
            </div>
            <div>
                <Tertiary boolValues={boolValues} choiceValues={choiceValues} />
            </div>
            <div>
                <Ghost boolValues={boolValues} choiceValues={choiceValues} />
            </div>
        </div>
    );
};
