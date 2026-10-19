import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { type ReactNode } from "react";
import { Button } from "../../button/index.js";
import { Card } from "../../card/index.js";
import { Chip } from "../../chip/index.js";
import { Flex } from "../../flex/Flex.js";
import { IconButton } from "../../icon-button/index.js";
import { GreenCheckIcon, Icon, RedCrossIcon } from "../../icon/index.js";
import { NavLink } from "../../nav-link/index.js";
import { Tab, TabList, TabPanel, Tabs } from "../../tabs/index.js";
import { Tag } from "../../tag/index.js";
import { Text } from "../../typography/index.js";
import { NotificationBadge } from "../NotificationBadge.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/NotificationBadge",
    component: NotificationBadge,
    args: {
        count: 3,
        max: 99,
        hideCounter: false,
        urgent: false,
    },
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

const anchoredToButton: Story["render"] = (args) => (
    <NotificationBadge {...args}>
        <Button>Meldinger</Button>
    </NotificationBadge>
);

export const PaaEtElement: Story = {
    name: "På et element",
    parameters: {
        docs: {
            description: {
                story: "Sender du inn et element som children, blir elementet anker og varselet plasseres oppe til høyre på det. Ankrede varsler ligger utenfor flyten, så de flytter ikke innholdet i ankeret.",
            },
        },
    },
    render: anchoredToButton,
};

export const InniEtElement: Story = {
    name: "Inni et element",
    parameters: {
        docs: {
            description: {
                story: "Uten children ligger varselet i flyten og tar plass der det står, uten posisjonering. Det passer når innholdet selv har en naturlig plass til det, som i en fane eller en tag.",
            },
        },
    },
    render: (args) => (
        <Flex direction="column" gap="xl">
            <Flex gap="xl" alignItems="center" wrap>
                <Chip variant="filter" aria-pressed>
                    Ubehandlet
                    <NotificationBadge {...args} />
                </Chip>
                <Tag>
                    Skadesaker
                    <NotificationBadge {...args} />
                </Tag>
            </Flex>

            <Tabs>
                <TabList>
                    <Tab>Forsikringer</Tab>
                    <Tab>Skadesaker</Tab>
                    <Tab>
                        Tilbud
                        <NotificationBadge {...args} />
                    </Tab>
                </TabList>
                <TabPanel>Test</TabPanel>
            </Tabs>
        </Flex>
    ),
};

export const BarePrikk: Story = {
    name: "Bare prikk",
    args: { count: 120, hideCounter: true },
    parameters: {
        docs: {
            description: {
                story: "Med `hideCounter` vises bare en prikk. Antallet er fortsatt tilgjengelig for skjermlesere. Innrykket skalerer med ankerets bredde, så prikken legger seg i hjørnet også på smale ankere som ikonknapper.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args}>
                <Button>Meldinger</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label="produkt/produkter">
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
        </Flex>
    ),
};

export const Viktig: Story = {
    parameters: {
        docs: {
            description: {
                story: "Med `urgent` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren gjør noe. `urgent` kan kombineres med `hideCounter`.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} urgent>
                <Button variant="primary">Meldinger</Button>
            </NotificationBadge>
            <NotificationBadge {...args} urgent hideCounter>
                <Button variant="primary">Meldinger</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const AntallOgLabel: Story = {
    name: "Antall og label",
    parameters: {
        docs: {
            description: {
                story: "`max` bestemmer når antallet forkortes, og trenger ikke være en hel tierpotens. `label` tar et `entall/flertall`-par og bestemmer teksten skjermlesere får, og tooltipen på ankeret. Ved 0 rendres ikke varselet i det hele tatt, men ankeret rendres som normalt.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} count={120} max={50}>
                <Button variant="secondary">max=50</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={4} label="produkt/produkter">
                <Button variant="secondary">4 produkter</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={0}>
                <Button variant="secondary">count=0</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const PaaUlikeKomponenter: Story = {
    name: "På ulike komponenter",
    args: { max: 9 },
    parameters: {
        docs: {
            description: {
                story: "Varselet kan ankres på alt som er ett klikkbart element. Plasseringen bruker logiske egenskaper, så varselet speiles til øvre venstre i en høyre-mot-venstre-kontekst.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} urgent>
                <Button variant="primary">Eksempel</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label="produkt/produkter">
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
            <NotificationBadge {...args}>
                <Chip variant="filter">Eksempel</Chip>
            </NotificationBadge>
            <NotificationBadge {...args} label="skadesak/skadesaker">
                <Card as="button" padding="m">
                    Skadesak 2024-1138
                </Card>
            </NotificationBadge>
            <NotificationBadge {...args} label="melding/meldinger">
                <NavLink href="#">Meldinger</NavLink>
            </NotificationBadge>
        </Flex>
    ),
};

const Verdict = ({
    kind,
    children,
    description,
}: {
    kind: "do" | "dont";
    children: ReactNode;
    description: string;
}) => (
    <Card outlined padding="l">
        <Flex direction="column" gap="m">
            <Flex gap="m" alignItems="center" justifyContent="space-between">
                <Text bold>{kind === "do" ? "Riktig" : "Feil"}</Text>
                {kind === "do" ? <GreenCheckIcon /> : <RedCrossIcon />}
            </Flex>
            <Flex gap="xl" alignItems="center" wrap>
                {children}
            </Flex>
            <Text>{description}</Text>
        </Flex>
    </Card>
);

const VerdictPair = ({ children }: { children: ReactNode }) => (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--jkl-spacing-24)",
            alignItems: "start",
        }}
    >
        {children}
    </div>
);

export const RiktigOgFeil: Story = {
    name: "Riktig og feil",
    parameters: {
        docs: {
            description: {
                story: "De vanligste fellene når varselet skal plasseres og beskrives.",
            },
        },
    },
    render: (args) => (
        <Flex direction="column" gap="xl">
            <VerdictPair>
                <Verdict
                    kind="do"
                    description="Send ankeret inn som children. Varselet blir knyttet til elementet med aria-describedby, og ankeret får antallet som tooltip."
                >
                    <NotificationBadge {...args}>
                        <Button>Meldinger</Button>
                    </NotificationBadge>
                </Verdict>
                <Verdict
                    kind="dont"
                    description="Ikke legg varselet ved siden av elementet. Som søsken blir det ikke ankret, det tar plass i flyten, og sammenhengen forsvinner for skjermlesere."
                >
                    <Button>Meldinger</Button>
                    <NotificationBadge {...args} />
                </Verdict>
            </VerdictPair>

            <VerdictPair>
                <Verdict
                    kind="do"
                    description="Ankre rundt et Card. Da ligger varselet utenfor kortet og vises i sin helhet."
                >
                    <NotificationBadge {...args} label="skadesak/skadesaker">
                        <Card as="button" padding="m">
                            Skadesak 2024-1138
                        </Card>
                    </NotificationBadge>
                </Verdict>
                <Verdict
                    kind="dont"
                    description="Ikke ankre inni et Card. Kortet har overflow: hidden og klipper varselet, som er absolutt posisjonert."
                >
                    <Card padding="m">
                        <NotificationBadge {...args}>
                            <Button variant="primary">Klippes</Button>
                        </NotificationBadge>
                    </Card>
                </Verdict>
            </VerdictPair>

            <VerdictPair>
                <Verdict
                    kind="do"
                    description="Sett label når antallet ikke er varslinger. Her leses «4 produkter», som faktisk beskriver innholdet."
                >
                    <NotificationBadge
                        {...args}
                        count={4}
                        label="produkt/produkter"
                    >
                        <IconButton aria-label="Handlekurv">
                            <Icon>shopping_bag</Icon>
                        </IconButton>
                    </NotificationBadge>
                </Verdict>
                <Verdict
                    kind="dont"
                    description="Ikke behold standardlabelen på noe som ikke er varslinger. Skjermlesere får «4 varsler» om en handlekurv."
                >
                    <NotificationBadge {...args} count={4}>
                        <IconButton aria-label="Handlekurv">
                            <Icon>shopping_bag</Icon>
                        </IconButton>
                    </NotificationBadge>
                </Verdict>
            </VerdictPair>

            <VerdictPair>
                <Verdict
                    kind="do"
                    description="Bruk urgent bare der brukeren må gjøre noe. Da skiller det seg ut fra resten."
                >
                    <NotificationBadge {...args} urgent>
                        <Button variant="secondary">Forfalt faktura</Button>
                    </NotificationBadge>
                    <NotificationBadge {...args}>
                        <Button variant="secondary">Meldinger</Button>
                    </NotificationBadge>
                </Verdict>
                <Verdict
                    kind="dont"
                    description="Ikke sett urgent på alt. Når alle varsler er røde, betyr fargen ingenting."
                >
                    <NotificationBadge {...args} urgent>
                        <Button variant="secondary">Forfalt faktura</Button>
                    </NotificationBadge>
                    <NotificationBadge {...args} urgent>
                        <Button variant="secondary">Meldinger</Button>
                    </NotificationBadge>
                </Verdict>
            </VerdictPair>
        </Flex>
    ),
};
