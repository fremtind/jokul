import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, screen, waitFor } from "storybook/test";
import { Button } from "../../button/Button.js";
import { Checkbox } from "../../checkbox/Checkbox.js";
import { CheckboxStory } from "../../checkbox/stories/Checkbox.stories.js";
import { Flex } from "../../flex/Flex.js";
import { FieldGroup } from "../../input-group/index.js";
import { TextInput } from "../../text-input/index.js";
import TextInputStories, {
    UnitAlign,
} from "../../text-input/stories/TextInput.stories.js";
import {
    ModalActions,
    ModalBody,
    ModalCloseButton,
    Modal as ModalComponent,
    ModalContainer,
    ModalHeader,
    ModalOverlay,
    ModalTitle,
} from "../Modal.js";
import { useModal } from "../useModal.js";

import "../styles/_index.scss";

type ExampleProps = {
    heading: string;
    body: React.ReactNode;
    openLabel: string;
    primaryLabel: string;
    secondaryLabel?: string;
    padding?: 16 | 24 | 40;
    role?: "dialog" | "alertdialog";
    placement?: "center" | "left" | "bottom" | "right";
    slideIn?: boolean;
    showCloseButton?: boolean;
};

function ModalExample({
    heading,
    body,
    openLabel,
    primaryLabel,
    secondaryLabel,
    padding,
    role = "dialog",
    placement = "center",
    slideIn = false,
    showCloseButton = true,
}: ExampleProps) {
    const [instance, { title, overlay, container, modal, closeButton }] =
        useModal({ title: heading, role });

    return (
        <>
            <Button onClick={() => instance?.show()}>{openLabel}</Button>
            <ModalContainer
                {...container}
                placement={placement}
                slideIn={slideIn}
            >
                <ModalOverlay {...overlay} />
                <ModalComponent {...modal} padding={padding}>
                    <ModalHeader>
                        <ModalTitle {...title}>{heading}</ModalTitle>
                        {showCloseButton && (
                            <ModalCloseButton {...closeButton} />
                        )}
                    </ModalHeader>
                    <ModalBody>{body}</ModalBody>
                    <ModalActions>
                        <Button
                            variant="primary"
                            onClick={() => instance?.hide()}
                        >
                            {primaryLabel}
                        </Button>
                        {secondaryLabel && (
                            <Button onClick={() => instance?.hide()}>
                                {secondaryLabel}
                            </Button>
                        )}
                    </ModalActions>
                </ModalComponent>
            </ModalContainer>
        </>
    );
}

const meta = {
    title: "Komponenter/Modal",
    component: ModalComponent,
    parameters: {
        layout: "centered",
    },
    args: {
        padding: 40,
        role: "dialog",
        placement: "center",
        slideIn: false,
        showCloseButton: true,
    },
    argTypes: {
        heading: { table: { disable: true } },
        body: { table: { disable: true } },
        openLabel: { table: { disable: true } },
        primaryLabel: { table: { disable: true } },
        secondaryLabel: { table: { disable: true } },
        padding: {
            control: "radio",
            options: [16, 24, 40],
            table: {
                defaultValue: { summary: "40" },
            },
        },
        role: {
            control: "select",
            options: ["dialog", "alertdialog"],
            table: {
                defaultValue: { summary: "dialog" },
            },
        },
        placement: {
            control: "select",
            options: ["center", "left", "bottom", "right"],
            table: {
                defaultValue: { summary: "center" },
            },
        },
        slideIn: {
            control: "boolean",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        showCloseButton: {
            control: "boolean",
            table: {
                defaultValue: { summary: "true" },
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<ExampleProps>;

export const BekreftKansellering: Story = {
    name: "Bekreft kansellering",
    args: {
        heading: "Bekreft kansellering",
        body: (
            <Flex direction="column" gap="m">
                <p>Er du sikker på at du vil kansellere reiseforsikringen?</p>
                <FieldGroup legend="Kanselleringen gjelder">
                    {["Reiseforsikring Pluss", "Familiedekning"].map(
                        (produkt) => (
                            <Checkbox
                                {...CheckboxStory.args}
                                key={produkt}
                                name="produkt"
                                value={produkt}
                            >
                                {produkt}
                            </Checkbox>
                        ),
                    )}
                </FieldGroup>
            </Flex>
        ),
        openLabel: "Kanseller forsikring",
        primaryLabel: "Kanseller",
        secondaryLabel: "Avbryt",
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne modal", async () => {
            const openButton = screen.getByRole("button", {
                name: /kanseller forsikring/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", {
                        name: /bekreft kansellering/i,
                    }),
                ).toBeInTheDocument();
            });
        });
    },
};

export const KritiskAdvarsel: Story = {
    name: "Kritisk advarsel",
    args: {
        heading: "Dette kan ikke angres",
        body: (
            <Flex direction="column" gap="m">
                <p>Når du fortsetter, stoppes dekningen umiddelbart.</p>
                <p>
                    Eventuelle pågående saker må avsluttes før du kan opprette
                    en ny avtale.
                </p>
            </Flex>
        ),
        openLabel: "Vis advarsel",
        primaryLabel: "Stopp dekning",
        secondaryLabel: "Avbryt",
        role: "alertdialog",
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne modal", async () => {
            const openButton = screen.getByRole("button", {
                name: /vis advarsel/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", {
                        name: /dette kan ikke angres/i,
                    }),
                ).toBeInTheDocument();
            });
        });
    },
};

export const BunnarkDekning: Story = {
    name: "Bunnark for dekning",
    args: {
        heading: "Velg dekning",
        body: (
            <Flex direction="column" gap="m">
                <p>Velg hvilke dekninger som skal gjelde for avtalen.</p>
                <p>
                    Dette eksempelet bruker bunnplassering og innskyving for å
                    fungere som et ark.
                </p>
                <FieldGroup legend="Dekninger">
                    {[
                        "Reisegods",
                        "Avbestilling",
                        "Forsinket avgang",
                        "Egenandel",
                    ].map((dekning) => (
                        <Checkbox
                            {...CheckboxStory.args}
                            key={dekning}
                            name="dekning"
                            value={dekning}
                        >
                            {dekning}
                        </Checkbox>
                    ))}
                </FieldGroup>
                <FieldGroup legend="Tillegg">
                    {["Leiebil", "Utvidet medisinsk"].map((tillegg) => (
                        <Checkbox
                            {...CheckboxStory.args}
                            key={tillegg}
                            name="tillegg"
                            value={tillegg}
                        >
                            {tillegg}
                        </Checkbox>
                    ))}
                </FieldGroup>
            </Flex>
        ),
        openLabel: "Åpne dekninger",
        primaryLabel: "Lagre valg",
        secondaryLabel: "Lukk",
        placement: "bottom",
        slideIn: true,
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne bunnark", async () => {
            const openButton = screen.getByRole("button", {
                name: /åpne dekninger/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", { name: /velg dekning/i }),
                ).toBeInTheDocument();
            });
        });
    },
};

export const SidepanelSkade: Story = {
    name: "Sidepanel for skade",
    args: {
        heading: "Skademelding",
        body: (
            <Flex direction="column" gap="m">
                <p>Legg til bilder og beskrivelser av skaden.</p>
                <p>Sidepanel gir en rolig og kontekstnær flyt.</p>
                <FieldGroup legend="Skadedetaljer">
                    <Flex direction="column" gap="s">
                        <TextInput
                            {...TextInputStories.args}
                            label="Skadenummer"
                            placeholder="SKD-123456"
                        />
                        <TextInput
                            {...TextInputStories.args}
                            label="Dato for hendelse"
                            placeholder="dd.mm.åååå"
                        />
                        <TextInput
                            {...TextInputStories.args}
                            label="Sted"
                            placeholder="Oslo"
                        />
                    </Flex>
                </FieldGroup>
            </Flex>
        ),
        openLabel: "Start skademelding",
        primaryLabel: "Lagre skaden",
        secondaryLabel: "Avbryt",
        placement: "right",
        slideIn: true,
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne sidepanel", async () => {
            const openButton = screen.getByRole("button", {
                name: /start skademelding/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", { name: /skademelding/i }),
                ).toBeInTheDocument();
            });
        });
    },
};

export const OppdaterAvtale: Story = {
    name: "Oppdater avtale",
    args: {
        heading: "Oppdater forsikringsavtale",
        body: (
            <Flex direction="column" gap="m">
                <p>
                    Dette er et eksempel på en bred modal som kan romme et
                    skjema eller mer komplekst innhold.
                </p>
                <p>
                    Full bredde gjør det enklere å vise detaljer om dekning og
                    pris.
                </p>
                <FieldGroup legend="Kontakt og vilkår">
                    <Flex direction="column" gap="s">
                        <TextInput
                            {...TextInputStories.args}
                            label="E-post"
                            placeholder="ola.nordmann@eksempel.no"
                        />
                        <TextInput
                            {...TextInputStories.args}
                            label="Telefon"
                            placeholder="900 00 000"
                        />
                        <TextInput
                            {...(UnitAlign.args || {})}
                            label="Forsikringssum"
                            placeholder="0"
                            unit="kr"
                        />
                        <TextInput
                            {...(UnitAlign.args || {})}
                            label="Egenandel"
                            placeholder="0"
                            unit="kr"
                        />
                    </Flex>
                </FieldGroup>
            </Flex>
        ),
        openLabel: "Oppdater avtale",
        primaryLabel: "Lagre endringer",
        secondaryLabel: "Avbryt",
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne modal", async () => {
            const openButton = screen.getByRole("button", {
                name: /oppdater avtale/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", {
                        name: /oppdater forsikringsavtale/i,
                    }),
                ).toBeInTheDocument();
            });
        });
    },
};

export const LangeVilkår: Story = {
    name: "Lange vilkår",
    args: {
        heading: "Vilkår for forsikring",
        body: (
            <Flex direction="column" gap="m">
                <p>
                    Her kan du lese vilkår og begrensninger før du fortsetter.
                </p>
                <p>
                    Dekningen gjelder fra registrert startdato og omfatter skade
                    på reisegods, forsinket avgang og avbestilling innenfor
                    vilkårene.
                </p>
                <p>
                    Egenandel, unntak og dokumentasjonskrav fremgår av avtalen
                    og kan variere med valgt dekning.
                </p>
                <p>
                    Les hele avtalen for detaljer om ansvar, tidsfrister og
                    begrensninger.
                </p>
            </Flex>
        ),
        openLabel: "Les vilkår",
        primaryLabel: "Jeg godtar",
        secondaryLabel: "Avbryt",
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne modal", async () => {
            const openButton = screen.getByRole("button", {
                name: /les vilkår/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", {
                        name: /vilkår for forsikring/i,
                    }),
                ).toBeInTheDocument();
            });
        });
    },
};

export const UtenLukkeKnapp: Story = {
    name: "Uten lukkeknapp",
    args: {
        heading: "Betalingsvalg",
        body: (
            <Flex direction="column" gap="m">
                <p>Velg hvordan du vil betale forsikringen.</p>
                <FieldGroup legend="Alternativer">
                    {["Månedlig", "Årlig", "Trekk fra konto"].map((valg) => (
                        <Checkbox
                            {...CheckboxStory.args}
                            key={valg}
                            name="betalingsvalg"
                            value={valg}
                        >
                            {valg}
                        </Checkbox>
                    ))}
                </FieldGroup>
            </Flex>
        ),
        openLabel: "Velg betalingsmåte",
        primaryLabel: "Lagre valg",
        secondaryLabel: "Avbryt",
        showCloseButton: false,
    },
    render: (args) => <ModalExample {...args} />,
    play: async ({ userEvent, step }) => {
        await step("Åpne modal", async () => {
            const openButton = screen.getByRole("button", {
                name: /velg betalingsmåte/i,
            });
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.getByRole("heading", { name: /betalingsvalg/i }),
                ).toBeInTheDocument();
            });
        });
    },
};
