import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, screen, waitFor } from "storybook/test";
import { Button } from "../../button/Button.js";
import { Flex } from "../../flex/index.js";
import { CookieConsent } from "../CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "../CookieConsentContext.js";
import type {
    CookieConsentProps,
    CookieConsentProviderProps,
} from "../types.js";
import "../styles/_index.scss";

type ExampleProps = Pick<
    CookieConsentProviderProps,
    "cookieName" | "cookiePath" | "cookieDomain" | "functional" | "statistics"
> &
    Pick<CookieConsentProps, "aboutPage" | "aboutPageLinkText" | "blocking"> & {
        heading: string;
        body: React.ReactNode;
        openLabel: string;
        openTestId?: string;
    };

function CookieConsentExample({
    cookieName,
    cookiePath,
    cookieDomain,
    functional = true,
    statistics = true,
    aboutPage,
    aboutPageLinkText,
    blocking = false,
    heading,
    body,
    openLabel,
    openTestId = "open-cookie-consent",
}: ExampleProps) {
    const OpenConsentButton = () => {
        const { openConsentModal } = useCookieConsent();

        return (
            <Button onClick={() => openConsentModal()} data-testid={openTestId}>
                {openLabel}
            </Button>
        );
    };

    return (
        <div style={{ maxWidth: "40rem" }}>
            <CookieConsentProvider
                cookieName={cookieName}
                cookiePath={cookiePath}
                cookieDomain={cookieDomain}
                functional={functional}
                statistics={statistics}
            >
                <Flex direction="column" gap="m">
                    <div>
                        <h2>{heading}</h2>
                        {body}
                    </div>
                    <div>
                        <OpenConsentButton />
                    </div>
                    <CookieConsent
                        blocking={blocking}
                        aboutPage={aboutPage}
                        aboutPageLinkText={aboutPageLinkText}
                    />
                </Flex>
            </CookieConsentProvider>
        </div>
    );
}

const meta = {
    title: "Komponenter/CookieConsent",
    component: CookieConsent,
    parameters: {
        layout: "centered",
    },
    args: {
        cookieName: "demo-consent-cookie",
        functional: true,
        statistics: true,
        blocking: false,
        aboutPage: "https://www.fremtind.no/informasjonskapsler",
        aboutPageLinkText: "Les mer om hvordan vi bruker informasjons­kapsler",
        openTestId: "open-cookie-consent",
    },
    argTypes: {
        heading: { table: { disable: true } },
        body: { table: { disable: true } },
        openLabel: { table: { disable: true } },
        openTestId: { table: { disable: true } },
        cookieName: {
            control: "text",
            table: {
                defaultValue: { summary: "demo-consent-cookie" },
            },
        },
        cookiePath: {
            control: "text",
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        cookieDomain: {
            control: "text",
            table: {
                defaultValue: { summary: "undefined" },
            },
        },
        functional: {
            control: "boolean",
            table: {
                defaultValue: { summary: "true" },
            },
        },
        statistics: {
            control: "boolean",
            table: {
                defaultValue: { summary: "true" },
            },
        },
        blocking: {
            control: "boolean",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        aboutPage: {
            control: "text",
            table: {
                defaultValue: {
                    summary: "https://www.fremtind.no/informasjonskapsler",
                },
            },
        },
        aboutPageLinkText: {
            control: "text",
            table: {
                defaultValue: {
                    summary:
                        "Les mer om hvordan vi bruker informasjons­kapsler",
                },
            },
        },
    },
    tags: ["autodocs"],
    play: async ({ canvas, userEvent, step }) => {
        await step("Åpne cookie consent", async () => {
            const openButton = canvas.getByTestId("open-cookie-consent");
            await userEvent.click(openButton);
            await waitFor(() => {
                expect(
                    screen.queryByRole("dialog") ||
                        screen.queryByRole("alertdialog"),
                ).toBeInTheDocument();
            });
        });
    },
} satisfies Meta;

export default meta;

type Story = StoryObj<ExampleProps>;

export const Personverninnstillinger: Story = {
    name: "Personverninnstillinger",
    args: {
        heading: "Personverninnstillinger",
        body: (
            <Flex direction="column" gap="m">
                <p>
                    Brukeren kan når som helst åpne samtykkedialogen igjen fra
                    en side for personvern eller innstillinger.
                </p>
                <p>
                    Dette er den vanligste integrasjonen: en vanlig knapp som
                    åpner modalen ved behov.
                </p>
            </Flex>
        ),
        openLabel: "Endre samtykke",
    },
    render: (args) => <CookieConsentExample {...args} />,
};

export const Forstegangsvalg: Story = {
    name: "Førstegangsvalg",
    args: {
        heading: "Samtykke ved første besøk",
        body: (
            <Flex direction="column" gap="m">
                <p>
                    Når brukeren må ta stilling før de går videre, kan modalen
                    være blokkerende.
                </p>
                <p>
                    Denne varianten bruker `blocking`, som gjør dialogen til et
                    `alertdialog`.
                </p>
            </Flex>
        ),
        openLabel: "Vis samtykkedialog",
        blocking: true,
    },
    render: (args) => <CookieConsentExample {...args} />,
};

export const TilpassetLenketekst: Story = {
    name: "Tilpasset lenketekst",
    args: {
        heading: "Lenke til egen informasjonsside",
        body: (
            <Flex direction="column" gap="m">
                <p>
                    Dersom løsningen har egen ordlyd for personvern eller
                    informasjonskapsler, kan lenketeksten tilpasses.
                </p>
                <p>
                    Selve dialogen forblir lik, men lenken kan følge språk og
                    begreper i produktet ditt.
                </p>
            </Flex>
        ),
        openLabel: "Åpne personvernvalg",
        aboutPageLinkText:
            "Se hvordan vi bruker informasjons­kapsler i løsningen",
    },
    render: (args) => <CookieConsentExample {...args} />,
};

export const SamtykkeForHeleLosningen: Story = {
    name: "Samtykke for hele løsningen",
    args: {
        heading: "Sett cookiePath for å unngå dobbelt samtykke",
        body: (
            <Flex direction="column" gap="m">
                <p>
                    Uten <code>cookiePath</code> lar nettleseren seg styre av
                    sin egen standard, som er <em>mappen</em> til siden der
                    dialogen ble besvart. Svarer brukeren på{" "}
                    <code>/innlogging/bankid</code>, får samtykket{" "}
                    <code>path=/innlogging</code> og følger ikke med videre inn
                    i løsningen.
                </p>
                <p>
                    Da blir brukeren spurt på nytt etter innlogging, og det
                    ligger plutselig to samtykke-cookies med samme navn. Sett{" "}
                    <code>cookiePath=&quot;/&quot;</code> slik at samtykket
                    gjelder hele løsningen uansett hvor dialogen ble vist.
                </p>
                <p>
                    Skal samtykket deles på tvers av subdomener, kan{" "}
                    <code>cookieDomain</code> settes i tillegg — men da må alle
                    appene bruke samme <code>cookieName</code>, og verdien må
                    settes per miljø: nettleseren forkaster et domene som ikke
                    matcher vertsnavnet, slik som på localhost.
                </p>
                <p>
                    Merk at effekten ikke er synlig i Storybook, siden stories
                    kjører på rot-nivå. Sjekk <code>path</code>-kolonnen i
                    nettleserens cookie-oversikt i din egen app.
                </p>
            </Flex>
        ),
        openLabel: "Vis samtykkedialog",
        cookiePath: "/",
    },
    render: (args) => <CookieConsentExample {...args} />,
};
