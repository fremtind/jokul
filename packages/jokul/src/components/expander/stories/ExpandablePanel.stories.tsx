import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, waitFor } from "storybook/test";
import { Card } from "../../card/Card.js";
import { Flex } from "../../flex/Flex.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { ExpandablePanelContent } from "../ExpandablePanelContent.js";
import { Expander } from "../Expander.js";
import "../../card/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/ExpandablePanel",
    component: ExpandablePanel,
    subcomponents: { Expander, ExpandablePanelContent },
    args: {
        variant: "fill",
    },
    argTypes: {
        variant: {
            control: "radio",
            options: ["fill", "stroke"],
        },
    },
} satisfies Meta<typeof ExpandablePanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExpandablePanelFilled: Story = {
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

/**
 * Stroke varianten skal ikke ha mellomrom mellom panelene.
 * */
export const ExpandablePanelStroke: Story = {
    args: {
        variant: "stroke",
    },
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
        <>
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
        </>
    ),
};

export const ExpandablePanelStrokeStandalone: Story = {
    name: "Stroke standalone",
    args: {
        variant: "stroke",
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    width: "50dvw",
                    padding: "24px",
                }}
            >
                <Card padding="l" style={{ width: "min(100%, 32rem)" }}>
                    <Story />
                </Card>
            </div>
        ),
    ],
    render: (args) => (
        <div style={{ display: "grid", gap: "16px" }}>
            <p style={{ margin: 0 }}>
                Et standalone panel skal beholde ytre border radius selv om det
                ligger mellom andre elementer.
            </p>
            <ExpandablePanel {...args}>
                <ExpandablePanel.Header data-testid="stroke-standalone-trigger">
                    Klikk på meg for å åpne!
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="stroke-standalone-content">
                    Velkommen innom når vi faktisk har kaffe! Vi er åpne mandag
                    til fredag fra kl. 09:00 til 18:00. Lørdag kan du besøke oss
                    fra 10:00 til 16:00.
                </ExpandablePanel.Content>
            </ExpandablePanel>
            <p style={{ margin: 0 }}>Panelgruppen fortsetter ikke under her.</p>
        </div>
    ),
    play: async ({ canvas, userEvent, step }) => {
        await step("Åpne standalone stroke-panelet", async () => {
            const trigger = canvas.getByTestId("stroke-standalone-trigger");
            const content = canvas.getByTestId("stroke-standalone-content");

            expect(content).toHaveAttribute("data-expanded", "false");

            await userEvent.click(trigger);

            await waitFor(() => {
                expect(content).toHaveAttribute("data-expanded", "true");
            });
        });
    },
};

export const ExpandablePanelFillStandalone: Story = {
    name: "Fill standalone",
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
        <div style={{ display: "grid", gap: "16px" }}>
            <p style={{ margin: 0 }}>
                Et standalone panel med fill-variant skal fungere uten å være
                del av en panelgruppe.
            </p>
            <ExpandablePanel {...args}>
                <ExpandablePanel.Header data-testid="fill-standalone-trigger">
                    Hva dekker reiseforsikringen på vei til flyplassen?
                </ExpandablePanel.Header>
                <ExpandablePanel.Content data-testid="fill-standalone-content">
                    Reiseforsikringen dekker blant annet forsinket bagasje og
                    avbestilling ved akutt sykdom når reisen er betalt med
                    kortet.
                </ExpandablePanel.Content>
            </ExpandablePanel>
        </div>
    ),
    play: async ({ canvas, userEvent, step }) => {
        await step("Åpne standalone fill-panelet", async () => {
            const trigger = canvas.getByTestId("fill-standalone-trigger");
            const content = canvas.getByTestId("fill-standalone-content");

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
    args: {
        variant: "stroke",
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
    render: (args) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div style={{ display: "grid", gap: "16px" }}>
                <p data-testid="controlled-state" style={{ margin: 0 }}>
                    Status: {isOpen ? "Åpen" : "Lukket"}
                </p>
                <ExpandablePanel
                    {...args}
                    open={isOpen}
                    onOpenChange={setIsOpen}
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
        variant: "stroke",
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
    play: async ({ canvas, userEvent, step }) => {
        const trigger = canvas.getByTestId("long-title-trigger");
        const content = canvas.getByTestId("long-title-content");

        await step("Tittelen brytes over flere linjer", async () => {
            expect(trigger.getBoundingClientRect().height).toBeGreaterThan(64);
        });

        await step("Panelet kan åpnes med lang tittel", async () => {
            await userEvent.click(trigger);

            await waitFor(() => {
                expect(content).toHaveAttribute("data-expanded", "true");
            });
        });
    },
};
