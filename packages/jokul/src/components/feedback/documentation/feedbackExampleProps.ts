import { PRESETS } from "../presets";

export const feedbackExampleProps = {
    boolProps: ["Med oppfølgings-spørsmål", "Med kontakt-spørsmål", "Med teller"],
    choiceProps: [
        {
            name: "Forhåndsvalg",
            values: Object.keys(PRESETS),
            defaultValue: 0,
        },
    ],
};
