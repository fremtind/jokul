import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Primary } from "./Primary";
import { Secondary } from "./Secondary";
import { Tertiary } from "./Tertiary";

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
