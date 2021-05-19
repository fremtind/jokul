import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { Blocking } from "./Blocking";

export const Example = ({}: ExampleComponentProps) => {
    return (
        <div className="jkl-cookie-consent-example">
            <Blocking />
        </div>
    );
};

export default Example;
