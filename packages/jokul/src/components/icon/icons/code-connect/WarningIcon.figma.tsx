import { figma } from "@figma/code-connect";
import React from "react";
import { WarningIcon } from "../WarningIcon.jsx";

figma.connect(
    WarningIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14463%3A7735",
    {
        imports: [
            'import { WarningIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <WarningIcon {...props} />,
    },
);
