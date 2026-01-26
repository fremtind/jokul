import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { type FC } from "react";
import { expect, screen, waitFor } from "storybook/test";
import type { WithChildren } from "../../../core/types.js";
import { Button } from "../../button/Button.js";
import { CookieConsent } from "../CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "../CookieConsentContext.js";
import { setConsentCookie } from "../cookieConsentUtils.js";

import "../styles/_index.scss";

const Wrapper: FC<WithChildren> = ({ children }) => {
    const { openConsentModal } = useCookieConsent();

    return (
        <div>
            <Button
                onClick={() => openConsentModal()}
                data-testid="open-button"
            >
                Åpne samtykker
            </Button>
            {children}
        </div>
    );
};

const meta = {
    title: "Komponenter/CookieConsent",
    component: CookieConsentProvider,
    subcomponents: {
        CookieConsent,
    },
    args: {
        cookieName: "demo-consent-cookie",
        functional: true,
        statistics: true,
        children: (
            <Wrapper>
                <CookieConsent aboutPage="https://www.fremtind.no/informasjonskapsler" />
            </Wrapper>
        ),
    },
} satisfies Meta<typeof CookieConsentProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _CookieConsent: Story = {};

export const CookieTest: Story = {
    tags: ["test"],
    play: async ({ canvas, userEvent, step }) => {
        await waitFor(() => {
            setConsentCookie({
                consent: {
                    functional: null,
                    statistics: null,
                },
                name: "demo-consent-cookie",
                maxAge: 22,
            });

            expect(document.cookie);
        });

        await step("Ingen eksisterende cookies", async () => {
            await expect(document.cookie).toContain("null");
            await expect(document.cookie).not.toContain('"accepted"');
            await expect(document.cookie).not.toContain('"denied"');
        });

        const openCookieConsentButton = canvas.getByTestId("open-button");
        await step("Åpne modal", async () => {
            await userEvent.click(openCookieConsentButton);

            await waitFor(() => {
                const modal = screen.getByRole("document");
                expect(modal).toBeInTheDocument();
            });
        });

        const acceptButton = screen.getByTestId("jkl-cookie-consent-godta");
        const rejectButton = screen.getByTestId("jkl-cookie-consent-nekt");

        await step("Aksepter cookies", async () => {
            await userEvent.click(acceptButton);

            await expect(document.cookie).toContain('"functional":"accepted"');
            await expect(document.cookie).toContain('"statistics":"accepted"');
            await expect(document.cookie).not.toContain(
                '"statistics":"denied"',
            );
            await expect(document.cookie).not.toContain(
                '"functional":"denied"',
            );
        });

        await step("Nekt cookies", async () => {
            await userEvent.click(rejectButton);

            await expect(document.cookie).toContain('"functional":"denied"');
            await expect(document.cookie).toContain('"statistics":"denied"');
            await expect(document.cookie).not.toContain(
                '"statistics":"accepted"',
            );
            await expect(document.cookie).not.toContain(
                '"functional":"accepted"',
            );
        });

        await step("Nekt cookies dersom man klikker utenfor", async () => {
            await userEvent.click(openCookieConsentButton);

            await expect(document.cookie).toContain('"functional":"denied"');
            await expect(document.cookie).toContain('"statistics":"denied"');
            await expect(document.cookie).not.toContain(
                '"statistics":"accepted"',
            );
            await expect(document.cookie).not.toContain(
                '"functional":"accepted"',
            );
        });
    },
};
