import type { Meta, StoryObj } from "@storybook/nextjs";
import type { FC } from "react";
import type { WithChildren } from "../../../core/types.js";
import { PrimaryButton } from "../../button/Button.js";
import { CookieConsent as CookieConsentComponent } from "../CookieConsent.js";
import {
    CookieConsentProvider,
    useCookieConsent,
} from "../CookieConsentContext.js";
import "../styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/CookieConsent",
    component: CookieConsentProvider,
    args: {
        cookieName: "demo-consent-cookie",
        functional: true,
        statistics: true,
    },
} satisfies Meta<typeof CookieConsentProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper: FC<WithChildren> = ({ children }) => {
    const { openConsentModal } = useCookieConsent();

    return (
        <div>
            <PrimaryButton onClick={() => openConsentModal()}>
                Åpne samtykker
            </PrimaryButton>
            {children}
        </div>
    );
};

export const CookieConsent: Story = {
    args: {
        children: (
            <Wrapper>
                <CookieConsentComponent aboutPage="https://www.fremtind.no/informasjonskapsler" />
            </Wrapper>
        ),
    },
};
