import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { Flex } from "../../../components/flex/Flex.js";
import { BETA_Text } from "../../Text/index.js";
import { Title as BETA_Title } from "../Title.js";
import "../../../components/flex/styles/_index.scss";
import "../../Text/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Beta/Title + Text",
    component: BETA_Title,
    parameters: {
        layout: "padded",
        docs: {
            disable: true,
        },
    },
    tags: ["!autodocs", "grouping content"],
} satisfies Meta<typeof BETA_Title>;

export default meta;

type Story = StoryObj<typeof meta>;

const CleanPattern = `
    <Title as="h2" size={4}>Dekning og pris for bilen din</Title>
    <Text size={3}>
        Du kan velge mellom delkasko og kasko.
    </Text>
    <Text size={2} weight={700}>
        Egenandel fra 4 000 kr.
    </Text>
    <Text size={2}>
        Endringer trer i kraft fra første betalingsdato.
    </Text>
    /* Uten forstyrrelser fra BETA støy og flex komponent */`;

const recommendedPatternCode = `<Flex direction="column" gap="s">
    <BETA_Title as="h2" size={4}>
        Dekning og pris for bilen din
    </BETA_Title>
    <BETA_Text size={3}>
        Du kan velge mellom delkasko og kasko.
    </BETA_Text>
    <BETA_Text size={2} weight={700}>
        Egenandel fra 4 000 kr.
    </BETA_Text>
    <BETA_Text size={2}>
        Endringer trer i kraft fra første betalingsdato.
    </BETA_Text>
</Flex>`;

const apiOverviewCode = `<Flex direction="column" gap="m">
    <Flex direction="column" gap="2xs">
        <BETA_Title as="h3" size={5}>Kort tittel med ingress</BETA_Title>
        <BETA_Text as="p" size={3}>Brødtekst</BETA_Text>
        <BETA_Text as="p" size={2}>Sekundær tekst</BETA_Text>
    </Flex>

    <Flex direction="column" gap="2xs">
        <BETA_Title as="h4" size={6}>Viktig informasjon</BETA_Title>
        <BETA_Text as="p" size={2} weight={700}>Uthevet tekst</BETA_Text>
        <BETA_Text as="p" size={2}>Supplerende tekst</BETA_Text>
    </Flex>
</Flex>`;

export const EnkeltAPIEksempel: Story = {
    render: () => (
        <pre>
            <code>{CleanPattern}</code>
        </pre>
    ),
};

export const RecommendedPattern: Story = {
    render: () => (
        <Flex direction="column" gap="2xs">
            <BETA_Title as="h2" size={4}>
                Dekning og pris for bilen din
            </BETA_Title>
            <BETA_Text size={3}>
                Du kan velge mellom delkasko og kasko. Vi anbefaler kasko for
                nyere biler og delkasko for eldre biler med lavere verdi.
            </BETA_Text>
            <BETA_Text size={2} weight={700}>
                Egenandel fra 4 000 kr.
            </BETA_Text>
            <BETA_Text size={2}>
                Endringer trer i kraft fra første betalingsdato etter at du
                bekrefter valgene dine.
            </BETA_Text>
            <pre>
                <code>{recommendedPatternCode}</code>
            </pre>
        </Flex>
    ),
};

export const ApiOverview: Story = {
    render: () => (
        <Flex direction="column" gap="2xs">
            <BETA_Title as="h3" size={5}>
                Kort tittel med ingress
            </BETA_Title>
            <BETA_Text as="p" size={3}>
                Bruk <strong>Title</strong> for overskrift og{" "}
                <strong>Text</strong> for brødtekst med tydelig størrelse.
            </BETA_Text>
            <BETA_Text as="p" size={2}>
                Dette er en sekundær tekstlinje med mindre størrelse.
            </BETA_Text>

            <BETA_Title as="h4" size={6}>
                Viktig informasjon
            </BETA_Title>
            <BETA_Text as="p" size={2} weight={700}>
                Frist for endring er 31. mars.
            </BETA_Text>
            <BETA_Text as="p" size={2}>
                Etter fristen gjelder nye vilkår fra neste hovedforfall.
            </BETA_Text>
            <pre>
                <code>{apiOverviewCode}</code>
            </pre>
        </Flex>
    ),
};
