import { figma } from "@figma/code-connect";
import React from "react";
import { TextArea } from "./TextArea.js";

figma.connect(
    TextArea,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=30701%3A395",
    {
        imports: [
            'import { TextArea } from "@fremtind/jokul/components/text-area";',
        ],
        props: {
            value: figma.string("Text"),
            nested: figma.nestedProps("Label", {
                label: figma.string("Text"),
            }),
            counter: figma.boolean("Show Counter", {
                true: { maxLength: 250 },
                false: undefined,
            }),
        },
        example: ({ nested, ...props }) => (
            <TextArea label={nested.label} {...props} />
        ),
    },
);
