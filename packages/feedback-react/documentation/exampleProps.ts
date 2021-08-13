import { PRESETS } from "../src";

export const exampleProps = {
    boolProps: ["Med oppfølgings-spørsmål"],
    choiceProps: [
        {
            name: "Forhåndsvalg",
            values: Object.keys(PRESETS),
            defaultValue: 0,
        },
    ],
};
