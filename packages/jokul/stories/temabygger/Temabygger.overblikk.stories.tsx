import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { type CSSProperties } from "react";
import { Button } from "../../src/components/button/index.js";
import { Card, CardImage } from "../../src/components/card/index.js";
import { Countdown } from "../../src/components/countdown/index.js";
import {
    Accordion,
    ExpandablePanel,
    Expander,
} from "../../src/components/expander/index.js";
import { Flex } from "../../src/components/flex/index.js";
import { Help } from "../../src/components/help/index.js";
import { Icon, PenIcon } from "../../src/components/icon/index.js";
import { LinkList } from "../../src/components/link-list/index.js";
import { Link } from "../../src/components/link/index.js";
import { Message } from "../../src/components/message/index.js";
import { Search } from "../../src/components/search/index.js";
import {
    SegmentedControl,
    SegmentedControlButton,
} from "../../src/components/segmented-control/index.js";
import { Tag } from "../../src/components/tag/index.js";
import { TextInput } from "../../src/components/text-input/index.js";
import { Text, Title } from "../../src/components/typography/index.js";

const insuranceLinks = [
    "Hva dekker forsikringen?",
    "Vedlikehold av bolig",
    "Vannstopper",
    "Hjelp",
];

const coverageItems = [
    "Ansvar og rettshjelp",
    "Personskade på fører og passasjerer",
    "Veihjelp",
    "Brann, tyveri og hærverk",
];

function ThemeBuilderOverview() {
    return (
        <Flex gap="16" layout={{ small: "1", large: "2" }} wrap="wrap">
            <Flex direction="column" gap="16">
                <InsuranceSummaryCard />
                <CoverageCard />
                <ChangeInsuranceCard />
            </Flex>
            <Flex direction="column" gap="16">
                <SearchCard />
                <ConversationCard />
                <NavigationCard />
                <VehicleCard />
                <AreaCard />
            </Flex>
        </Flex>
    );
}

const meta = {
    title: "Skjermbilder/Temabygger",
    component: ThemeBuilderOverview,
    tags: ["!autodocs"],
    parameters: {
        layout: "fullscreen",
        docs: {
            toc: true,
        },
    },
} satisfies Meta<typeof ThemeBuilderOverview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overblikk: Story = {
    render: () => <ThemeBuilderOverview />,
};

function InsuranceSummaryCard() {
    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="24">
                <CardImage
                    src="/images/poolside.jpg"
                    alt=""
                    style={
                        {
                            "--image-aspect-ratio": "16 / 9",
                        } as CSSProperties
                    }
                />
                <Card
                    as={Flex}
                    direction="column"
                    padding="l"
                    gap="24"
                    style={{ marginTop: "calc(var(--jkl-spacing-2xl) * -1)" }}
                >
                    <Flex direction="column" gap="16">
                        <div>
                            <Tag variant="info">Fornyes 25.05.2026</Tag>
                        </div>
                        <Flex direction="column" gap="8">
                            <Text size="m">Husforsikring</Text>
                            <Title as="h3" size="m">
                                Portveien 2, 0123 Bakkebygrenda
                            </Title>
                        </Flex>
                    </Flex>
                    <Flex direction="column" gap="8">
                        <Flex alignItems="center" gap="4">
                            <Text>xxx kr/md.</Text>
                            <Help buttonText="Prisforklaring">
                                Prisen kan endre seg ved fornyelse.
                            </Help>
                        </Flex>
                        <Text>{"<xx.xx.xxxx - xx.xx.xxxx>"}</Text>
                    </Flex>
                    <Flex direction="column" gap="8">
                        <Button variant="primary">Se over fornyelse</Button>
                        <Button variant="secondary">Meld skade</Button>
                    </Flex>
                </Card>
            </Flex>
        </Card>
    );
}

function CoverageCard() {
    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="24">
                <Flex direction="column" gap="8">
                    <Title as="h3" size="s">
                        Hva dekker forsikringen?
                    </Title>
                    <Text size="s">
                        Vi har forenklet teksten om hva forsikringen dekker og
                        ikke dekker.
                    </Text>
                </Flex>
                <SegmentedControl
                    legend="Velg dekningsvisning"
                    labelProps={{ srOnly: true }}
                >
                    <SegmentedControlButton
                        name="coverage-view"
                        value="included"
                        defaultChecked
                    >
                        Dekker
                    </SegmentedControlButton>
                    <SegmentedControlButton
                        name="coverage-view"
                        value="excluded"
                    >
                        Dekker ikke
                    </SegmentedControlButton>
                </SegmentedControl>
                <Flex direction="column" gap="8">
                    <Accordion>
                        {coverageItems.map((item) => (
                            <ExpandablePanel key={item} outlined>
                                <Expander>
                                    <Flex alignItems="center" gap="8">
                                        <Icon filled>check_circle</Icon>
                                        <Text as="span" size="s">
                                            {item}
                                        </Text>
                                    </Flex>
                                </Expander>
                                <ExpandablePanel.Content>
                                    <Text size="s">
                                        Kort forklaring av dekningen kommer her.
                                    </Text>
                                </ExpandablePanel.Content>
                            </ExpandablePanel>
                        ))}
                    </Accordion>
                </Flex>
            </Flex>
        </Card>
    );
}

function ChangeInsuranceCard() {
    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="16">
                <Flex direction="column" gap="8">
                    <Title as="h3" size="s">
                        Endre forsikringen din
                    </Title>
                    <Text size="s">
                        Her er en oversikt over hva du kan endre på i
                        forsikringen din.
                    </Text>
                </Flex>
                <Flex direction="column" gap="8">
                    <Text size="s" bold>
                        Dette kan du endre selv
                    </Text>
                    <Card
                        aria-label="Endre dekning"
                        as="button"
                        clickable
                        type="button"
                    >
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Text>
                                Dekning <strong>Kasko</strong>
                            </Text>
                            <PenIcon />
                        </Flex>
                    </Card>
                    <Card
                        aria-label="Endre leiebildekning"
                        as="button"
                        clickable
                        type="button"
                    >
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Text>
                                Leiebil er <strong>ikke dekket</strong>
                            </Text>
                            <PenIcon />
                        </Flex>
                    </Card>
                    <Card
                        aria-label="Endre maskinskadedekning"
                        as="button"
                        clickable
                        type="button"
                    >
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Text>
                                Maskinskade er <strong>dekket</strong>
                            </Text>
                            <PenIcon />
                        </Flex>
                    </Card>
                </Flex>
                <StaticSuccessToast />
            </Flex>
        </Card>
    );
}

function StaticSuccessToast() {
    return (
        <output
            className="jkl-toast jkl-toast--success"
            style={{
                maxWidth: "100%",
                width: "100%",
                marginTop: "calc(var(--jkl-spacing-l) * -1)",
            }}
        >
            <Countdown className="jkl-toast__progress" from={600_000} />
            <Flex alignItems="start" gap="xs">
                <Icon className="jkl-toast__icon" filled>
                    check_circle
                </Icon>
                <Flex
                    direction="column"
                    gap="xs"
                    className="jkl-toast__content"
                >
                    <Text as="strong" className="jkl-toast__title">
                        Endringen er lagret
                    </Text>
                    <Text className="jkl-toast__message">
                        Dekningen din er endret til Kasko. Du må vente til neste
                        hovedforfall før du kan endre tilbake.
                    </Text>
                </Flex>
                <Button
                    aria-label="Lukk varsel"
                    className="jkl-toast__dismiss-button"
                    icon={<Icon>close</Icon>}
                    type="button"
                    variant="ghost"
                />
            </Flex>
        </output>
    );
}

function SearchCard() {
    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="16">
                <Flex direction="column" gap="8">
                    <Title as="h3" size="s">
                        Hva har skjedd?
                    </Title>
                    <Text size="s">
                        Fortell oss hva som har skjedd, så hjelper vi deg å
                        finne riktig skjema.
                    </Text>
                </Flex>
                <Search placeholder="F.eks skade på TV">
                    <Search.Button />
                </Search>
            </Flex>
        </Card>
    );
}

function ConversationCard() {
    const bubbleStyle = {
        alignSelf: "flex-end",
        backgroundColor: "var(--jkl-color-background-container-accent)",
        color: "var(--jkl-color-text-default)",
    } satisfies CSSProperties;

    const timestampStyle = {
        color: "var(--jkl-color-text-subdued)",
    } satisfies CSSProperties;

    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="16">
                <Text
                    size="s"
                    style={{
                        ...timestampStyle,
                        alignSelf: "flex-end",
                    }}
                >
                    <strong>Deg</strong> 03.03.2025 kl. 09.42
                </Text>
                <Card padding="m" style={bubbleStyle}>
                    <Text size="s">
                        Da var bilen fikset, og her har du bilde av
                        kvitteringen.
                    </Text>
                    <Text size="s">Mvh Eivind</Text>
                </Card>
                <Card padding="m" style={bubbleStyle}>
                    <Text size="s">IMG_3085.HEIC</Text>
                </Card>
                <Text
                    size="s"
                    style={{ ...timestampStyle, alignSelf: "flex-start" }}
                >
                    <strong>Anita</strong> 03.03.2025 kl. 10.25
                </Text>
                <Card padding="m" style={{ alignSelf: "flex-start" }}>
                    <Text size="s">
                        Flott. Da avslutter jeg saken hos oss, med mindre det er
                        noe mer du trenger hjelp med.
                    </Text>
                    <Text size="s">Vennlig hilsen, Anita fra Fremtind</Text>
                </Card>
            </Flex>
        </Card>
    );
}

function NavigationCard() {
    return (
        <Card padding="l" outlined as="section">
            <LinkList label="Forsikringsnavigasjon" outlined>
                {insuranceLinks.map((link) => (
                    <LinkList.Link href="#" key={link}>
                        {link}
                    </LinkList.Link>
                ))}
            </LinkList>
        </Card>
    );
}

function VehicleCard() {
    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="24">
                <Title as="h3" size="s">
                    Hvilken bil vil du forsikre?
                </Title>
                <TextInput
                    label="Registreringsnummer"
                    defaultValue="12345678"
                    errorLabel="Registreringsnummeret må bestå av 2 bokstaver og 5 siffer"
                />
            </Flex>
        </Card>
    );
}

function AreaCard() {
    return (
        <Card padding="l" outlined as="section">
            <Flex direction="column" gap="24">
                <Title as="h3" size="s">
                    Hva er bruttoarealet?
                </Title>
                <Flex direction="column" gap="8">
                    <TextInput
                        label="Bruttoareal"
                        defaultValue="4750"
                        unit="kvm"
                    />
                    <Link href="#">Hvordan finner jeg bruttoarealet?</Link>
                </Flex>
                <Message
                    variant="info"
                    title="Boligen må forsikres av rådgiver"
                >
                    Hvis boligen har et bruttoareal som er over 999
                    kvadratmeter, ta kontakt med oss.
                </Message>
            </Flex>
        </Card>
    );
}
