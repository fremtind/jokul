import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { IconButtonExample } from "./IconButtonExample";
import "@fremtind/jkl-icon-button/icon-button.css";

renderExample(
    <DevExample
        component={IconButtonExample}
        knobs={{
            choiceProps: [
                {
                    name: "Type",
                    values: ["clear", "search", "calendar"],
                    defaultValue: 1,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
