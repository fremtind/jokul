import type { StoryObj } from "@storybook/nextjs";
import React from "react";
import { Breadcrumb } from "../../src/components/breadcrumb/Breadcrumb.js";
import { BreadcrumbItem } from "../../src/components/breadcrumb/BreadcrumbItem.js";
import { Button } from "../../src/components/button/Button.js";
import { Card, CardImage } from "../../src/components/card/index.js";
import { LinkCard } from "../../src/components/card/stories/Card.stories.js";
import { Flex } from "../../src/components/flex/Flex.js";
import { Link } from "../../src/components/link/Link.js";
import { Logo } from "../../src/components/logo/Logo.js";
import { NavLink } from "../../src/components/nav-link/NavLink.js";
import { Tab } from "../../src/components/tabs/Tab.js";
import { TabList } from "../../src/components/tabs/TabList.js";
import { TabPanel } from "../../src/components/tabs/TabPanel.js";
import { Tabs } from "../../src/components/tabs/Tabs.js";
import { Tag } from "../../src/components/tag/index.js";
import { formatOrganisasjonsnummer } from "../../src/index.js";

const meta = {
    title: "Skjermbilder/Bedriftsmarked",
    args: {
        forretningsnavn: "Bedrift AS",
        organisasjonsnummer: 994111126,
    },
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Header = () => (
    <Card>
        <Flex justifyContent="center" as="header">
            <img
                src="https://www.sparebank1.no/content/dam/SB1/ikoner/GUI-ikoner/logo-sparebank1.svg"
                height="54"
                alt="Sparebank 1 logo"
            />
        </Flex>
    </Card>
);
const Sidebar = ({ name = "B", number = 84 }) => (
    <Card
        variant="low"
        as="nav"
        padding="l"
        style={{ maxWidth: "25ch", minWidth: "25ch" }}
    >
        <Flex direction="column">
            <Flex direction="column" gap="none">
                <p>{name}</p>
                <p>{formatOrganisasjonsnummer(number.toString())}</p>
            </Flex>
            <hr
                style={{
                    color: "var(--jkl-color-border-separator)",
                    width: "100%",
                }}
            />
            <Flex direction="column" gap="l">
                {[
                    [
                        "Hjem",
                        "Forsikringer",
                        "Faktura",
                        "Dokumenter",
                        "Kjøp forsikring",
                    ],
                    [
                        "Meld inn/ut ansatte",
                        "Endre antall ansatte",
                        "Tilganger - Bedrift AS",
                    ],
                    ["Endre kontaktinformasjon", "Kontakt oss"],
                ].map((linkGroup) => (
                    <Flex
                        direction="column"
                        key={linkGroup.toString()}
                        gap="xs"
                    >
                        {linkGroup.map((link) => (
                            <NavLink href="#" key={link}>
                                {link}
                            </NavLink>
                        ))}
                    </Flex>
                ))}
                <hr
                    style={{
                        color: "var(--jkl-color-border-separator)",
                        width: "100%",
                    }}
                />
                <Flex wrap="wrap">
                    <Button>Logg ut</Button>
                    <Button>Bytt bedrift</Button>
                </Flex>
                <Flex direction="column">
                    {["Gå til pensjon", "Meld skade"].map((link) => (
                        <Link href="#" key={link} target="_blank">
                            {link}
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    </Card>
);

export const Hjem: Story = {
    //@ts-ignore
    render: (args: {
        forretningsnavn: string;
        organisasjonsnummer: number;
    }) => {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "auto 1fr auto",
                    minHeight: "100svh",
                }}
            >
                <Header />
                <Flex gap="none" fill>
                    <Sidebar
                        name={args.forretningsnavn}
                        number={args.organisasjonsnummer}
                    />
                    <Flex
                        as="main"
                        direction="column"
                        style={{ padding: "4ex 2em", maxWidth: "1240px" }}
                        gap="m"
                    >
                        <Flex as="header" direction="column">
                            <Breadcrumb>
                                <BreadcrumbItem isLastElement>
                                    Hjem
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div>
                                <h1 className="jkl-heading-1">
                                    {args.forretningsnavn}
                                </h1>
                                <p>
                                    Organisasjonsnummer:{" "}
                                    {formatOrganisasjonsnummer(
                                        args.organisasjonsnummer.toString(),
                                    )}
                                </p>
                            </div>
                        </Flex>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "var(--jkl-unit-30)",
                            }}
                        >
                            <h2 style={{ gridColumn: "1 / -1" }}>Oppgaver</h2>
                            <Card padding="l" style={{ gridColumn: "1 / 3" }}>
                                <Flex direction="column" gap="s">
                                    <Flex>
                                        <Tag variant="warning">Viktig</Tag>
                                    </Flex>

                                    <div>
                                        <p className="jkl-heading-5">
                                            Kilometerstand må oppdatertes for
                                            kjøretøy →
                                        </p>
                                        <p>
                                            For å få full erstatning ved en
                                            skade, må kilometerstanden være
                                            riktig.{" "}
                                        </p>
                                    </div>
                                </Flex>
                            </Card>

                            <h2 style={{ gridColumn: "1 / -1" }}>Snarveier</h2>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">
                                        Forsikringer →
                                    </p>
                                    <p>Avtalene dere har hos oss</p>
                                </div>
                            </Card>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">Faktura →</p>
                                    <p>
                                        Se alle fakturaer for virksomheten din
                                    </p>
                                </div>
                            </Card>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">
                                        Dokumenter →
                                    </p>
                                    <p>
                                        Informasjon vi har sendt virksomheten
                                        din
                                    </p>
                                </div>
                            </Card>

                            <h2 style={{ gridColumn: "1 / -1" }}>Aktuelt</h2>
                            <Card padding="l">
                                <CardImage alt="Bil" />
                                <Flex direction="column" gap="s">
                                    <Flex>
                                        <Tag variant="info">Kjøretøy</Tag>
                                    </Flex>

                                    <div>
                                        <p className="jkl-heading-5">
                                            Kjøp bilforsikring →
                                        </p>
                                        <p>
                                            Trenger dere ny bilforsikring eller
                                            ønsker å flytte forsikring fra annet
                                            selskap?
                                        </p>
                                    </div>
                                </Flex>
                            </Card>

                            <h2 style={{ gridColumn: "1 / -1" }}>
                                Ser du etter disse?
                            </h2>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">Pensjon →</p>
                                    <p>Oversikt over pensjonssparingen din</p>
                                </div>
                            </Card>
                            <Card padding="l">
                                <div>
                                    <p className="jkl-heading-5">
                                        Gå til privatforsikringer →
                                    </p>
                                    <p>
                                        Forsikringer registrert på deg som
                                        person
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </Flex>
                </Flex>
                <Card data-theme="dark" variant="high" as="footer" padding="l">
                    <Flex justifyContent="space-between">
                        <Flex gap="m">
                            {[
                                "Samtykke",
                                "Fremtind Forsikring AS",
                                "Personvern og vilkår",
                                "Bruk av informasjonskapsler",
                            ].map((link) => (
                                <Link key={link} target="_blank">
                                    {link}
                                </Link>
                            ))}
                        </Flex>
                        <Logo style={{ width: "112px" }} />
                    </Flex>
                </Card>
            </div>
        );
    },
};

export const Forsikringsoversikt: Story = {
    //@ts-ignore
    render: (args: {
        forretningsnavn: string;
        organisasjonsnummer: number;
    }) => {
        return (
            <div
                style={{
                    display: "grid",
                    gridTemplateRows: "auto 1fr auto",
                    minHeight: "100svh",
                }}
            >
                <Header />
                <Flex gap="none" fill>
                    <Sidebar
                        name={args.forretningsnavn}
                        number={args.organisasjonsnummer}
                    />
                    <Flex
                        as="main"
                        direction="column"
                        style={{ padding: "4ex 2em", maxWidth: "1240px" }}
                        gap="m"
                    >
                        <Flex as="header" direction="column">
                            <Breadcrumb>
                                <BreadcrumbItem>Hjem</BreadcrumbItem>
                                <BreadcrumbItem isLastElement>
                                    Forsikringer
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <Flex justifyContent="space-between">
                                <h1 className="jkl-heading-1">Forsikringer</h1>
                                <Flex alignItems="center">
                                    <Button variant="primary">
                                        Meld skade
                                    </Button>
                                    <Button>Lag ansattbrosjyre</Button>
                                    <Button>Eksporter til Excel</Button>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex direction="column" gap="none">
                            <Tabs>
                                <TabList>
                                    <Tab>Alle forsikringer</Tab>
                                    <Tab>Ansatte</Tab>
                                    <Tab>Drift og eiendom</Tab>
                                    <Tab>Kjøretøy</Tab>
                                </TabList>
                                <TabPanel>
                                    <Flex
                                        gap="m"
                                        wrap="wrap"
                                        style={{
                                            padding:
                                                "var(--jkl-spacing-m) var(--jkl-spacing-0)",
                                        }}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7].map((number) => (
                                            <Card
                                                {...LinkCard.args}
                                                key={number}
                                            />
                                        ))}
                                    </Flex>
                                </TabPanel>
                            </Tabs>
                        </Flex>
                    </Flex>
                </Flex>
                <Card data-theme="dark" variant="high" as="footer" padding="l">
                    <Flex justifyContent="space-between">
                        <Flex gap="m">
                            {[
                                "Samtykke",
                                "Fremtind Forsikring AS",
                                "Personvern og vilkår",
                                "Bruk av informasjonskapsler",
                            ].map((link) => (
                                <Link key={link} target="_blank">
                                    {link}
                                </Link>
                            ))}
                        </Flex>
                        <Logo style={{ width: "112px" }} />
                    </Flex>
                </Card>
            </div>
        );
    },
};
