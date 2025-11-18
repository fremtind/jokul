import { figma } from "@figma/code-connect";
import React from "react";
import { SupportLabel } from "./SupportLabel.js";

figma.connect(
    SupportLabel,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2388%3A376",
    {
        imports: [
            'import { SupportLabel } from "@fremtind/jokul/components/input-group";',
        ],
        props: {
            labelType: figma.enum("Type", {
                Help: "help",
                Error: "error",
            }),
            label: figma.enum("Type", {
                Help: figma.textContent("Support Text"),
                Error: figma.textContent("Error Text"),
            }),
        },
        example: (props) => <SupportLabel id="my-support-label" {...props} />,
    },
);
