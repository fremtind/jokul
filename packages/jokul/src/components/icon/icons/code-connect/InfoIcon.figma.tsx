import { figma } from "@figma/code-connect";
import React from "react";
import { InfoIcon } from "../InfoIcon.jsx";

figma.connect(
    InfoIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14606%3A9388",
    {
        imports: [
            'import { InfoIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <InfoIcon {...props} />,
    },
);
