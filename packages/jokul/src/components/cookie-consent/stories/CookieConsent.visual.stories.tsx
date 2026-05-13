import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, screen, waitFor } from "storybook/test";
import { Button } from "../../button/Button.js";
import { CookieConsent } from "../CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "../CookieConsentContext.js";
import { setConsentCookie } from "../cookieConsentUtils.js";
import "../styles/_index.scss";

const COOKIE_NAME = "visual-test-consent-cookie";

// Sett cookie synkront i modulscope – kjører i nettleseren før
// CookieConsentProvider initialiserer seg og leser cookien, slik at
// modalen ikke åpnes automatisk ved render.
if (typeof document !== "undefined") {
    setConsentCookie({
        consent: { functional: "denied", statistics: "denied" },
        name: COOKIE_NAME,
    });
}

function CookieConsentVisualExample({
    blocking = false,
}: { blocking?: boolean }) {
    const OpenConsentButton = () => {
        const { openConsentModal } = useCookieConsent();
        return (
            <Button
                onClick={() => openConsentModal()}
                data-testid="open-cookie-consent"
            >
                Åpne cookie-innstillinger
            </Button>
        );
    };

    return (
        <CookieConsentProvider cookieName={COOKIE_NAME}>
            <OpenConsentButton />
            <CookieConsent
                blocking={blocking}
                aboutPage="https://www.fremtind.no/informasjonskapsler"
            />
        </CookieConsentProvider>
    );
}

const meta = {
    title: "Visuell regresjonstesting/CookieConsent",
    tags: ["visual", "!autodocs"],
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => <CookieConsentVisualExample />,
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
};

// Ikke-blokkerende modal (role="dialog") – brukes av interaksjonstester
export const Interaksjon: Story = {
    tags: ["!visual"],
    render: () => <CookieConsentVisualExample />,
};

// Blokkerende modal (role="alertdialog") – lukkes ikke ved klikk utenfor
export const InteraksjonBlokkerende: Story = {
    tags: ["!visual"],
    render: () => <CookieConsentVisualExample blocking />,
};
