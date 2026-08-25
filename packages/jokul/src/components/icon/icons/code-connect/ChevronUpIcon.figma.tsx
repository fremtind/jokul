import { figma } from "@figma/code-connect";
import React from "react";
import { ChevronUpIcon } from "../ChevronUpIcon.jsx";

figma.connect(
    ChevronUpIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=15493%3A7207",
    {
        imports: [
            'import { ChevronUpIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <ChevronUpIcon {...props} />,
    },
);
