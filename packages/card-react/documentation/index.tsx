import React from "react";

// Import utils for showing example
import { renderExample, DevExample } from "../../../doc-utils";

// Import actual example and component stylesheet (specific for this component):
import { InfoCardExample } from "./InfoCardExample";
import { NavCardExample, navCardExampleCode } from "./NavCardExample";
import { TaskCardExample } from "./TaskCardExample";
import "@fremtind/jkl-card/card.css";
import "@fremtind/jkl-button/button.css";
import "@fremtind/jkl-checkbox/checkbox.css";
import "@fremtind/jkl-select/select.css";
import "@fremtind/jkl-tag/tag.css";

renderExample(
    <>
        <DevExample
            knobs={{
                choiceProps: [
                    {
                        name: "Padding",
                        values: ["m", "l", "xl"],
                        defaultValue: 1,
                    },
                    {
                        name: "Top Padding",
                        values: ["auto", "m", "l", "xl", "2xl", "3xl"],
                        defaultValue: 0,
                    },
                ],
            }}
            component={InfoCardExample}
        />
        <DevExample
            knobs={{
                boolProps: ["Image", "Tag", "Description", "Ekstra info"],
                choiceProps: [
                    {
                        name: "Padding",
                        values: ["m", "l", "xl"],
                        defaultValue: 1,
                    },
                    {
                        name: "Top Padding",
                        values: ["auto", "m", "l", "xl", "2xl", "3xl"],
                        defaultValue: 0,
                    },
                ],
            }}
            component={NavCardExample}
            codeExample={navCardExampleCode}
        />
        <DevExample component={TaskCardExample} />
    </>,
    document.getElementById("app"),
);
