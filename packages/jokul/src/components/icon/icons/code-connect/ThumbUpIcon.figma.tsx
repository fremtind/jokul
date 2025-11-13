import { figma } from "@figma/code-connect";
import React from "react";
import { ThumbUpIcon } from "../ThumbUpIcon.jsx";

figma.connect(
    ThumbUpIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14471%3A132",
    {
        imports: [
            'import { ThumbUpIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <ThumbUpIcon {...props} />,
    },
);
