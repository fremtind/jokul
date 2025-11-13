import { figma } from "@figma/code-connect";
import React from "react";
import { MinusIcon } from "../MinusIcon.jsx";

figma.connect(
    MinusIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14606%3A9463",
    {
        imports: [
            'import { MinusIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            bold: figma.enum("Weight", {
                Bold: true,
            }),
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <MinusIcon {...props} />,
    },
);
