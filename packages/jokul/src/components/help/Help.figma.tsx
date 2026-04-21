import { figma } from "@figma/code-connect";
import React from "react";
import { Help } from "./Help.js";

figma.connect(
    Help,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=26847%3A10089",
    {
        imports: ['import { Help } from "@fremtind/jokul/components/help";'],
        props: {
            nested: figma.nestedProps("Help Popover", {
                children: figma.string("Text"),
            }),
        },
        example: (props) => (
            <Help buttonText="Hjelp">{props.nested.children}</Help>
        ),
    },
);
