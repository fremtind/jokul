import { figma } from "@figma/code-connect";
import React from "react";
import { PlusIcon } from "../PlusIcon.jsx";

figma.connect(
    PlusIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14571%3A8298",
    {
        imports: [
            'import { PlusIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <PlusIcon {...props} />,
    },
);
