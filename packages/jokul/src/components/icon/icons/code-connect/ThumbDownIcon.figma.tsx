import { figma } from "@figma/code-connect";
import React from "react";
import { ThumbDownIcon } from "../ThumbDownIcon.jsx";

figma.connect(
    ThumbDownIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14471%3A133",
    {
        imports: [
            'import { ThumbDownIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ThumbDownIcon {...props} />,
    },
);
