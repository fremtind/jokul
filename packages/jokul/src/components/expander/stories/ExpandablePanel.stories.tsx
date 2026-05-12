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

/**
 * Regresjonstest for [#5565](https://github.com/fremtind/jokul/issues/5565):
 * et åpent `ExpandablePanel` med en liste over forsikringer — hver
 * forsikring har sin egen kontrollerte `Expander` som viser detaljer.
 * Hver indre Expander styrer kun sin egen state, og klikk på dem skal
 * ikke lukke det ytre panelet.
 */
export const ExpandablePanelNestedExpanders: Story = {
    name: "Nestet Expander leser sin egen state",
    args: {
        variant: "stroke",
    },
    decorators: [
        (Story) => (
            <div style={{ width: "50dvw", padding: "24px" }}>
                <div style={{ width: "min(100%, 36rem)" }}>
                    <Story />
                </div>
            </div>
        ),
    ],
    render: (args) => {
        const forsikringer = [
            {
                key: "bil",
                navn: "Bilforsikring",
                pris: "412 kr / mnd",
                detaljer:
                    "Kasko med leiebil. Egenandel 4 000 kr. Avtalenummer FT-2026-487312.",
            },
            {
                key: "hus",
                navn: "Husforsikring",
                pris: "289 kr / mnd",
                detaljer:
                    "Innbo og bygning. Egenandel 6 000 kr. Avtalenummer FT-2026-119041.",
            },
            {
                key: "reise",
                navn: "Reiseforsikring",
                pris: "98 kr / mnd",
                detaljer:
                    "Familie, hele verden, hele året. Egenandel 1 500 kr. Avtalenummer FT-2026-552207.",
            },
        ];

        const ForsikringsRad = ({
            forsikring,
        }: {
            forsikring: (typeof forsikringer)[number];
        }) => {
            const [open, setOpen] = React.useState(false);
            const detailsId = `details-${forsikring.key}`;
            return (
                <div
                    style={{
                        borderTop: "1px solid rgba(0,0,0,.12)",
                        paddingBlock: "8px",
                    }}
                >
                    <Expander
                        as="button"
                        open={open}
                        onClick={() => setOpen((v) => !v)}
                        data-testid={`row-${forsikring.key}`}
                        aria-expanded={open}
                        aria-controls={detailsId}
                        style={{ width: "100%" }}
                    >
                        <Flex
                            direction="row"
                            justifyContent="space-between"
                            style={{ flex: 1 }}
                        >
                            <span>{forsikring.navn}</span>
                            <span>{forsikring.pris}</span>
                        </Flex>
                    </Expander>
                    {open && (
                        <p
                            id={detailsId}
                            style={{
                                margin: "8px 0 0",
                                paddingInline: "8px",
                                color: "var(--jkl-color-text-subdued)",
                            }}
                            data-testid={`details-${forsikring.key}`}
                        >
                            {forsikring.detaljer}
                        </p>
                    )}
                </div>
            );
        };

        return (
            <ExpandablePanel {...args} defaultOpen>
                <ExpandablePanel.Header data-testid="outer-trigger">
                    Forsikringene dine (3)
                </ExpandablePanel.Header>
                <ExpandablePanel.Content>
                    <Flex direction="column" gap="none">
                        {forsikringer.map((f) => (
                            <ForsikringsRad key={f.key} forsikring={f} />
                        ))}
                    </Flex>
                </ExpandablePanel.Content>
            </ExpandablePanel>
        );
    },
    play: async ({ canvas, canvasElement, userEvent, step }) => {
        await step(
            "Alle radene er lukket selv om panelet er åpent",
            async () => {
                const bil = canvas.getByTestId("row-bil");
                const hus = canvas.getByTestId("row-hus");
                const reise = canvas.getByTestId("row-reise");

                expect(bil.className).not.toContain("jkl-expander--open");
                expect(hus.className).not.toContain("jkl-expander--open");
                expect(reise.className).not.toContain("jkl-expander--open");
            },
        );

        await step(
            "Klikk på en rad åpner kun den raden, ikke det ytre panelet",
            async () => {
                const bilRad = canvas.getByTestId("row-bil");
                const outerPanel = canvasElement.querySelector(
                    "[data-testid='jkl-expand-section']",
                ) as HTMLDetailsElement;

                await userEvent.click(bilRad);

                expect(bilRad.className).toContain("jkl-expander--open");
                expect(canvas.getByTestId("details-bil")).toBeInTheDocument();
                // Det ytre panelet skal fortsatt være åpent
                expect(outerPanel.open).toBe(true);

                // Naborader er fortsatt lukket
                expect(canvas.getByTestId("row-hus").className).not.toContain(
                    "jkl-expander--open",
                );
            },
        );
    },
};
