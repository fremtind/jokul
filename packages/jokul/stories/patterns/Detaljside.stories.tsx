import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { type CSSProperties } from "react";
import { Button } from "../../src/components/button/Button.js";
import { Card, CardImage } from "../../src/components/card/index.js";
import {
    ExpandablePanel,
    Expander,
} from "../../src/components/expander/index.js";
import { Flex } from "../../src/components/flex/Flex.js";
import { CopyIcon, HamburgerIcon } from "../../src/components/icon/index.js";
import { LinkList } from "../../src/components/link-list/index.js";
import { NavLink } from "../../src/components/nav-link/NavLink.js";
import { PopupTip } from "../../src/components/tooltip/PopupTip.js";

import "../../src/components/button/styles/_index.scss";
import "../../src/components/expander/styles/_index.scss";
import "../../src/components/link-list/styles/_index.scss";
import "../../src/components/tooltip/styles/_index.scss";

const meta = {
    title: "Skjermbilder/Detaljside",
    component: () => null,
    parameters: {
        layout: "fullscreen",
        docs: {
            toc: true,
        },
    },
    // biome-ignore lint/complexity/noBannedTypes: Her vil jeg faktisk ha et helt tomt objekt
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

const poolside = "/images/poolside.jpg";

const Header = () => (
    <Flex
        data-size="medium"
        gap="l"
        justifyContent="space-between"
        alignItems="center"
        style={{
            marginBlockEnd: "var(--jkl-spacing-24)",
        }}
    >
        <NavLink back>Tilbake</NavLink>
        <Button variant="ghost" icon={<HamburgerIcon />} iconPosition="right">
            Meny
        </Button>
    </Flex>
);

export const Detaljside: Story = {
    render: () => {
        return (
            <Flex
                direction="column"
                gap="s"
                style={{
                    padding: "var(--jkl-unit-20)",
                    maxWidth: "calc(500px + var(--jkl-unit-10) * 40)",
                    marginInline: "auto",
                    marginBlock: "0",
                }}
            >
                <Header />
                <Flex gap="m">
                    <Card padding="xl" asChild variant="high">
                        <Flex
                            direction="column"
                            gap="l"
                            style={{ flexBasis: 999 }}
                        >
                            <Flex as="hgroup" direction="column" gap="m">
                                <p className="jkl-small">Reiseforsikring for</p>
                                <h1
                                    className="jkl-heading-2"
                                    style={
                                        {
                                            "text-box":
                                                "trim-both cap alphabetic",
                                        } as CSSProperties
                                    }
                                >
                                    Per Andreas Hansen med familie
                                </h1>
                            </Flex>
                            <p style={{ padding: "var(--jkl-unit-20) 0" }}>
                                248 kr/mnd.
                                <PopupTip content="Beløpet vil variere hver måned" />
                                <br />
                                <time>24.10.24</time> &ndash;{" "}
                                <time>24.09.25</time>
                            </p>
                            <Button
                                style={{ alignSelf: "center" }}
                                variant="primary"
                            >
                                Meld skade
                            </Button>
                        </Flex>
                    </Card>
                    <Card style={{ flexBasis: 999 }}>
                        <CardImage
                            height="110%"
                            style={{
                                minWidth: "auto",
                            }}
                            placement="full"
                            src={poolside}
                        />
                    </Card>
                </Flex>
                <ExpandablePanel variant="fill">
                    <Expander>Forsikringsdetaljer</Expander>
                    <ExpandablePanel.Content>
                        Her kommer nyttig informasjon om forsikringen
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <LinkList label="Navigasjon">
                    {[
                        "Hva dekker forsikringen?",
                        "Reisekort",
                        "SmartDelay+",
                        "Reise SMS",
                        "Hjelp",
                    ].map((title) => (
                        <LinkList.Link key={title}>{title}</LinkList.Link>
                    ))}
                </LinkList>
                <Button
                    className="jkl-spacing-24--top"
                    style={{ alignSelf: "center" }}
                >
                    Avslutt forsikring
                </Button>
            </Flex>
        );
    },
};

export const DetaljsideMedUlikeSizes: Story = {
    render: () => {
        return (
            <Flex
                direction="column"
                gap="s"
                style={{
                    padding: "var(--jkl-unit-20)",
                    maxWidth: "calc(500px + var(--jkl-unit-10) * 40)",
                    marginInline: "auto",
                    marginBlock: "0",
                }}
            >
                <Header />
                <Flex gap="m">
                    <Card
                        padding="xl"
                        asChild
                        variant="high"
                        data-size="medium"
                    >
                        <Flex
                            direction="column"
                            gap="l"
                            style={{ flexBasis: 999 }}
                        >
                            <Flex as="hgroup" direction="column" gap="m">
                                <p className="jkl-small">Reiseforsikring for</p>
                                <h1
                                    className="jkl-heading-2"
                                    style={
                                        {
                                            "text-box":
                                                "trim-both cap alphabetic",
                                        } as CSSProperties
                                    }
                                >
                                    Per Andreas Hansen med familie
                                </h1>
                            </Flex>

                            <p style={{ padding: "var(--jkl-unit-20) 0" }}>
                                248 kr/mnd.
                                <PopupTip content="Beløpet vil variere hver måned" />
                                <br />
                                <time>24.10.24</time> &ndash;{" "}
                                <time>24.09.25</time>
                            </p>

                            <Button
                                style={{ alignSelf: "center" }}
                                variant="primary"
                                data-size="large"
                            >
                                Meld skade
                            </Button>
                        </Flex>
                    </Card>
                    <Card style={{ flexBasis: 999 }}>
                        <CardImage
                            height="110%"
                            style={{
                                minWidth: "auto",
                            }}
                            placement="full"
                            src={poolside}
                        />
                    </Card>
                </Flex>
                <ExpandablePanel variant="fill">
                    <Expander>Forsikringsdetaljer</Expander>
                    <ExpandablePanel.Content>
                        Her kommer nyttig informasjon om forsikringen
                    </ExpandablePanel.Content>
                </ExpandablePanel>
                <LinkList label="Navigasjon">
                    {[
                        "Hva dekker forsikringen?",
                        "Reisekort",
                        "SmartDelay+",
                        "Reise SMS",
                        "Hjelp",
                    ].map((title) => (
                        <LinkList.Link key={title}>{title}</LinkList.Link>
                    ))}
                </LinkList>
                <Button
                    className="jkl-spacing-24--top"
                    style={{ alignSelf: "center" }}
                >
                    Avslutt forsikring
                </Button>
            </Flex>
        );
    },
};

export const SmartDelay: Story = {
    render: () => (
        <Flex
            direction="column"
            gap="xl"
            style={{
                maxWidth: "500px",
                marginInline: "auto",
                marginBlock: "var(--jkl-spacing-64)",
            }}
        >
            <Header />
            <Flex direction="column" as="hgroup" gap="m">
                <h1 className="jkl-heading-1">SmartDelay+</h1>
                <p>
                    Ved flyforsinkelse får du gratis tilgang til utvalgte
                    flyplass-lounger verden over.{" "}
                </p>
            </Flex>
            <Flex direction="column" gap="l">
                <h2 className="jkl-heading-4">1. Kopier koden</h2>
                <Flex
                    as={Card}
                    justifyContent="space-between"
                    alignItems="center"
                    gap="xl"
                    variant="low"
                    padding="m"
                    style={{ alignSelf: "start" }}
                >
                    <p>FremtindSD</p>
                    <Button icon={<CopyIcon />} variant="ghost" />
                </Flex>
                <h2 className="jkl-heading-4">2. Registrer flygning</h2>
                <p>
                    Du må registrere flyvningen senest to timer før planlagt
                    reise hos SmartDelay+.
                </p>
                <h2 className="jkl-heading-4">Ofte stilte spørsmål</h2>
                <Button variant="primary">Registrer SmartDelay+</Button>
            </Flex>
            <div>
                {[
                    "Hva er SmartDelay+?",
                    "Hvem kan bruke tjenesten?",
                    "Når kan jeg registrere?",
                    "Hvilke flygninger kan jeg registrere?",
                ].map((tittel) => (
                    <ExpandablePanel variant="stroke" key={tittel}>
                        <Expander>{tittel}</Expander>
                        <ExpandablePanel.Content>
                            En akkurat passe lang og meget god forklaring
                        </ExpandablePanel.Content>
                    </ExpandablePanel>
                ))}
            </div>
        </Flex>
    ),
};
