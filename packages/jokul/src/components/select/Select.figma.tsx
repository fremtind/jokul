import { figma } from "@figma/code-connect";
import React from "react";
import { Select } from "./Select.js";

figma.connect(
    Select,
    "https://www.figma.com/design/jnE6mPCHVfbjn7a0AiKGEK?node-id=30701%3A2283",
    {
        imports: [
            'import { Select } from "@fremtind/jokul/components/select";',
        ],
        props: {
            nested: figma.nestedProps("Label", {
                label: figma.string("Text"),
            }),
            invalid: figma.enum("State", { Error: true }),
        },
        example: ({ nested, ...props }) => (
            <Select
                label={nested.label}
                name={nested.label}
                {...props}
                items={["Dine", "valg", "her"]}
            />
        ),
    },
);
