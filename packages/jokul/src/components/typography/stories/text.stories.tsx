import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { Link } from "../../link/index.js";
import {
    CheckListItem,
    List,
    ListItem,
    OrderedList,
} from "../../list/index.js";
import { Text } from "../index.js";
import "../../../styles/utility/_index.scss";
import "../../link/styles/_index.scss";
import "../../list/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Typografi/Text",
    component: Text,
    args: {
        bold: false,
        srOnly: false,
        short: false,
        size: "m",
        children:
            "Fremtind er ett av Norges største forsikringsselskap og står for nær en femtedel av det totale skadeforsikringsmarkedet.",
    },
    argTypes: {
        size: {
            control: "radio",
            options: ["xs", "s", "m", "l"],
            description: "Visuell størrelse.",
            table: {
                defaultValue: { summary: "m" },
                type: { summary: '"xs" | "s" | "m" | "l"' },
            },
        },
        bold: {
            control: "boolean",
            description: "Uthever teksten (font-weight: bold).",
            table: { defaultValue: { summary: "false" } },
        },
        short: {
            control: "boolean",
            description:
                "Tettere linjehøyde. Bruk når teksten i all hovedsak går over én linje (f.eks. i tabellceller eller knapper).",
            table: { defaultValue: { summary: "false" } },
        },
        srOnly: {
            control: "boolean",
            description:
                "Skjuler elementet visuelt, men beholder det for skjermlesere.",
            table: { defaultValue: { summary: "false" } },
        },
        as: {
            control: "select",
            options: [
                "p",
                "span",
                "label",
                "legend",
                "small",
                "strong",
                "em",
                "code",
                "kbd",
                "samp",
                "var",
            ],
            description:
                "Hvilket HTML-element Text rendres som. Begrenset til typografisk relevante inline-elementer, <p>, og skjema-elementene <label>/<legend>.",
            table: {
                defaultValue: { summary: "p" },
                type: {
                    summary:
                        '"p" | "span" | "label" | "legend" | "small" | "strong" | "em" | "code" | "kbd" | "samp" | "var"',
                },
            },
        },
        className: {
            control: "text",
            description:
                "Ekstra klassenavn som legges til i tillegg til `jkl-text`.",
            table: { type: { summary: "string" } },
        },
    },
    tags: ["autodocs", "grouping content"],
} satisfies Meta<typeof Text>;

type Story = StoryObj<typeof meta>;

export default meta;

/**
 * Default-tilstand. Lek gjerne med propsene i kontrollpanelet for å se
 * hvordan `size`, `bold`, `short`, `srOnly` og `as` påvirker resultatet.
 */
export const Default: Story = {};

/**
 * Text støtter fire størrelser: `xs` (14px), `s` (16px), `m` (18px) og
 * `l` (24px). Hver størrelse bruker Jøkul sine tekst-stil-tokens, så både
 * linjehøyde og andre detaljer følger med.
 */
export const SizeScale: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Text size="xs">Fontstørrelse xs</Text>
<Text size="s">Fontstørrelse s</Text>
<Text size="m">Fontstørrelse m</Text>
<Text size="l">Fontstørrelse l</Text>`,
            },
        },
    },
    render: () => (
        <>
            <Text size="xs">Fontstørrelse xs</Text>
            <Text size="s">Fontstørrelse s</Text>
            <Text size="m">Fontstørrelse m</Text>
            <Text size="l">Fontstørrelse l</Text>
        </>
    ),
};

/**
 * Bruk `bold` for å utheve tekst, og `short` for å komprimere linjehøyden
 * (f.eks. i tett-pakkede lister eller kort-lignende oppsett).
 */
export const BoldOgShort: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Text>
    Forsikringer kjøper du i banken din eller i forbundet ditt.
</Text>
<Text bold>
    Fremtind hjelper og motiverer folk til å ta vare på helsen, verdiene
    og omgivelsene sine.
</Text>
<Text short>
    Tett linjehøyde passer når det er begrenset plass.
</Text>`,
            },
        },
    },
    render: () => (
        <>
            <Text>
                Forsikringer kjøper du i banken din eller i forbundet ditt.
            </Text>
            <Text bold>
                Fremtind hjelper og motiverer folk til å ta vare på helsen,
                verdiene og omgivelsene sine.
            </Text>
            <Text short>
                Tett linjehøyde passer når det er begrenset plass, for eksempel
                i en tabellcelle eller et lite kort. Linjene ligger tettere enn
                standard brødtekst.
            </Text>
        </>
    ),
};

/**
 * Typisk brødtekst i medium størrelse. Teksten under er hentet fra
 * forsiden til fremtind.no.
 */
export const Brødtekst: Story = {
    args: {
        children:
            "Livet skjer når vi aller minst venter det. Mens noens drømmer går i oppfyllelse, går andres i knas. Gledelige begivenheter skjer hver dag, det gjør også skader og ulykker. Og midt i disse øyeblikkene møter vi deg.",
    },
};

/**
 * `as="label"` rendrer et `<label>`-element og får blokk-nivå og bunnmarg
 * automatisk. Kombineres typisk med et form-element via `htmlFor`.
 * Samme prop er tilgjengelig på `Title` når du trenger label-stil med
 * heading-typografi.
 */
export const SomLabel: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                type: "code",
                language: "tsx",
                code: `<Text as="label" htmlFor="fodselsnummer">
    Fødselsnummer
</Text>
<input id="fodselsnummer" type="text" placeholder="11 siffer" />`,
            },
        },
    },
    render: () => (
        <>
            <Text as="label" htmlFor="fodselsnummer">
                Fødselsnummer
            </Text>
            <input
                id="fodselsnummer"
                type="text"
                placeholder="11 siffer"
                style={{ padding: "8px", width: 240 }}
            />
        </>
    ),
};

/**
 * Bruk `as` til å rendre Text som semantiske inline-elementer som
 * `strong`, `em`, `kbd` og `code`.
 */
export const InlineElementer: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Text>
    Husk at du må <Text as="strong">bekrefte endringen</Text> før den
    trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
    se{" "}
    <Link href="/forsikringsbevis.pdf">
        <Text as="code">forsikringsbevis.pdf</Text>
    </Link>{" "}
    som blir lastet ned til maskinen din.
</Text>`,
            },
        },
    },
    render: () => (
        <Text>
            Husk at du må <Text as="strong">bekrefte endringen</Text> før den
            trer i kraft. Trykk <Text as="kbd">Ctrl + S</Text> for å lagre, og
            se{" "}
            <Link href="/forsikringsbevis.pdf">
                <Text as="code">forsikringsbevis.pdf</Text>
            </Link>{" "}
            som blir lastet ned til maskinen din.
        </Text>
    ),
};

/**
 * Bruk `Text` sammen med liste-komponentene (`List`, `OrderedList`,
 * `ListItem`, `CheckListItem`) fremfor å sende `as="ul"` til Text.
 * Teksten er hentet fra fremtind.no sine bærekraftssider.
 */
export const MedListe: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Text>I arbeidet med bærekraft prioriterer Fremtind:</Text>
<List>
    <CheckListItem>
        <Text as="span">Klimagassutslipp og ressursbruk</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Fysisk klimarisiko og skadeforebygging</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Ansvarlighet i verdikjeden</Text>
    </CheckListItem>
    <CheckListItem>
        <Text as="span">Helse og forebygging</Text>
    </CheckListItem>
</List>`,
            },
        },
    },
    render: () => (
        <>
            <Text>I arbeidet med bærekraft prioriterer Fremtind:</Text>
            <List>
                <CheckListItem>
                    <Text as="span">Klimagassutslipp og ressursbruk</Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span">
                        Fysisk klimarisiko og skadeforebygging
                    </Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span">Ansvarlighet i verdikjeden</Text>
                </CheckListItem>
                <CheckListItem>
                    <Text as="span">Helse og forebygging</Text>
                </CheckListItem>
            </List>
        </>
    ),
};

/**
 * `srOnly` skjuler teksten visuelt, men beholder den for skjermlesere.
 * Typisk brukt for å legge til kontekst til lenker, knapper og ikoner som
 * ellers ville vært uklare for brukere av assistive teknologier.
 */
export const KunForSkjermleser: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Text>
    Last ned{" "}
    <Link href="/vilkaar.pdf" external>
        vilkårene
        <Text as="span" srOnly> (PDF, åpnes i ny fane)</Text>
    </Link>{" "}
    før du inngår avtalen.
</Text>`,
            },
        },
    },
    render: () => (
        <Text>
            Last ned{" "}
            <Link href="/vilkaar.pdf" external>
                vilkårene
                <Text as="span" srOnly>
                    {" "}
                    (PDF, åpnes i ny fane)
                </Text>
            </Link>{" "}
            før du inngår avtalen.
        </Text>
    ),
};

/**
 * Nummerert liste med `OrderedList` — nyttig når rekkefølgen betyr noe.
 */
export const NummerertListe: Story = {
    parameters: {
        controls: { disable: true },
        docs: {
            source: {
                code: `<Text>Slik kommer du i gang:</Text>
<OrderedList>
    <ListItem>
        <Text as="span">Logg inn på Min side i banken din</Text>
    </ListItem>
    <ListItem>
        <Text as="span">Velg Meld skade</Text>
    </ListItem>
    <ListItem>
        <Text as="span">Velg forsikringen det gjelder</Text>
    </ListItem>
</OrderedList>`,
            },
        },
    },
    render: () => (
        <>
            <Text>Slik kommer du i gang:</Text>
            <OrderedList>
                <ListItem>
                    <Text as="span">Logg inn på Min side i banken din</Text>
                </ListItem>
                <ListItem>
                    <Text as="span">Velg Meld skade fra menyen</Text>
                </ListItem>
                <ListItem>
                    <Text as="span">
                        Velg forsikringen det gjelder og følg veiviseren
                    </Text>
                </ListItem>
            </OrderedList>
        </>
    ),
};
