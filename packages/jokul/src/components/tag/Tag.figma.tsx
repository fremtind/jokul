import { figma } from "@figma/code-connect";
import React from "react";
import { Tag } from "./Tag.jsx";

figma.connect(
    Tag,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=2004%3A303",
    {
        imports: ['import { Tag } from "@fremtind/jokul/components/tag";'],
        props: {
            children: figma.string("Text"),
            variant: figma.enum("Variant", {
                Error: "error",
                Warning: "warning",
                Success: "success",
                Neutral: "neutral",
                Info: "info",
            }),
        },
        example: (props) => <Tag {...props} />,
    },
);
