import { figma } from "@figma/code-connect";
import React from "react";
import {
    ErrorMessage,
    InfoMessage,
    SuccessMessage,
    WarningMessage,
} from "./Message.js";

figma.connect(
    InfoMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9812",
    {
        variant: { Type: "Info" },
        imports: [
            'import { InfoMessage } from "@fremtind/jokul/components/message";',
        ],
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
            title: figma.boolean("Show Title", {
                true: figma.string("Title"),
                false: undefined,
            }),
        },
        example: ({ children, ...props }) => (
            <InfoMessage {...props}>{children}</InfoMessage>
        ),
    },
);

figma.connect(
    ErrorMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9812",
    {
        variant: { Type: "Error" },
        imports: [
            'import { ErrorMessage } from "@fremtind/jokul/components/message";',
        ],
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
            title: figma.boolean("Show Title", {
                true: figma.string("Title"),
                false: undefined,
            }),
        },
        example: ({ children, ...props }) => (
            <ErrorMessage {...props}>{children}</ErrorMessage>
        ),
    },
);

figma.connect(
    SuccessMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9812",
    {
        variant: { Type: "Success" },
        imports: [
            'import { SuccessMessage } from "@fremtind/jokul/components/message";',
        ],
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
            title: figma.boolean("Show Title", {
                true: figma.string("Title"),
                false: undefined,
            }),
        },
        example: ({ children, ...props }) => (
            <SuccessMessage {...props}>{children}</SuccessMessage>
        ),
    },
);

figma.connect(
    WarningMessage,
    "https://www.figma.com/design/jd7QGZJIQ5ZU6AhAq31yuv?node-id=14268%3A9812",
    {
        variant: { Type: "Warning" },
        imports: [
            'import { WarningMessage } from "@fremtind/jokul/components/message";',
        ],
        props: {
            children: figma.string("Text"),
            dismissable: figma.boolean("Dismissable"),
            title: figma.boolean("Show Title", {
                true: figma.string("Title"),
                false: undefined,
            }),
        },
        example: ({ children, ...props }) => (
            <WarningMessage {...props}>{children}</WarningMessage>
        ),
    },
);
