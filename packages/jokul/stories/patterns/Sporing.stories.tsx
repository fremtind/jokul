import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { type ReactNode, useEffect, useRef, useState } from "react";
import { Button } from "../../src/components/button/index.js";
import { Card } from "../../src/components/card/index.js";
import { Checkbox } from "../../src/components/checkbox/index.js";
import { Flex } from "../../src/components/flex/index.js";
import { ArrowRightIcon } from "../../src/components/icon/index.js";
import { Link } from "../../src/components/link/index.js";
import { TextInput } from "../../src/components/text-input/index.js";
import { Text, Title } from "../../src/components/typography/index.js";

const meta = {
    title: "Mønstre/Sporing med data-track-attributter",
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component:
                    "Komponentene legger selv på `data-track-*`-attributter, så sporing blir enklere. Attributtene er usynlige i brukergrensesnittet, så stories her viser både komponenten og attributtene den faktisk rendrer. Se `TRACKING.md` i pakken for oppsett av Google Tag Manager og Mixpanel.",
            },
        },
    },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

type TrackingAttribute = [name: string, value: string];

const trackingAttributesOf = (element: Element): TrackingAttribute[] =>
    Array.from(element.attributes)
        .filter((attribute) => attribute.name.startsWith("data-track-"))
        .map(
            (attribute): TrackingAttribute => [attribute.name, attribute.value],
        );

const formatElement = (element: Element) =>
    [
        `<${element.tagName.toLowerCase()}`,
        ...trackingAttributesOf(element).map(
            ([name, value]) => `    ${name}="${value}"`,
        ),
        ">",
    ].join("\n");

const CodeBlock = ({ children }: { children: string }) => (
    <pre
        style={{
            margin: 0,
            padding: "var(--jkl-spacing-16)",
            borderRadius: "var(--jkl-border-radius-s)",
            backgroundColor: "var(--jkl-color-background-container)",
            fontFamily: "var(--jkl-font-family-mono)",
            fontSize: "0.75rem",
            lineHeight: 1.6,
            overflowX: "auto",
        }}
    >
        {children}
    </pre>
);

/**
 * Rendrer barna sine og leser av alle `data-track-*`-attributtene de faktisk
 * satte i DOM-en. En MutationObserver sørger for at avlesningen henger med når
 * attributtene endrer seg, f.eks. når en Checkbox hukes av.
 */
const Inspector = ({ children }: { children: ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [markup, setMarkup] = useState("");

    useEffect(() => {
        const root = ref.current;

        if (!root) {
            return;
        }

        const update = () =>
            setMarkup(
                Array.from(root.querySelectorAll("[data-track-component-name]"))
                    .map(formatElement)
                    .join("\n\n"),
            );

        update();

        const observer = new MutationObserver(update);
        observer.observe(root, {
            attributes: true,
            childList: true,
            subtree: true,
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Flex direction="column" gap="l" style={{ maxWidth: "44rem" }}>
            <div ref={ref}>
                <Flex direction="column" gap="m" alignItems="start">
                    {children}
                </Flex>
            </div>
            <Flex direction="column" gap="xs">
                <Text size="s" bold>
                    Dette havner i DOM-en
                </Text>
                <CodeBlock>{markup}</CodeBlock>
            </Flex>
        </Flex>
    );
};

function DefaultAttributesExample() {
    const [accepted, setAccepted] = useState(false);

    return (
        <Inspector>
            <Button variant="primary" icon={<ArrowRightIcon />}>
                Kjøp
            </Button>
            <TextInput label="E-post" name="epost" type="email" />
            <Checkbox
                name="vilkar"
                value="godtatt"
                checked={accepted}
                onChange={(event) => setAccepted(event.currentTarget.checked)}
            >
                Jeg godtar vilkårene
            </Checkbox>
            <Link href="/vilkar">Les vilkårene</Link>
        </Inspector>
    );
}

function CustomIdExample() {
    return (
        <Inspector>
            <Button tracking={{ id: "les-mer-innbo" }}>Les mer</Button>
            <Button tracking={{ id: "les-mer-reise" }}>Les mer</Button>
            <Button tracking={{ id: "les-mer-bil" }}>Les mer</Button>
        </Inspector>
    );
}

function ExtraExample() {
    return (
        <Inspector>
            <Button
                variant="primary"
                tracking={{
                    id: "hovedknapp-kjop",
                    extra: { avtale: "V20", produktkategori: "bilforsikring" },
                }}
            >
                Kjøp
            </Button>
            <Button
                tracking={{
                    extra: { antallEnheter: 3, erKampanje: true },
                }}
            >
                Legg i kurven
            </Button>
            <Button
                tracking={{
                    id: "min-id",
                    extra: {
                        componentName: "MinEgenKnapp",
                        label: "Noe annet",
                    },
                }}
            >
                Avbryt
            </Button>
        </Inspector>
    );
}

function PrivacyExample() {
    const [nationalIdentityNumber, setNationalIdentityNumber] = useState("");

    return (
        <Inspector>
            <TextInput
                label="Fødselsnummer"
                name="fnr"
                value={nationalIdentityNumber}
                onChange={(event) =>
                    setNationalIdentityNumber(event.currentTarget.value)
                }
            />
        </Inspector>
    );
}

const insuranceCards = [
    { id: "kort-bilforsikring", title: "Bilforsikring", price: "249 kr/mnd" },
    {
        id: "kort-innboforsikring",
        title: "Innboforsikring",
        price: "99 kr/mnd",
    },
];

function AncestorContextExample() {
    const ref = useRef<HTMLDivElement>(null);
    const [captured, setCaptured] = useState<string>(
        "Klikk en av knappene for å se hva en klikk-trigger ville fanget opp.",
    );

    useEffect(() => {
        const root = ref.current;

        if (!root) {
            return;
        }

        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            const clicked = target.closest("[data-track-component-name]");
            const card = target.closest(
                "[data-track-component-name='Card']",
            ) as HTMLElement | null;

            if (!clicked) {
                return;
            }

            setCaptured(
                [
                    `komponent:   ${clicked.getAttribute("data-track-component-name")}`,
                    `label:       ${clicked.getAttribute("data-track-label")}`,
                    `kort-kontekst: ${card?.getAttribute("data-track-id") ?? "(ingen)"}`,
                ].join("\n"),
            );
        };

        root.addEventListener("click", handleClick);

        return () => root.removeEventListener("click", handleClick);
    }, []);

    return (
        <Flex direction="column" gap="l" style={{ maxWidth: "44rem" }}>
            <div ref={ref}>
                <Flex gap="m" wrap>
                    {insuranceCards.map(({ id, title, price }) => (
                        <Card
                            key={id}
                            outlined
                            padding="m"
                            tracking={{ id }}
                            style={{ minWidth: "14rem" }}
                        >
                            <Flex direction="column" gap="s" alignItems="start">
                                <Title size="s" as="h3">
                                    {title}
                                </Title>
                                <Text size="s">{price}</Text>
                                <Button variant="secondary">Velg</Button>
                            </Flex>
                        </Card>
                    ))}
                </Flex>
            </div>
            <Flex direction="column" gap="xs">
                <Text size="s" bold>
                    Fanget opp
                </Text>
                <CodeBlock>{captured}</CodeBlock>
            </Flex>
        </Flex>
    );
}

function ClickCaptureExample() {
    const ref = useRef<HTMLDivElement>(null);
    const [captured, setCaptured] = useState(
        "Klikk hvor som helst i eksempelet over.",
    );

    useEffect(() => {
        const root = ref.current;

        if (!root) {
            return;
        }

        const handleClick = (event: MouseEvent) => {
            const element = (event.target as HTMLElement).closest(
                "[data-track-component-name]",
            );

            if (!element) {
                setCaptured(
                    "Ingen sporingsattributter på elementet du klikket, eller på noen av foreldrene. Ingen event hadde blitt sendt.",
                );
                return;
            }

            setCaptured(
                JSON.stringify(
                    Object.fromEntries(
                        trackingAttributesOf(element).map(([name, value]) => [
                            `$el_attr__${name}`,
                            value,
                        ]),
                    ),
                    null,
                    4,
                ),
            );
        };

        root.addEventListener("click", handleClick);

        return () => root.removeEventListener("click", handleClick);
    }, []);

    return (
        <Flex direction="column" gap="l" style={{ maxWidth: "44rem" }}>
            <div ref={ref}>
                <Flex direction="column" gap="m" alignItems="start">
                    <Button variant="primary" tracking={{ id: "send-soknad" }}>
                        Send søknaden
                    </Button>
                    <Link href="/hjelp">Trenger du hjelp?</Link>
                    <TextInput
                        label="Telefonnummer"
                        name="telefon"
                        type="tel"
                    />
                    <Text size="s">
                        Denne teksten er ikke en Jøkul-komponent, og har ingen
                        sporingsattributter.
                    </Text>
                </Flex>
            </div>
            <Flex direction="column" gap="xs">
                <Text size="s" bold>
                    Event-properties Mixpanel ville sendt
                </Text>
                <CodeBlock>{captured}</CodeBlock>
            </Flex>
        </Flex>
    );
}

export const Standardattributter: Story = {
    name: "Standardattributter",
    parameters: {
        docs: {
            description: {
                story: "Du trenger ikke gjøre noe for å komme i gang. `data-track-component-name` er alltid med, og `data-track-label`/`data-track-id` utledes av knappeteksten, labelen eller tilsvarende. Huk av checkboxen og se at `data-track-selected` følger med – attributtene oppdaterer seg når tilstanden endrer seg.\n\nTo ting er verdt å merke seg: `TextInput` gir to sporede elementer, fordi wrapperen (`Input Group`) og selve `<input>`-en begge spores, og `Button` med ikon gir et nøstet `Icon`-element. Det er normalt. Attributtene du vil spore klikk og endringer på ligger alltid på elementet brukeren faktisk interagerer med.",
            },
        },
    },
    render: () => <DefaultAttributesExample />,
};

export const EgenIdentifikator: Story = {
    name: "Egen identifikator",
    parameters: {
        docs: {
            description: {
                story: "`data-track-label` følger den synlige teksten, så tre «Les mer»-knapper er umulige å skille fra hverandre i analysen. `tracking.id` overstyrer `data-track-id` uten å røre labelen, så du beholder den lesbare teksten i rapportene og får samtidig noe unikt å gruppere på.",
            },
        },
    },
    render: () => <CustomIdExample />,
};

export const EgneEgenskaper: Story = {
    name: "Egne egenskaper med extra",
    parameters: {
        docs: {
            description: {
                story: "Trenger du å spore noe prosjektspesifikt, legg det i `extra`. Hver nøkkel blir et eget `data-track-<kebab-case-nøkkel>`-attributt, så `antallEnheter` blir `data-track-antall-enheter`. Verdiene kan være `string`, `number` eller `boolean`.\n\nDen siste knappen viser at du ikke kan ødelegge sporingen ved et uhell: `extra` med nøklene `componentName` og `label` kolliderer med Jøkuls egne attributter, og blir ganske enkelt ignorert. Jøkuls verdier står igjen.",
            },
        },
    },
    render: () => <ExtraExample />,
};

export const Personvern: Story = {
    name: "Personvern",
    parameters: {
        docs: {
            description: {
                story: "Skriv inn et fødselsnummer i feltet og se at ingenting av det dukker opp i attributtene. Jøkul sporer hvilken komponent brukeren interagerte med, aldri hva brukeren skrev inn. Det finnes ikke engang en prop som slår det på.\n\nTo ting fyller du derimot ut selv, og der har du ansvaret: `tracking.id` og `extra`. Legg aldri personopplysninger der. Husk også at `data-track-label` hentes fra synlig tekst, så en label som «Slett konto 1234.56.78901» havner rett i sporingen – bruk `id` i stedet.",
            },
        },
    },
    render: () => <PrivacyExample />,
};

export const KontekstFraForelder: Story = {
    name: "Kontekst fra nærmeste komponent",
    parameters: {
        docs: {
            description: {
                story: "Et `Card` mottar aldri klikket selv, så attributtene der genererer ingen events. De er kontekst som venter på å bli lest. Klikk en «Velg»-knapp: knappen fyrer eventet, og `closest(\"[data-track-component-name='Card']\")` forteller deg hvilket kort klikket skjedde i. Samme oppslag gjør du i en Custom JavaScript-variabel i GTM, eller rett før `mixpanel.track(...)`.\n\nMerk at `Card` ikke klarer å utlede en fornuftig label av sammensatt innhold. Sett `tracking.id` selv på kort du vil kunne skille fra hverandre.",
            },
        },
    },
    render: () => <AncestorContextExample />,
};

export const FangOppKlikk: Story = {
    name: "Fang opp klikk selv",
    parameters: {
        docs: {
            description: {
                story: "Attributtene er bare vanlig DOM-data, så du trenger ikke autocapture for å bruke dem. Dette eksempelet lytter på klikk, finner nærmeste sporede element med `closest()`, og viser event-propertyene Mixpanel ville sendt.\n\n`closest()` er poenget. Teksten i en `Button` eller `Link` ligger i et eget `<span>` inni, så et klikk midt i teksten treffer teknisk sett spannet og ikke `<button>`-en. Prøv det. Leser du attributtene rett av `event.target` i stedet, bommer du.",
            },
        },
    },
    render: () => <ClickCaptureExample />,
};
