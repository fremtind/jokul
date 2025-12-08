import type { Meta, StoryObj } from "@storybook/nextjs";
import "../styles/_index.scss";
import { Feedback } from "../Feedback.js";
import { defaultOptions } from "../questions/smileyUtils.js";

const meta = {
    title: "Komponenter/Feedback",
    component: Feedback,
} satisfies Meta<typeof Feedback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Radio: Story = {
    args: {
        type: "radio",
        label: "Hvordan opplevde du å bestille forsikring på nett?",
        helpLabel: "Hjelpetekst",
        options: [
            { label: "Enkelt og greit", value: "enkelt" },
            { label: "Midt på treet", value: "ok" },
            { label: "Tungvindt", value: "tungvindt" },
        ],
        addOnQuestion: {
            label: "Er det noe mer du vil legge til?",
            helpLabel: "Hjelpetekst",
        },
        successMessage: {
            title: "Takk for tilbakemeldingen!",
            children:
                "Vi setter pris på at du tar deg tid til å gi oss tilbakemelding.",
        },
        onSubmit: console.info,
    },
    render: (args) => <Feedback {...args} />,
};

export const Smiley: Story = {
    args: {
        type: "smiley",
        label: "Hvordan opplevde du å bestille forsikring på nett?",
        helpLabel: "Hjelpetekst",
        options: defaultOptions,
        addOnQuestion: {
            label: "Er det noe mer du vil legge til?",
            helpLabel: "Hjelpetekst",
        },
        successMessage: {
            title: "Takk for tilbakemeldingen!",
            children:
                "Vi setter pris på at du tar deg tid til å gi oss tilbakemelding.",
        },
        onSubmit: console.info,
    },
    render: (args) => <Feedback {...args} />,
};
