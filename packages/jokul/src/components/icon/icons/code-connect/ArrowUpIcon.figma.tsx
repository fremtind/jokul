import { figma } from "@figma/code-connect";
import React from "react";
import { ArrowUpIcon } from "../ArrowUpIcon.jsx";

figma.connect(
    ArrowUpIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7174",
    {
        imports: [
            'import { ArrowUpIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ArrowUpIcon {...props} />,
    },
);
