import { figma } from "@figma/code-connect";
import React from "react";
import { SearchIcon } from "../SearchIcon.jsx";

figma.connect(
    SearchIcon,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=14463%3A229",
    {
        imports: [
            'import { SearchIcon } from "@fremtind/jokul/components/icon";',
        ],
        props: {
            variant: figma.enum("Size", {
                Medium: "medium",
                Small: "small",
            }),
        },
        example: (props) => <SearchIcon {...props} />,
    },
);
