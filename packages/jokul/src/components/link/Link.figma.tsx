import { figma } from "@figma/code-connect";
import React from "react";
import { Link } from "./Link.js";

figma.connect(
    Link,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=2006%3A2335",
    {
        imports: ['import { Link } from "@fremtind/jokul/components/link";'],
        props: {
            children: figma.string("Text"),
            external: figma.boolean("Show External Arrow"),
        },
        example: (props) => <Link {...props} />,
    },
);
