import { ExampleKnobsProps } from "@fremtind/jkl-internal-doc-utils";
import { PaddingShorthand } from "../src/types";

export const baseCardExampleProps = {
    choiceProps: [
        {
            name: "Padding",
            values: ["m", "l", "xl", "blandet"],
            defaultValue: 1,
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
    top: "2xl",
    right: "xl",
    bottom: "m",
    left: "l",
};
