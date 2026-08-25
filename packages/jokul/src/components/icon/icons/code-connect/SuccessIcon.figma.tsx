import { figma } from "@figma/code-connect";
import React from "react";
import { SuccessIcon } from "../SuccessIcon.jsx";

figma.connect(
    SuccessIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14606%3A2522",
    {
        imports: [
            'import { SuccessIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <SuccessIcon {...props} />,
    },
);
