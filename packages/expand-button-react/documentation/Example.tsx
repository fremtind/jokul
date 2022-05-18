import React from "react";
import { DevExample } from "../../../doc-utils";
import { ExpandButtonExample } from "./ExpandButtonExample";
import { ExpandSectionExample } from "./ExpandSectionExample";
import "../../expand-button/expand-button.scss";
import "../../icons/animated-icons.scss";

export default function Example() {
    return (
        <>
            <DevExample
                title="ExpandSection"
                component={ExpandSectionExample}
                knobs={{
                    boolProps: ["Compact"],
                }}
            />
            <DevExample
                title="ExpandButton"
                component={ExpandButtonExample}
                knobs={{
                    boolProps: ["Compact"],
                }}
            />
        </>
    );
}
