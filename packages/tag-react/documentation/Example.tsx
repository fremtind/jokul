import React from "react";
import { DevExample } from "../../../doc-utils";
import { TagExample } from "./TagExample";
import "../../tag/tag.scss";
import "../../icon-button/icon-button.scss";

export default function Example() {
    return (
        <DevExample
            title="Tag"
            component={TagExample}
            knobs={{
                boolProps: [
                    {
                        defaultValue: false,
                        prop: "dismissable",
                    },
                ],
            }}
        />
    );
}
