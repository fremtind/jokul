import { figma } from "@figma/code-connect";
import React from "react";
import { ErrorTag, InfoTag, SuccessTag, Tag, WarningTag } from "./Tag.jsx";

figma.connect(
    Tag,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2004%3A303",
    {
        imports: ['import { Tag } from "@fremtind/jokul/components/tag";'],
        variant: { Type: "Neutral" },
        props: {
            children: figma.string("Text"),
        },
        example: (props) => <Tag {...props} />,
    },
);

figma.connect(
    ErrorTag,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2004%3A303",
    {
        imports: ['import { ErrorTag } from "@fremtind/jokul/components/tag";'],
        variant: { Type: "Error" },
        props: {
            children: figma.string("Text"),
        },
        example: (props) => <ErrorTag {...props} />,
    },
);

figma.connect(
    InfoTag,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2004%3A303",
    {
        imports: ['import { InfoTag } from "@fremtind/jokul/components/tag";'],
        variant: { Type: "Info" },
        props: {
            children: figma.string("Text"),
        },
        example: (props) => <InfoTag {...props} />,
    },
);

figma.connect(
    SuccessTag,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2004%3A303",
    {
        imports: [
            'import { SuccessTag } from "@fremtind/jokul/components/tag";',
        ],
        variant: { Type: "Success" },
        props: {
            children: figma.string("Text"),
        },
        example: (props) => <SuccessTag {...props} />,
    },
);

figma.connect(
    WarningTag,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=2004%3A303",
    {
        imports: [
            'import { WarningTag } from "@fremtind/jokul/components/tag";',
        ],
        variant: { Type: "Warning" },
        props: {
            children: figma.string("Text"),
        },
        example: (props) => <WarningTag {...props} />,
    },
);
