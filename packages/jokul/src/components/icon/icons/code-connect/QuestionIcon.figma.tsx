import { figma } from "@figma/code-connect";
import React from "react";
import { QuestionIcon } from "../QuestionIcon.jsx";

figma.connect(
    QuestionIcon,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14606%3A9464",
    {
        imports: [
            'import { QuestionIcon } from "@fremtind/jokul/components/icon";',
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
        example: (props) => <QuestionIcon {...props} />,
    },
);
