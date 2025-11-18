import { figma } from "@figma/code-connect";
import React from "react";
import { OpenInNewIcon } from "../OpenInNewIcon.jsx";

figma.connect(
    OpenInNewIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=15493%3A7176",
    {
        imports: [
            'import { OpenInNewIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <OpenInNewIcon {...props} />,
    },
);
