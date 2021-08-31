import React from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import { Tertiary } from "./Tertiary";
import "./style.scss";

export const Example: React.FC<ExampleComponentProps> = ({ boolValues }) => {
    return (
        <div className="jkl-button-example">
            <div>
                <Primary boolValues={boolValues} />
            </div>
            <div>
                <Secondary boolValues={boolValues} />
            </div>
            <div>
                <Tertiary boolValues={boolValues} />
            </div>
        </div>
    );
};

export default Example;
