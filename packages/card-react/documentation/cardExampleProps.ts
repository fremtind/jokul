import { ExampleKnobsProps } from "../../../doc-utils";
import { PaddingShorthand } from "../src/types";

export const baseCardExampleProps = {
    choiceProps: [
        {
            name: "Padding",
            values: ["0", "16", "24", "40", "blandet"],
            defaultValue: 2,
        },
    ],
};

export const navCardExampleProps: ExampleKnobsProps = {
    boolProps: [
        "Image",
        { prop: "Tag", defaultValue: true },
        { prop: "Description", defaultValue: true },
        { prop: "Ekstra info", defaultValue: true },
    ],
    choiceProps: [...baseCardExampleProps.choiceProps],
};

export const taskCardExampleProps: ExampleKnobsProps = {
    choiceProps: [...baseCardExampleProps.choiceProps],
};

export const infoCardExampleProps: ExampleKnobsProps = {
    boolProps: ["Image", { prop: "Title", defaultValue: true }],
    choiceProps: [...baseCardExampleProps.choiceProps],
};

export const mixedPadding: PaddingShorthand = {
    top: "64",
    right: "40",
    bottom: "16",
    left: "24",
};
