import { PaddingShorthand } from "../src/types";

export const navCardExampleProps = {
    boolProps: [
        "Image",
        { prop: "Tag", defaultValue: true },
        { prop: "Description", defaultValue: true },
        { prop: "Ekstra info", defaultValue: true },
    ],
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl", "blandet"],
            defaultValue: 1,
        },
    ],
};

export const taskCardExampleProps = {
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl", "blandet"],
            defaultValue: 1,
        },
    ],
};

export const infoCardExampleProps = {
    boolProps: ["Image", { prop: "Title", defaultValue: true }],
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl", "blandet"],
            defaultValue: 1,
        },
    ],
};

export const mixedPadding: PaddingShorthand = {
    top: "2xl",
    right: "xl",
    bottom: "m",
    left: "l",
};
