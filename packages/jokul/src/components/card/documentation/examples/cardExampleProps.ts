import { ExampleKnobsProps } from "../../../../../../../utils/dev-example";
import { PaddingShorthand } from "../../types";

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
        { prop: "Ekstern lenke", defaultValue: false },
    ],
    choiceProps: [...baseCardExampleProps.choiceProps],
};

export const taskCardExampleProps: ExampleKnobsProps = {
    choiceProps: [...baseCardExampleProps.choiceProps],
};

export const infoCardExampleProps: ExampleKnobsProps = {
    boolProps: [{ prop: "Title", defaultValue: true }],
    choiceProps: [...baseCardExampleProps.choiceProps],
};

export const mixedPadding: PaddingShorthand = {
    top: "64",
    right: "40",
    bottom: "16",
    left: "24",
};
