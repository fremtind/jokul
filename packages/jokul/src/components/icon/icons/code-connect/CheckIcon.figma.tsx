import { figma } from "@figma/code-connect";
import React from "react";
import { CheckIcon } from "../CheckIcon.jsx";

figma.connect(
    CheckIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14571%3A213",
    {
        imports: [
            'import { CheckIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <CheckIcon {...props} />,
    },
);
