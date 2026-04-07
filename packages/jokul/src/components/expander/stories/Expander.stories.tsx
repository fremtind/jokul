import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { userEvent, within } from "storybook/test";
import { CalendarIcon } from "../../icon/index.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { ExpandablePanelContent } from "../ExpandablePanelContent.js";
import { Expander } from "../Expander.js";
import "../styles/_index.scss";

const expanderTestId = "expander-trigger";

const meta = {
    title: "Komponenter/Expander",
    component: Expander,
    subcomponents: { ExpandablePanel, ExpandablePanelContent },
    args: {
        expandDirection: "down",
        icon: <CalendarIcon />,
    },
    argTypes: {
        expandDirection: {
            control: "radio",
            options: ["up", "down"],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: "32rem", maxWidth: "100%" }}>
                <Story />
            </div>
        ),
    ],
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await new Promise((resolve) => setTimeout(resolve, 300));
        await userEvent.click(canvas.getByTestId(expanderTestId));
    },
    render: ({ expandDirection, icon }) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div style={{ display: "grid", gap: "16px" }}>
                <Expander
                    data-testid={expanderTestId}
                    expandDirection={expandDirection}
                    icon={icon}
                    open={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    Se hva reiseforsikringen dekker
                </Expander>
                {isOpen ? (
                    <div>
                        Du er dekket for forsinket bagasje, avbestilling ved
                        akutt sykdom og egenandel på leiebil opptil 15 000
                        kroner.
                    </div>
                ) : null}
            </div>
        );
    },
} satisfies Meta<typeof Expander>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandaloneControlled: Story = {
    name: "Kontrollert uten panel",
    parameters: {
        docs: {
            source: {
                code: `const [isOpen, setIsOpen] = React.useState(false);

return (
    <>
        <Expander
            icon={<CalendarIcon />}
            open={isOpen}
            onClick={() => setIsOpen((open) => !open)}
        >
            Se hva reiseforsikringen dekker
        </Expander>
        {isOpen ? (
            <div>
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel på leiebil opptil 15 000 kroner.
            </div>
        ) : null}
    </>
);`,
            },
        },
    },
};

/**
 * Expander brukes i ExpandablePanel, men kan også brukes alene dersom du ønsker et annet uttrykk.
 */
export const InExpandablePanel: Story = {
    name: "I utvidbart panel",
    render: ({ expandDirection, icon }) => (
        <ExpandablePanel style={{ width: "min(100%, 32rem)" }}>
            <Expander
                data-testid={expanderTestId}
                expandDirection={expandDirection}
                icon={icon}
            >
                Hva dekker leiebilforsikringen?
            </Expander>
            <ExpandablePanelContent>
                Forsikringen dekker skade, tyveri og egenandel når bilen er leid
                på ferie i Norden eller EU og leieforholdet er betalt med kortet
                ditt.
            </ExpandablePanelContent>
        </ExpandablePanel>
    ),
};

export const OpensUp: Story = {
    name: "Åpner oppover",
    args: {
        expandDirection: "up",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    minHeight: "100dvh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "24px",
                }}
            >
                <Story />
            </div>
        ),
    ],
    render: ({ expandDirection, icon }) => (
        <ExpandablePanel style={{ width: "min(100%, 32rem)" }}>
            <Expander
                data-testid={expanderTestId}
                expandDirection={expandDirection}
                icon={icon}
            >
                Se kontaktvalg i bunnmenyen
            </Expander>
            <ExpandablePanelContent>
                Ring oss pa 55 55 55 55, start chat med skadehjelp eller be om
                at en rådgiver ringer deg tilbake innen 15 minutter.
            </ExpandablePanelContent>
        </ExpandablePanel>
    ),
};
