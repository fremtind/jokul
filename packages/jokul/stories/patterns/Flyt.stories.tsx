import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { Button } from "../../src/components/button/index.js";
import { Card } from "../../src/components/card/index.js";
import {
    Combobox,
    type ComboboxPartialChangeEvent,
} from "../../src/components/combobox/index.js";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../../src/components/description-list/index.js";
import {
    ExpandablePanel,
    Expander,
} from "../../src/components/expander/index.js";
import { Flex } from "../../src/components/flex/index.js";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronUpIcon,
    Icon,
    PenIcon,
    PlusIcon,
} from "../../src/components/icon/index.js";
import { Link } from "../../src/components/link/index.js";
import { ListItem, OrderedList } from "../../src/components/list/index.js";
import { Menu, MenuItem } from "../../src/components/menu/index.js";
import {
    RadioButton,
    RadioButtonGroup,
} from "../../src/components/radio-button/index.js";
import { BETA_Select } from "../../src/components/select/index.js";
import {
    Tab,
    TabList,
    TabPanel,
    Tabs,
} from "../../src/components/tabs/index.js";
import { formatNumber } from "../../src/utilities/index.js";

const meta: Meta = {
    title: "Skjermbilder/Saksbehandler",
    args: {
        navn: "Arnoldine Gerda Vaa Corneliussen",
        kjønn: "Kvinne",
        alder: 45,
        saksnummer: 21166,
    },
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

const AvtaleTilBehandling = ({ text = "Li Liv", amount = 500000 }) => (
    <ListItem
        // @ts-ignore
        style={{ listStyle: "none" }}
    >
        <Card clickable>
            <Flex
                justifyContent="space-between"
                alignItems="center"
                gap="none s"
                wrap="wrap"
                fill
            >
                <p className="jkl-text-medium">{text}</p>
                <Flex fill gap="none">
                    <p className="jkl-text-medium">{formatNumber(amount)} kr</p>
                    <Flex justifyContent="end">
                        <ChevronDownIcon />
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    </ListItem>
);

const ArkivKort = ({
    tittel = "Mottok info fra AHV",
    saksbehandler = "Flyt",
    tidspunkt = new Date().toLocaleDateString(),
    pinned = false,
    children = (
        <>
            <p className="jkl-bold">Anbefaling</p>
            <p className="jkl-paragraph-medium">
                Økt tillegg
                <br />
                Eksisterende sak under arbeid Innhent opplysninger fra lege
            </p>
        </>
    ),
}) => {
    const [expanded, setExpanded] = useState(true);
    return (
        <ListItem
            // @ts-ignore
            style={{ listStyle: "none" }}
        >
            <Card padding="m">
                <Flex direction="column" gap="xs">
                    <Flex
                        as="menu"
                        justifyContent="space-between"
                        alignItems="center"
                        style={{ margin: 0, padding: 0 }}
                    >
                        <Flex>
                            <p className="jkl-text-small">{saksbehandler}</p>
                            <p className="jkl-text-small">{tidspunkt}</p>
                        </Flex>
                        {pinned ? (
                            <Button
                                variant="ghost"
                                icon={<Icon filled>push_pin</Icon>}
                                aria-label="Pin saken"
                            />
                        ) : (
                            <Button
                                variant="ghost"
                                icon={
                                    expanded ? (
                                        <ChevronUpIcon />
                                    ) : (
                                        <ChevronDownIcon />
                                    )
                                }
                                onClick={() => setExpanded(!expanded)}
                            />
                        )}
                    </Flex>
                    <p className="jkl-heading-3">{tittel}</p>
                    <Flex direction="column" gap="none">
                        {(expanded && children) || (pinned && children)}
                    </Flex>
                </Flex>
            </Card>
        </ListItem>
    );
};

const Sidebar = () => (
    <Flex as="aside" direction="column">
        <Flex direction="column">
            <Flex as="header" direction="column" gap="none">
                <Flex justifyContent="space-between" alignItems="center">
                    <p className="jkl-text-medium">Saksinformasjon</p>
                    <Button icon={<PenIcon />} aria-label="Rediger" />
                </Flex>
                <DescriptionList>
                    <DescriptionTerm>Startdato</DescriptionTerm>
                    <DescriptionDetail>
                        {new Date().toLocaleDateString()}
                    </DescriptionDetail>
                </DescriptionList>
            </Flex>
            <ExpandablePanel>
                <ExpandablePanel.Header>
                    Kundeinformasjon
                </ExpandablePanel.Header>
                <ExpandablePanel.Content>Test</ExpandablePanel.Content>
            </ExpandablePanel>
            <Flex gap="m" wrap="wrap" justifyContent="space-between">
                <Link href="#">Saker (1)</Link>
                <Link href="#">Arkiv (1)</Link>
                <Link href="#">Alle krav (1)</Link>
                <Link href="#">Kundeengasjement (3)</Link>
                <Link href="#">ROFF (2)</Link>
            </Flex>
        </Flex>
        <Flex direction="column">
            <Flex
                as="header"
                alignItems="center"
                justifyContent="space-between"
            >
                <h2 className="jkl-heading-2">Avtaler til behandling</h2>
                <Button icon={<PlusIcon />} />
            </Flex>
            <Flex
                as={OrderedList}
                gap="s"
                direction="column"
                style={{ paddingInlineStart: 0 }}
            >
                <AvtaleTilBehandling />
                <AvtaleTilBehandling text="KS2 Kritisk Sykdom" />
                <AvtaleTilBehandling text="ULMI Ulykkesforsikring" />
                <AvtaleTilBehandling text="BHFB Behandlingsforsikring" />
            </Flex>
        </Flex>
        <Flex direction="column">
            <Flex
                as="header"
                justifyContent="space-between"
                alignItems="center"
            >
                <h2 className="jkl-heading-2">Involverte parter i saken</h2>
                <Button icon={<PlusIcon />} />
            </Flex>
            <Flex gap="s" direction="column">
                <ExpandablePanel>
                    <ExpandablePanel.Header>
                        Fullmektig: Uinteressert Akkord
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>Test</ExpandablePanel.Content>
                </ExpandablePanel>
            </Flex>
        </Flex>
    </Flex>
);

const ArkivSidebar = () => (
    <Flex
        direction="column"
        as="aside"
        aria-label="Arkiv"
        gap="none"
        style={{ top: 0, position: "sticky" }}
    >
        <Card asChild variant="low">
            <Flex
                as="menu"
                justifyContent="space-between"
                style={{ marginBlockEnd: 0 }}
            >
                <Flex gap="none">
                    <Button icon={<ChevronLeftIcon />} variant="ghost" />
                    <Button icon={<ArrowUpIcon />} variant="ghost" />
                    <Button icon={<ArrowDownIcon />} variant="ghost" />
                </Flex>
                <Flex>
                    <Menu
                        triggerElement={
                            <Button
                                icon={<ChevronDownIcon />}
                                iconPosition="right"
                                variant="ghost"
                            >
                                Vis filter
                            </Button>
                        }
                    >
                        <MenuItem>Her</MenuItem>
                        <MenuItem>er</MenuItem>
                        <MenuItem>det</MenuItem>
                        <MenuItem>noen</MenuItem>
                        <MenuItem>filter</MenuItem>
                        <MenuItem>😝</MenuItem>
                    </Menu>
                </Flex>
            </Flex>
        </Card>
        <Flex
            as={OrderedList}
            style={{ paddingInlineStart: 0, margin: 0 }}
            direction="column"
            gap="xs"
        >
            <ArkivKort pinned />
            <ArkivKort tittel="Avsluttet avtale 1">
                <p className="jkl-bold">Bedømmelse: Avslutt avtale</p>
            </ArkivKort>
            <ArkivKort tittel="Mottok forslag fra AHV">
                <p className="jkl-bold">Dekning 1</p>
            </ArkivKort>
            <ArkivKort tittel="Mottok forslag fra AHV">
                <p className="jkl-bold">Dekning 2</p>
            </ArkivKort>
            <ArkivKort tittel="Mottok forslag fra AHV">
                <p className="jkl-bold">Dekning 3</p>
            </ArkivKort>
            <ArkivKort tittel="Mottok forslag fra AHV">
                <p className="jkl-bold">Dekning 4</p>
            </ArkivKort>
            <ArkivKort tittel="Opprettet sak">
                <DescriptionList>
                    <DescriptionTerm>Hendelsesdato</DescriptionTerm>
                    <DescriptionDetail>
                        {new Date().toLocaleDateString()}
                    </DescriptionDetail>
                </DescriptionList>
            </ArkivKort>
            <Card asChild padding="m">
                <Flex gap="s">
                    <Button variant="secondary">Til bunnen</Button>
                    <Button variant="secondary">Til toppen</Button>
                </Flex>
            </Card>
        </Flex>
    </Flex>
);

const Aktivitetskort = ({
    tittel = "Vurder Livsforsikring • 500 000 kr",
    sakOgDato = "1. LI Livsforsikring, 23.11.2023",
    children = (
        <Flex direction="column">
            <DescriptionList>
                <DescriptionTerm>AHV</DescriptionTerm>
                <DescriptionDetail>Devlis bedømt</DescriptionDetail>
                <DescriptionTerm>T100</DescriptionTerm>
                <DescriptionDetail>E66</DescriptionDetail>
            </DescriptionList>

            <RadioButtonGroup legend="Bedømmelse" inline>
                <RadioButton value="1" name="e">
                    Innvilget
                </RadioButton>
                <RadioButton value="2" name="e">
                    Avslutt avtale
                </RadioButton>
            </RadioButtonGroup>
            <Flex layout="3">
                <BETA_Select label="T-tillegg">
                    <option>e</option>
                </BETA_Select>
                <Combobox
                    label="Årsakskoder (maks 2)"
                    items={[
                        {
                            label: "E66",
                            value: "E66",
                        },
                        {
                            label: "E64",
                            value: "E64",
                        },
                        {
                            label: "A04",
                            value: "A04",
                        },
                        {
                            label: "B22",
                            value: "B22",
                        },
                    ]}
                    name={"teste-combobox"}
                    hasTagHover
                    onChange={(event: ComboboxPartialChangeEvent): void => {
                        throw new Error("Function not implemented.");
                    }}
                />
            </Flex>
            <Flex layout="3">
                <BETA_Select label="Røyketillegg">
                    <option>e</option>
                </BETA_Select>
            </Flex>
            <Flex gap="xs" direction="column">
                <ExpandablePanel>
                    <ExpandablePanel.Header>
                        Vis særtillegg
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>Test</ExpandablePanel.Content>
                </ExpandablePanel>
                <ExpandablePanel>
                    <ExpandablePanel.Header>
                        Vis C-tillegg
                    </ExpandablePanel.Header>
                    <ExpandablePanel.Content>Test</ExpandablePanel.Content>
                </ExpandablePanel>
            </Flex>
        </Flex>
    ),
}) => (
    <Card asChild padding="xl">
        <Flex direction="column">
            <Flex
                as="header"
                justifyContent="space-between"
                layout="10.2"
                alignItems="center"
            >
                <Flex direction="column" gap="none">
                    <h3 className="jkl-heading-3">{tittel}</h3>
                    <p className="jkl-text-medium">{sakOgDato}</p>
                </Flex>
                <Expander />
            </Flex>
            {children}
            <Flex
                as="footer"
                justifyContent="space-between"
                alignItems="center"
            >
                <Button variant="primary">Fullfør</Button>
                <p className="jkl-text-small">Utkast lagret</p>
            </Flex>
        </Flex>
    </Card>
);

const Main = () => (
    <Flex as="article" direction="column">
        <Tabs defaultTab={1}>
            <Flex
                as={TabList}
                // @ts-ignore
                style={{
                    inlineSize: "100%",
                    borderBlockEnd:
                        "1px solid var(--jkl-color-border-separator)",
                }}
            >
                <Tab>Oversikt</Tab>
                <Tab>Helsevurdering (4)</Tab>
            </Flex>
            <TabPanel>Oversikt</TabPanel>
            <Flex as={TabPanel} direction="column">
                <Flex wrap="wrap" layout={{ small: "1", xl: "8.4" }}>
                    <Flex direction="column">
                        <Flex
                            justifyContent="space-between"
                            alignItems="start"
                            gap="l"
                            // @ts-ignore
                            style={{
                                borderBlockEnd:
                                    "1px solid var(--jkl-color-border-separator)",
                            }}
                        >
                            <Flex direction="column" gap="none">
                                <p className="jkl-bold">Prosessnavn</p>
                                <p className="jkl-text-medium">Undertittel</p>
                            </Flex>
                            <Flex>
                                <Expander>Prosessvalg</Expander>
                            </Flex>
                        </Flex>
                        <Flex direction="column">
                            <Aktivitetskort />
                            <Aktivitetskort />
                            <Aktivitetskort />
                            <Aktivitetskort />
                            <Aktivitetskort />
                        </Flex>
                    </Flex>
                    <ArkivSidebar />
                </Flex>
            </Flex>
        </Tabs>
    </Flex>
);

export const _Flyt: StoryObj = {
    //@ts-ignore
    render: (args: {
        navn: string;
        alder: number;
        kjønn: string;
        saksnummer: number;
    }) => {
        return (
            <Flex direction="column" gap="l">
                <Flex
                    as="header"
                    justifyContent="space-between"
                    alignItems="end"
                    wrap="wrap"
                >
                    <Flex alignItems="end" wrap="wrap">
                        <h1 className="jkl-heading-1">{args.navn}</h1>
                        <Flex as="header" alignItems="end" gap="xs">
                            <p className="jkl-text-small">
                                {args.kjønn}, {args.alder} år
                            </p>
                            •
                            <Flex gap="xs">
                                <p className="jkl-text-small">Flyt</p>
                                <p className="jkl-text-small">
                                    Helsevurdering,
                                </p>
                                <p className="jkl-text-small">
                                    {args.saksnummer}
                                </p>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex gap="xs">
                        <Button>Gi fra deg sak</Button>
                        <Button>Behold sak</Button>
                        <Button>...</Button>
                    </Flex>
                </Flex>
                <Flex
                    as="main"
                    wrap="wrap"
                    layout={{ small: "1", large: "3.9", xl: "2.10" }}
                >
                    <Sidebar />
                    <Main />
                </Flex>
            </Flex>
        );
    },
};
