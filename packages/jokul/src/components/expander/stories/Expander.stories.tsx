import type { Meta, StoryObj } from "@storybook/nextjs";

import React, { useId, useState } from "react";
import { userEvent, within } from "storybook/test";
import { CalendarIcon, PenIcon } from "../../icon/index.js";
import { RadioButton, RadioButtonGroup } from "../../radio-button/index.js";
import { SuccessTag } from "../../tag/index.js";
import { Text, Title } from "../../typography/index.js";
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
} satisfies Meta<typeof Expander>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Expander kan brukes alene, utenfor ExpandablePanel. Da rendres den som en
 * `button`, og du styrer åpen/lukket selv med `open` og `onClick`.
 */
export const Standalone: Story = {
    name: "Kontrollert uten panel",
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await new Promise((resolve) => setTimeout(resolve, 300));
        await userEvent.click(canvas.getByTestId(expanderTestId));
    },
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
    render: ({ expandDirection, icon }) => {
        const [isOpen, setIsOpen] = useState(false);

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
};

/**
 * Koble Expander til innholdet med `aria-controls` slik at hjelpemidler
 * finner frem til det som åpnes.
 */
export const StandaloneWithAriaControls: Story = {
    name: "Koblet til innhold",
    render: ({ expandDirection, icon }) => {
        const [isOpen, setIsOpen] = useState(false);
        const contentId = useId();

        return (
            <div style={{ display: "grid", gap: "16px" }}>
                <Expander
                    aria-controls={contentId}
                    expandDirection={expandDirection}
                    icon={icon}
                    open={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    Se vilkår for avbestilling
                </Expander>
                <div id={contentId} hidden={!isOpen}>
                    Du kan avbestille reisen uten gebyr inntil 14 dager før
                    avreise. Etter det gjelder egenandel på 500 kroner.
                </div>
            </div>
        );
    },
};

export const StandaloneOpenByDefault: Story = {
    name: "Åpen fra start",
    render: ({ expandDirection, icon }) => {
        const [isOpen, setIsOpen] = useState(true);

        return (
            <div style={{ display: "grid", gap: "16px" }}>
                <Expander
                    expandDirection={expandDirection}
                    icon={icon}
                    open={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    Skjul detaljer om dekningen
                </Expander>
                {isOpen ? (
                    <div>
                        Dekningen gjelder for alle reiser i Norden og Europa med
                        varighet inntil 60 dager.
                    </div>
                ) : null}
            </div>
        );
    },
};

export const StandaloneOpensUp: Story = {
    name: "Åpner oppover",
    args: {
        expandDirection: "up",
    },
    render: ({ expandDirection, icon }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div style={{ display: "grid", gap: "16px" }}>
                {isOpen ? (
                    <div>
                        Ring 55 55 55 55 eller start chat med en rådgiver.
                    </div>
                ) : null}
                <Expander
                    expandDirection={expandDirection}
                    icon={icon}
                    open={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    Kontakt oss
                </Expander>
            </div>
        );
    },
};

const carInsurances = {
    Toppkasko: {
        price: "1 890 kr/md",
        text: "Dekker alt Kasko gjør, og i tillegg leiebil og redusert egenandel.",
        coverage: "Skader på egen bil, tyveri, brann, leiebil og glass.",
    },
    Kasko: {
        price: "1 513 kr/md",
        text: "Passer for de fleste biler. Dekker det meste av skader, men ikke slitasje.",
        coverage: "Skader på egen bil, tyveri, brann og glass.",
    },
    Minikasko: {
        price: "902 kr/md",
        text: "Dekker brann, tyveri og glass, men ikke kollisjonsskader.",
        coverage: "Brann, tyveri og glassskader.",
    },
    Ansvar: {
        price: "540 kr/md",
        text: "Lovpålagt minimum. Dekker skader du påfører andre.",
        coverage: "Skader du påfører andre personer og kjøretøy.",
    },
};

const cardStyle: React.CSSProperties = {
    background: "var(--jkl-color-background-container)",
    borderRadius: "var(--jkl-border-radius-m)",
    padding: "var(--jkl-unit-30)",
    display: "grid",
    gap: "var(--jkl-unit-20)",
};

/**
 * Expander brukt alene i et kort. Teksten flukter med innholdet rundt, mens
 * hover og fokus strekker seg utenfor sideveis.
 */
export const StandaloneInCard: Story = {
    name: "I valgkort",
    args: {
        icon: undefined,
    },
    render: ({ expandDirection }) => {
        const [selected, setSelected] =
            useState<keyof typeof carInsurances>("Kasko");
        const [isOpen, setIsOpen] = useState(false);
        const coverageId = useId();
        const insurance = carInsurances[selected];

        return (
            <div style={{ display: "grid", gap: "var(--jkl-unit-20)" }}>
                <RadioButtonGroup
                    legend="Hvilken forsikring passer best for deg?"
                    name="forsikring"
                    value={selected}
                    inline
                    onChange={(e) => {
                        setSelected(
                            e.target.value as keyof typeof carInsurances,
                        );
                        setIsOpen(false);
                    }}
                >
                    {Object.keys(carInsurances).map((name) => (
                        <RadioButton key={name} value={name}>
                            {name}
                        </RadioButton>
                    ))}
                </RadioButtonGroup>

                <div style={cardStyle}>
                    <div>
                        <SuccessTag>Inkludert rabattene dine</SuccessTag>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Title as="h3" size="xs">
                            {selected}
                        </Title>
                        <Text bold>{insurance.price}</Text>
                    </div>
                    <Text>{insurance.text}</Text>
                    <div>
                        <Expander
                            aria-controls={coverageId}
                            expandDirection={expandDirection}
                            open={isOpen}
                            onClick={() => setIsOpen((open) => !open)}
                        >
                            Vis hva som dekkes
                        </Expander>
                        <div id={coverageId} hidden={!isOpen}>
                            <Text>{insurance.coverage}</Text>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        ...cardStyle,
                        gridAutoFlow: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Text>
                        Egenandelen er <strong>8 000 kr</strong>
                    </Text>
                    <PenIcon />
                </div>
            </div>
        );
    },
};

/**
 * Inne i et ExpandablePanel rendres Expander som `summary` og styrer panelet.
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

export const InExpandablePanelOpensUp: Story = {
    name: "I utvidbart panel, åpner oppover",
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
