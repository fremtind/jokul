import type { Meta, StoryObj } from "@storybook/nextjs";
import React, {
    type HTMLAttributes,
    type ReactElement,
    useState,
} from "react";
import { Button } from "../../button/index.js";
import { Card } from "../../card/index.js";
import { Chip } from "../../chip/index.js";
import { Flex } from "../../flex/Flex.js";
import { IconButton } from "../../icon-button/index.js";
import { Icon } from "../../icon/index.js";
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

const varsler = (count: number) => `${count} varsler`;

export const Oversikt: Story = {
    parameters: {
        docs: {
            description: {
                story: "Hele spennet på én skjerm. Varselet kan ankres på et element eller ligge inline, det kan vises som tall eller prikk, og det kan være viktig. Ved 0 rendres det ikke i det hele tatt. Skru på kontrollene for å se hvordan hver variant oppfører seg.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button variant="secondary">Ankret</Button>
            </NotificationBadge>
            <NotificationBadge
                {...args}
                hideCounter
                label={varsler(args.count)}
            >
                <Button variant="secondary">Prikk</Button>
            </NotificationBadge>
            <NotificationBadge {...args} urgent label={varsler(args.count)}>
                <Button variant="secondary">Viktig</Button>
            </NotificationBadge>
            <Tag>
                Inline
                <NotificationBadge {...args} label={varsler(args.count)} />
            </Tag>
            <NotificationBadge {...args} count={0}>
                <Button variant="secondary">Tomt</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const AnkretOgInline: Story = {
    name: "Ankret og inline",
    parameters: {
        docs: {
            description: {
                story: "De to plasseringsmodusene. Sender du inn et element som `children`, blir elementet anker og varselet legges oppe til høyre på det – utenfor flyten, så innholdet i ankeret flytter seg ikke. Uten `children` ligger varselet i flyten og tar plass der det står. Inline passer når innholdet selv har en naturlig plass til det, som i en tag eller en fane.\n\nPlasseringen bruker logiske egenskaper, så et ankret varsel speiles til øvre venstre i en høyre-mot-venstre-kontekst.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button>Ankret på knappen</Button>
            </NotificationBadge>
            <Tag>
                Inline i en tag
                <NotificationBadge {...args} label={varsler(args.count)} />
            </Tag>
            <Chip variant="filter" selected>
                Inline i en chip
                <NotificationBadge {...args} label={varsler(args.count)} />
            </Chip>
        </Flex>
    ),
};

export const BarePrikk: Story = {
    name: "Bare prikk",
    args: { count: 120, hideCounter: true },
    parameters: {
        docs: {
            description: {
                story: "Med `hideCounter` vises bare en prikk. Antallet er borte visuelt, men `label` leses fortsatt av skjermlesere – så bruk prikken når det er nok å vite *at* det er noe nytt, ikke hvor mye.\n\nInnrykket skalerer med ankerets bredde, så prikken legger seg i hjørnet også på smale ankere som ikonknapper.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button>En lengre knappetekst</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button>Kort</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label="3 varer i kurven">
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
                story: "Med `urgent` byttes kontrastfargen ut med en rødfarge som følger brandet. Bruk det når varselet krever at brukeren faktisk gjør noe – setter du det på alt, betyr fargen ingenting. `urgent` kan kombineres med `hideCounter`, og endrer ikke teksten skjermlesere får.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} urgent label="1 forfalt faktura">
                <Button variant="secondary">Forfalt faktura</Button>
            </NotificationBadge>
            <NotificationBadge
                {...args}
                urgent
                hideCounter
                label="1 forfalt faktura"
            >
                <Button variant="secondary">Som prikk</Button>
            </NotificationBadge>
            <NotificationBadge {...args} label={varsler(args.count)}>
                <Button variant="secondary">Vanlig, til sammenligning</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const AntallMaxOgLabel: Story = {
    name: "Antall, max og label",
    parameters: {
        docs: {
            description: {
                story: "`max` bestemmer når antallet forkortes med «+», og trenger ikke være en hel tierpotens.\n\n`label` er teksten skjermlesere får, og tittelen på ankeret. Den brukes **ordrett**, slik du sender den inn – komponenten bøyer ingenting og legger ikke antallet til selv. Siden tallet bare vises visuelt, er `label` eneste sted skjermlesere kan få det, så ta det med i strengen og hold den i takt med `count`. Bygg den gjerne av samme verdi:\n\n```tsx\n<NotificationBadge count={n} label={`${n} uleste meldinger`} />\n```",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge
                {...args}
                count={120}
                max={50}
                label="120 varsler"
            >
                <Button variant="secondary">max=50</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={120} label="120 varsler">
                <Button variant="secondary">max=99 (default)</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={1} label="1 ulest melding">
                <Button variant="secondary">Entall</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={4} label="4 uleste meldinger">
                <Button variant="secondary">Flertall</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const NaarVarseletForsvinner: Story = {
    name: "Når varselet forsvinner",
    parameters: {
        docs: {
            description: {
                story: "Ved `count={0}` rendres varselet ikke i det hele tatt – heller ikke den skjulte teksten – mens ankeret rendres som normalt og beholder ankernavnet sitt. Ankeret får da verken `title` eller `aria-describedby`, så det er ingen rester å rydde opp i.\n\nDet betyr at du kan la badgen stå permanent i JSX-en og bare sende inn tallet du har. Du trenger ingen `{count > 0 && ...}` rundt den. Negative tall og `NaN` behandles likt.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge {...args} count={3} label="3 varsler">
                <Button variant="secondary">count=3</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={0}>
                <Button variant="secondary">count=0</Button>
            </NotificationBadge>
            <NotificationBadge {...args} count={0} hideCounter>
                <Button variant="secondary">count=0 som prikk</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const TilgjengelighetIPraksis: Story = {
    name: "Tilgjengelighet i praksis",
    parameters: {
        docs: {
            description: {
                story: 'Hva komponenten faktisk gjør i DOM-en. Tallet du ser er `aria-hidden`, så det finnes ikke for skjermlesere – i stedet legges `label` som skjult tekst i varselet, og ankeret peker på den med `aria-describedby`. Ankeret får i tillegg `label` som `title`, så samme tekst dukker opp som tooltip på hover.\n\n```html\n<button\n    class="jkl-button jkl-notification-badge-anchor"\n    aria-describedby="jkl-notification-badge-«id»"\n    title="3 varsler"\n>\n    Meldinger\n</button>\n<div class="jkl-notification-badge" id="jkl-notification-badge-«id»">\n    <span aria-hidden="true">3</span>\n    <div class="jkl-sr-only">3 varsler</div>\n</div>\n```\n\nKomponenten overtar ikke det ankeret har satt selv: har det allerede en `aria-describedby`, slås de sammen, og har det sin egen `title`, beholdes den. Hover over knappene under, eller inspiser dem, for å se forskjellen.',
            },
        },
    },
    render: (args) => (
        <Flex direction="column" gap="xl" alignItems="start">
            <Flex direction="column" gap="m" alignItems="start">
                <Text bold>
                    Vanlig: labelen blir både tooltip og skjult tekst
                </Text>
                <NotificationBadge {...args} label={varsler(args.count)}>
                    <Button>Meldinger</Button>
                </NotificationBadge>
            </Flex>

            <Flex direction="column" gap="m" alignItems="start">
                <Text bold>Egen title på ankeret beholdes framfor labelen</Text>
                <NotificationBadge {...args} label={varsler(args.count)}>
                    <Button title="Gå til innboksen">Meldinger</Button>
                </NotificationBadge>
            </Flex>

            <Flex direction="column" gap="m" alignItems="start">
                <Text bold>
                    Egen aria-describedby slås sammen med varselets
                </Text>
                <NotificationBadge {...args} label={varsler(args.count)}>
                    <Button aria-describedby="min-hjelpetekst">
                        Meldinger
                    </Button>
                </NotificationBadge>
                <Text id="min-hjelpetekst">
                    Hjelpetekst som ankeret peker på fra før.
                </Text>
            </Flex>
        </Flex>
    ),
};

// Et Fragment er et gyldig React-element, så komponenten forsøker å ankre det
// – men propsene forsvinner uten noen advarsel. Casten er det stories-en
// handler om, ikke noe du skal gjøre selv.
const flereElementer = (
    <>
        <Button variant="secondary">En</Button>
        <Button variant="secondary">To</Button>
    </>
) as ReactElement<HTMLAttributes<HTMLElement>>;

export const Begrensninger: Story = {
    parameters: {
        docs: {
            description: {
                story: "To ting badgen ikke kan.\n\n**Den ankrer bare ett enkelt element.** Sender du inn et Fragment eller en liste, blir ingenting ankret – varselet faller tilbake til å flyte inline, og det skjer helt stille, uten advarsel i konsollen. Trenger du å ankre på flere ting, bruk én badge per element.\n\n**Den kan ikke ankres inni et `Card`.** Kortet har `overflow: hidden`, og varselet er absolutt posisjonert, så det klippes. Legg badgen rundt kortet i stedet – da ligger varselet utenfor og vises i sin helhet.",
            },
        },
    },
    render: (args) => (
        <Flex direction="column" gap="xl">
            <Flex direction="column" gap="m">
                <Text bold>Flere elementer som children ankrer ikke</Text>
                <Flex gap="xl" alignItems="center" wrap>
                    <NotificationBadge {...args} label={varsler(args.count)}>
                        {flereElementer}
                    </NotificationBadge>
                </Flex>
            </Flex>

            <Flex direction="column" gap="m">
                <Text bold>Rundt et Card virker, inni blir klippet</Text>
                <Flex gap="xl" alignItems="start" wrap>
                    <NotificationBadge {...args} label="3 skadesaker">
                        <Card as="button" padding="m">
                            Rundt kortet
                        </Card>
                    </NotificationBadge>
                    <Card padding="m">
                        <NotificationBadge
                            {...args}
                            label={varsler(args.count)}
                        >
                            <Button variant="primary">Inni kortet</Button>
                        </NotificationBadge>
                    </Card>
                </Flex>
            </Flex>
        </Flex>
    ),
};

export const ToppmenyMedVarselbjelle: Story = {
    name: "Toppmeny med varselbjelle",
    args: { count: 4 },
    parameters: {
        docs: {
            description: {
                story: "Det vanligste mønsteret: en ikonknapp i toppmenyen som bærer antallet uleste varsler. Ikonknapper er smale, så prikken er ofte nok her – antallet er med for skjermlesere uansett. Husk `aria-label` på selve ikonknappen; den sier hva knappen *gjør*, mens `label` på badgen sier hva tallet *er*.",
            },
        },
    },
    render: (args) => (
        <Card outlined padding="m">
            <Flex alignItems="center" justifyContent="space-between" gap="xl">
                <Text bold>Min side</Text>
                <Flex alignItems="center" gap="l">
                    <NotificationBadge
                        {...args}
                        label={`${args.count} uleste varsler`}
                    >
                        <IconButton aria-label="Varsler">
                            <Icon>notifications</Icon>
                        </IconButton>
                    </NotificationBadge>
                    <NotificationBadge {...args} count={2} label="2 varer">
                        <IconButton aria-label="Handlekurv">
                            <Icon>shopping_bag</Icon>
                        </IconButton>
                    </NotificationBadge>
                    <IconButton aria-label="Meny">
                        <Icon>menu</Icon>
                    </IconButton>
                </Flex>
            </Flex>
        </Card>
    ),
};

export const FanerMedAntall: Story = {
    name: "Faner med antall",
    parameters: {
        docs: {
            description: {
                story: "Inline-modusen i sin mest naturlige bruk: antallet står i fanetittelen og teller hva som ligger bak fanen. Fanen har allerede sin egen tekst, så badgen trenger ikke ankres – den skal bare ta plass etter teksten.\n\nSett `label` til noe som beskriver fanen, ikke bare «varsler», ellers får skjermlesere samme tekst på hver fane.",
            },
        },
    },
    render: (args) => (
        <Tabs>
            <TabList>
                <Tab>Forsikringer</Tab>
                <Tab>
                    Skadesaker
                    <NotificationBadge
                        {...args}
                        count={2}
                        label="2 nye skadesaker"
                    />
                </Tab>
                <Tab>
                    Tilbud
                    <NotificationBadge
                        {...args}
                        count={5}
                        label="5 nye tilbud"
                    />
                </Tab>
            </TabList>
            <TabPanel>Dine forsikringer</TabPanel>
            <TabPanel>Dine skadesaker</TabPanel>
            <TabPanel>Dine tilbud</TabPanel>
        </Tabs>
    ),
};

export const Handlekurv: Story = {
    args: { count: 4 },
    parameters: {
        docs: {
            description: {
                story: "Badgen brukes til mer enn varslinger, og da er `label` det som gjør den forståelig. Uten den ville skjermlesere fått «4 varsler» om en handlekurv, som er feil. Sett den til noe som faktisk beskriver innholdet, og ta antallet med.",
            },
        },
    },
    render: (args) => (
        <Flex gap="xl" alignItems="center" wrap>
            <NotificationBadge
                {...args}
                label={`${args.count} varer i kurven`}
            >
                <IconButton aria-label="Handlekurv">
                    <Icon>shopping_bag</Icon>
                </IconButton>
            </NotificationBadge>
            <NotificationBadge
                {...args}
                label={`${args.count} varer i kurven`}
            >
                <Button variant="primary">Til kassen</Button>
            </NotificationBadge>
        </Flex>
    ),
};

export const SidemenyMedAntall: Story = {
    name: "Sidemeny med antall",
    parameters: {
        docs: {
            description: {
                story: "En navigasjonsliste der flere punkter har sine egne antall, slik en innboks eller saksoversikt ofte ser ut. Her er badgen ankret på hver lenke, så tallet legger seg i hjørnet uten å skyve teksten.\n\nLa punkter uten noe nytt stå med `count={0}` – da rendres ingen badge, og du slipper å vilkårsstyre dem i JSX-en.",
            },
        },
    },
    render: (args) => (
        <Card outlined padding="l">
            <Flex direction="column" gap="l" alignItems="start">
                <NotificationBadge {...args} count={7} label="7 uleste">
                    <NavLink href="#">Innboks</NavLink>
                </NotificationBadge>
                <NotificationBadge
                    {...args}
                    count={2}
                    urgent
                    label="2 krever handling"
                >
                    <NavLink href="#">Skadesaker</NavLink>
                </NotificationBadge>
                <NotificationBadge {...args} count={0}>
                    <NavLink href="#">Arkiv</NavLink>
                </NotificationBadge>
            </Flex>
        </Card>
    ),
};

export const DynamiskAntall: Story = {
    name: "Dynamisk antall",
    parameters: {
        docs: {
            description: {
                story: "Antallet er bare en prop, så varselet dukker opp og forsvinner med tilstanden din. Legg merke til at ankeret beholder plassen sin hele veien – varselet ligger utenfor flyten, så knappen flytter seg ikke når tallet kommer eller går.\n\nMerk at komponenten ikke har noen live-region. Endringer i antallet blir derfor **ikke** annonsert av skjermlesere mens brukeren står et annet sted på siden; teksten er tilgjengelig når de treffer ankeret. Skal en endring varsles aktivt, må du gjøre det selv ved siden av badgen.",
            },
        },
    },
    render: (args) => {
        const [count, setCount] = useState(args.count);

        return (
            <Flex direction="column" gap="xl" alignItems="start">
                <Flex gap="m" wrap>
                    <Button
                        variant="secondary"
                        onClick={() => setCount((value) => value + 1)}
                    >
                        Ny melding
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setCount((value) => value + 25)}
                    >
                        25 nye
                    </Button>
                    <Button onClick={() => setCount(0)}>
                        Marker som lest
                    </Button>
                </Flex>

                <Flex gap="xl" alignItems="center" wrap>
                    <NotificationBadge
                        {...args}
                        count={count}
                        label={`${count} uleste meldinger`}
                    >
                        <Button>Innboks</Button>
                    </NotificationBadge>
                    <NotificationBadge
                        {...args}
                        count={count}
                        hideCounter
                        label={`${count} uleste meldinger`}
                    >
                        <IconButton aria-label="Varsler">
                            <Icon>notifications</Icon>
                        </IconButton>
                    </NotificationBadge>
                </Flex>

                <Text>
                    {count === 0
                        ? "Ingen uleste meldinger, og ingen badge i DOM-en."
                        : `count=${count}`}
                </Text>
            </Flex>
        );
    },
};
