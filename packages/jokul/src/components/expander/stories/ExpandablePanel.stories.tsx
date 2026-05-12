import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useId } from "react";
import { expect, waitFor } from "storybook/test";
import { Flex } from "../../flex/Flex.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { ExpandablePanelContent } from "../ExpandablePanelContent.js";
import { Expander } from "../Expander.js";
import "../../card/styles/_index.scss";
import "../styles/_index.scss";
import { Button } from "../../button/index.js";

const meta = {
    title: "Komponenter/ExpandablePanel",
    component: ExpandablePanel,
    subcomponents: { Expander, ExpandablePanelContent },
    args: {
        outlined: false,
    },
} satisfies Meta<typeof ExpandablePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const _ExpandablePanel: Story = {
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <Story />
            </div>
        ),
    ],
    render: (args) => (
        <Flex direction="column" gap="xs">
            {["first", "second", "third"].map((panelKey) => (
                <ExpandablePanel key={panelKey} {...args}>
                    <ExpandablePanel.Header>
                        Klikk på meg for å åpne!
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>
                        Velkommen innom når vi faktisk har kaffe! Vi er åpne
                        mandag til fredag fra kl. 09:00 til 18:00. Lørdag kan du
                        besøke oss fra 10:00 til 16:00 (vi liker en rolig start
                        på lørdagen). Søndager hviler vi – og det burde du også!
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            ))}
        </Flex>
    ),
};

export const ExpandablePanelStandalone: Story = {
    name: "Standalone",
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <div style={{ width: "min(100%, 32rem)" }}>
                    <Story />
                </div>
            </div>
        ),
    ],
    render: (args) => (
        <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="standalone-trigger">
                Hva dekker reiseforsikringen på vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="standalone-content">
                Reiseforsikringen dekker blant annet forsinket bagasje og
                avbestilling ved akutt sykdom når reisen er betalt med kortet.
            </ExpandablePanel.Content>
        </ExpandablePanel>
    ),
    play: async ({ canvas, userEvent, step }) => {
        await step("Åpne standalone panelet", async () => {
            const trigger = canvas.getByTestId("standalone-trigger");
            const content = canvas.getByTestId("standalone-content");

            expect(content).toHaveAttribute("data-expanded", "false");

            await userEvent.click(trigger);

            await waitFor(() => {
                expect(content).toHaveAttribute("data-expanded", "true");
            });
        });
    },
};

export const ExpandablePanelControlled: Story = {
    name: "Kontrollert",
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <div style={{ width: "min(100%, 32rem)" }}>
                    <Story />
                </div>
            </div>
        ),
    ],
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false);
        const id = useId();

        return (
            <div style={{ display: "grid", gap: "16px" }}>
                <p data-testid="controlled-state" style={{ margin: 0 }}>
                    Status: {isOpen ? "Åpen" : "Lukket"}
                </p>
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                >
                    Åpne
                </Button>
                <ExpandablePanel
                    {...args}
                    open={isOpen}
                    onOpenChange={setIsOpen}
                    id={id}
                >
                    <ExpandablePanel.Header data-testid="controlled-trigger">
                        Se dekning for leiebil
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content data-testid="controlled-content">
                        Forsikringen dekker skade, tyveri og egenandel når bilen
                        er leid i Norden eller EU og leieforholdet er betalt med
                        kortet.
                    </ExpandablePanel.Content>
                </ExpandablePanel>
            </div>
        );
    },
    play: async ({ canvas, userEvent, step }) => {
        const trigger = canvas.getByTestId("controlled-trigger");
        const content = canvas.getByTestId("controlled-content");
        const state = canvas.getByTestId("controlled-state");

        await step("Åpne kontrollert panel", async () => {
            expect(content).toHaveAttribute("data-expanded", "false");
            expect(state).toHaveTextContent("Status: Lukket");

            await userEvent.click(trigger);

            await waitFor(() => {
                expect(content).toHaveAttribute("data-expanded", "true");
                expect(state).toHaveTextContent("Status: Åpen");
            });
        });

        await step("Lukk kontrollert panel", async () => {
            await userEvent.click(trigger);

            await waitFor(() => {
                expect(content).toHaveAttribute("data-expanded", "false");
                expect(state).toHaveTextContent("Status: Lukket");
            });
        });
    },
};

export const ExpandablePanelInitiallyOpen: Story = {
    name: "Starter åpen",
    args: {
        defaultOpen: true,
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <div style={{ width: "min(100%, 32rem)" }}>
                    <Story />
                </div>
            </div>
        ),
    ],
    render: (args) => (
        <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="initially-open-trigger">
                Kontaktvalg for skadehjelp
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="initially-open-content">
                Ring oss pa 55 55 55 55, start chat eller be om at en rådgiver
                ringer deg tilbake innen 15 minutter.
            </ExpandablePanel.Content>
        </ExpandablePanel>
    ),
    play: async ({ canvas, userEvent, step }) => {
        const trigger = canvas.getByTestId("initially-open-trigger");
        const content = canvas.getByTestId("initially-open-content");

        await step("Panelet er åpent ved start", async () => {
            expect(content).toHaveAttribute("data-expanded", "true");
        });

        await step("Panelet kan lukkes igjen", async () => {
            await userEvent.click(trigger);

            await waitFor(() => {
                expect(content).toHaveAttribute("data-expanded", "false");
            });

            await userEvent.click(trigger);
        });
    },
};

export const ExpandablePanelLongTitle: Story = {
    name: "Lang tittel",
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <div style={{ width: "min(100%, 20rem)" }}>
                    <Story />
                </div>
            </div>
        ),
    ],
    render: (args) => (
        <ExpandablePanel {...args}>
            <ExpandablePanel.Header data-testid="long-title-trigger">
                Hva skjer med egenandel, avbestilling og forsinket bagasje hvis
                hele familien blir forsinket pa vei til flyplassen?
            </ExpandablePanel.Header>
            <ExpandablePanel.Content data-testid="long-title-content">
                Du er dekket for forsinket bagasje, avbestilling ved akutt
                sykdom og egenandel pa leiebil opptil 15 000 kroner.
            </ExpandablePanel.Content>
        </ExpandablePanel>
    ),
};
