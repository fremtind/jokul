import { PRESETS } from "../src/presets";

export const feedbackExampleProps = {
    boolProps: ["Med oppfølgings-spørsmål", "Med kontakt-spørsmål"],
    choiceProps: [
        {
            name: "Forhåndsvalg",
            values: Object.keys(PRESETS),
            defaultValue: 0,
        },
    ],
};
