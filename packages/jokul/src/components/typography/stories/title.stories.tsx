import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { Card } from "../../card/Card.js";
import { Flex } from "../../flex/Flex.js";
import { Text, Title } from "../index.js";

import "../../../styles/utility/_index.scss";
import "../../card/styles/_index.scss";
import "../styles/_index.scss";
import "../../flex/styles/_index.scss";

const SIZES = ["xs", "s", "m", "l", "xl"] as const;

const meta = {
    title: "Komponenter/Typografi/Title",
    component: Title,
    args: {
        srOnly: false,
        size: "l",
        children: "Forsikringer kjøper du i banken din eller i forbundet ditt",
    },
    argTypes: {
        size: {
            control: "select",
            options: SIZES,
            description:
                "Visuell størrelse på tittelen, frakoblet fra `as`-nivået.",
            table: {
                defaultValue: { summary: "l" },
                type: {
                    summary: '"xs" | "s" | "m" | "l" | "xl"',
                },
            },
        },
        as: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "label", "legend"],
            description:
                "Semantisk element. Standard er h2. Bruk h1–h6 for dokument-hierarki, eller label/legend for skjema-grupperinger.",
            table: {
                defaultValue: { summary: "h2" },
                type: {
                    summary:
                        '"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "legend"',
                },
            },
        },
        srOnly: {
            control: "boolean",
            description:
                "Skjuler tittelen visuelt, men beholder den i skjermlesere.",
            table: { defaultValue: { summary: "false" } },
        },
        children: { control: "text", description: "Innholdet i tittelen." },
        className: {
            control: "text",
            description:
                "Ekstra klassenavn som legges til i tillegg til `jkl-title`.",
            table: { type: { summary: "string" } },
        },
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof meta>;

export default meta;

/**
 * Default-tilstand. Prøv ulike kombinasjoner av `as` og `size` i
 * kontrollpanelet for å se hvordan de fungerer uavhengig.
 */
export const Default: Story = {};

/**
 * Title har fem størrelser, fra `xs` (minst) til `xl` (størst).
 */
export const Sizes: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Title size="xs">…</Title>
<Title size="s">…</Title>
<Title size="m">…</Title>
<Title size="l">…</Title>
<Title size="xl">…</Title>`,
            },
        },
    },
    render: () => (
        <Flex direction="column" gap="s">
            {SIZES.map((size) => (
                <Title key={size} size={size}>
                    Markedsposisjon og eierforhold — {size}
                </Title>
            ))}
        </Flex>
    ),
};

/**
 * `as` styrer semantikk (tilgjengelighet, heading-hierarki), `size` styrer
 * visuell størrelse. De to er frakoblet.
 *
 * Først: samme semantiske element (`h2`) med ulik visuell størrelse.
 * Deretter: samme visuelle størrelse (`m`) med ulikt semantisk element.
 */
export const SemantikkOgStilFrakoblet: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `{/* Samme element (h2), ulik visuell størrelse */}
<Title size="xl">Om oss</Title>
<Title size="m">Om oss</Title>
<Title size="xs">Om oss</Title>

{/* Samme visuelle størrelse (m), ulikt semantisk element */}
<Title as="h1" size="m">Bærekraft</Title>
<Title size="m">Bærekraft</Title>
<Title as="h3" size="m">Bærekraft</Title>`,
            },
        },
    },
    render: () => (
        <Flex direction="column" gap="l">
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xs">
                    Samme element, ulik stil
                </Title>
                <Title size="xl">Om oss (h2, xl)</Title>
                <Title size="m">Om oss (h2, m)</Title>
                <Title size="xs">Om oss (h2, xs)</Title>
            </Flex>
            <Flex direction="column" gap="xs">
                <Title as="h3" size="xs">
                    Samme stil, ulikt element
                </Title>
                <Title as="h1" size="m">
                    Bærekraft (h1, m)
                </Title>
                <Title size="m">Bærekraft (h2, m)</Title>
                <Title as="h3" size="m">
                    Bærekraft (h3, m)
                </Title>
            </Flex>
        </Flex>
    ),
};

/**
 * Bruk `srOnly` når du trenger en semantisk overskrift for skjermlesere,
 * men hvor designet ikke skal vise tittelen visuelt. Nyttig for landemerker
 * (navigation, main, complementary) som allerede har visuell kontekst.
 */
export const KunForSkjermleser: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<section aria-labelledby="forsikringer">
    <Title id="forsikringer" srOnly>
        Forsikringene dine
    </Title>
    {/* Visuelt innhold for seksjonen */}
</section>`,
            },
        },
    },
    render: () => (
        <Flex direction="column" gap="xs" style={{ maxWidth: 560 }}>
            <Title srOnly>Forsikringene dine</Title>
            <Flex
                direction="row"
                gap="s"
                style={{
                    border: "1px dashed rgba(0,0,0,.3)",
                    borderRadius: 6,
                    padding: 16,
                }}
            >
                <span>🚗 Bilforsikring</span>
                <span>🏠 Husforsikring</span>
                <span>✈️ Reiseforsikring</span>
            </Flex>
            <p>
                Over: et visuelt kortgitter. h2-en &quot;Forsikringene
                dine&quot; er usynlig, men tilgjengelig for skjermlesere slik at
                landemerket er beskrevet i hierarkiet.
            </p>
        </Flex>
    ),
};

/**
 * Typisk sammensetning av `Title` og `Text` inne i et `Card`: en
 * seksjonstittel på toppen, en ingress i mellomstørrelse, og en liten
 * sekundær linje. Teksten er hentet fra fremtind.no sine bærekraftssider.
 */
export const IKort: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                type: "code",
                language: "tsx",
                code: `<Card padding="l">
    <Flex direction="column" gap="m">
        <Flex as="hgroup" direction="column" gap="xs">
            <Title>Ambisjon og bærekraftsarbeid</Title>
            <Text>
                Fremtind hjelper og motiverer folk til å ta vare på helsen,
                verdiene og omgivelsene sine — og er der når det trengs.
            </Text>
        </Flex>
        <Text size="s">
            Vi tilbyr produkter og tjenester gjennom banker og LO i Norge
            som «forsikring i bank», og vi er til stede i hele landet.
        </Text>
    </Flex>
</Card>`,
            },
        },
    },
    render: () => (
        <Card padding="l">
            <Flex direction="column" gap="m" style={{ maxWidth: 560 }}>
                <Flex as="hgroup" direction="column" gap="xs">
                    <Title>Ambisjon og bærekraftsarbeid</Title>
                    <Text>
                        Fremtind hjelper og motiverer folk til å ta vare på
                        helsen, verdiene og omgivelsene sine — og er der når det
                        trengs.
                    </Text>
                </Flex>
                <Text size="s">
                    Vi tilbyr produkter og tjenester gjennom banker og LO i
                    Norge som «forsikring i bank», og vi er til stede i hele
                    landet.
                </Text>
            </Flex>
        </Card>
    ),
};

/**
 * Skjema-grupperinger: `as="legend"` gir en fieldset-tittel, og
 * `as="label"` gir etikett for et enkeltfelt. Begge får automatisk
 * normal font-weight, relaxed linjehøyde og label får blokk-nivå +
 * bunnmarg — uavhengig av valgt `size`.
 */
export const ISkjema: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            type: "code",
            language: "tsx",
            source: {
                code: `<fieldset>
    <Title as="legend" size="xs">Kontaktinformasjon</Title>
    <Title as="label" size="xs" htmlFor="telefon">
        Telefonnummer
    </Title>
    <input id="telefon" type="tel" placeholder="8 siffer" />
</fieldset>`,
            },
        },
    },
    render: () => (
        <fieldset
            style={{
                border: "1px solid rgba(0,0,0,.2)",
                borderRadius: 6,
                padding: 16,
                maxWidth: 360,
            }}
        >
            <Title as="legend" size="xs">
                Kontaktinformasjon
            </Title>
            <Title as="label" size="xs" htmlFor="telefon">
                Telefonnummer
            </Title>
            <input
                id="telefon"
                type="tel"
                placeholder="8 siffer"
                style={{
                    padding: "8px",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            />
        </fieldset>
    ),
};

/**
 * Typisk brukstilfelle: en detaljside hos Fremtind trenger en `h1` for
 * skjermlesere og SEO, men designet skal ikke ha en dominerende tittel.
 * Behold `as="h1"` og velg en mindre `size`.
 */
export const SemantiskH1MedLavVisuellVekt: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Title as="h1" size="m">
    Forsikringene dine
</Title>
<Title size="xs">
    Kundenummer 12345678
</Title>`,
            },
        },
    },
    render: () => (
        <Flex direction="column" gap="2xs">
            <Title as="h1" size="m">
                Forsikringene dine
            </Title>
            <Title size="xs">Kundenummer 12345678</Title>
        </Flex>
    ),
};
