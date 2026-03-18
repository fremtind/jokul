import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../src/components/button/Button.js";
import { Card } from "../../src/components/card/index.js";
import { Flex } from "../../src/components/flex/Flex.js";
import {
    ErrorMessage,
    InfoMessage,
    SuccessMessage,
    WarningMessage,
} from "../../src/components/message/index.js";
import { Tag } from "../../src/components/tag/index.js";
import { TextInput } from "../../src/components/text-input/TextInput.js";

import "../../src/components/button/styles/_index.scss";
import "../../src/components/card/styles/_index.scss";
import "../../src/components/message/styles/_index.scss";
import "../../src/components/tag/styles/_index.scss";
import "../../src/components/text-input/styles/_index.scss";

/**
 * Original Jøkul color values (from color.tokens.json).
 * Applied by default so the story always starts with the Jøkul look,
 * even after generate:tokens has merged the fantasy file into the CSS.
 */
const jokulColorVars: React.CSSProperties = {
    ["--jkl-color-background-page" as string]: "light-dark(#F4F2EF, #1B1917)",
    ["--jkl-color-background-container" as string]:
        "light-dark(#F9F9F9, #313030)",
    ["--jkl-color-background-container-low" as string]:
        "light-dark(#ECE9E5, #000000)",
    ["--jkl-color-background-container-high" as string]:
        "light-dark(#FFFFFF, #313030)",
    ["--jkl-color-background-container-inverted" as string]:
        "light-dark(#1B1917, #F9F9F9)",
    ["--jkl-color-background-container-subdued" as string]:
        "light-dark(#C8C5C3, #636060)",
    ["--jkl-color-background-action" as string]: "light-dark(#1B1917, #F9F9F9)",
    ["--jkl-color-background-alert-neutral" as string]:
        "light-dark(#E0DBD4, #E0DBD4)",
    ["--jkl-color-background-alert-info" as string]:
        "light-dark(#D3D3F6, #A9A9CA)",
    ["--jkl-color-background-alert-success" as string]:
        "light-dark(#ACD3B5, #94B79B)",
    ["--jkl-color-background-alert-warning" as string]:
        "light-dark(#EFDD9E, #DECC8D)",
    ["--jkl-color-background-alert-error" as string]:
        "light-dark(#F6B3B3, #DE9E9E)",
    ["--jkl-color-text-default" as string]: "light-dark(#1B1917, #F9F9F9)",
    ["--jkl-color-text-subdued" as string]: "light-dark(#636060, #C8C5C3)",
    ["--jkl-color-text-on-action" as string]: "light-dark(#F9F9F9, #1B1917)",
    ["--jkl-color-border-action" as string]: "light-dark(#1B1917, #F9F9F9)",
    ["--jkl-color-border-separator" as string]: "light-dark(#C8C5C3, #636060)",
    ["--jkl-color-border-separator-strong" as string]:
        "light-dark(#636060, #C8C5C3)",
};

/**
 * DNB Eufemia color values (from fantasyColor.tokens.json).
 */
const fantasyColorVars: React.CSSProperties = {
    ["--jkl-color-background-page" as string]: "light-dark(#FFFFFF, #000000)",
    ["--jkl-color-background-container" as string]:
        "light-dark(#F8F8F8, #333333)",
    ["--jkl-color-background-container-low" as string]:
        "light-dark(#EBEBEB, #000000)",
    ["--jkl-color-background-container-high" as string]:
        "light-dark(#FFFFFF, #333333)",
    ["--jkl-color-background-container-inverted" as string]:
        "light-dark(#000000, #F8F8F8)",
    ["--jkl-color-background-container-subdued" as string]:
        "light-dark(#CCCCCC, #737373)",
    ["--jkl-color-background-action" as string]: "light-dark(#007272, #A5E1D2)",
    ["--jkl-color-background-alert-neutral" as string]:
        "light-dark(#EBEBEB, #333333)",
    ["--jkl-color-background-alert-info" as string]:
        "light-dark(#F2F2F5, #23195A)",
    ["--jkl-color-background-alert-success" as string]:
        "light-dark(#D2F0E9, #007B5E)",
    ["--jkl-color-background-alert-warning" as string]:
        "light-dark(#FEEBC1, #FDBB31)",
    ["--jkl-color-background-alert-error" as string]:
        "light-dark(#FDEEEE, #DC2A2A)",
    ["--jkl-color-text-default" as string]: "light-dark(#000000, #FFFFFF)",
    ["--jkl-color-text-subdued" as string]: "light-dark(#737373, #CCCCCC)",
    ["--jkl-color-text-on-action" as string]: "light-dark(#FFFFFF, #000000)",
    ["--jkl-color-border-action" as string]: "light-dark(#007272, #A5E1D2)",
    ["--jkl-color-border-separator" as string]: "light-dark(#CCCCCC, #737373)",
    ["--jkl-color-border-separator-strong" as string]:
        "light-dark(#737373, #CCCCCC)",
};

type ThemeArgs = { theme: "jokul" | "dnb" };

const meta: Meta<ThemeArgs> = {
    title: "Skjermbilder/Fantasy Theme",
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        theme: {
            name: "Theme",
            control: { type: "radio" },
            options: ["jokul", "dnb"],
        },
    },
    args: {
        theme: "jokul",
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FantasyTheme: Story = {
    render: ({ theme }) => {
        const activeVars = theme === "dnb" ? fantasyColorVars : jokulColorVars;

        return (
            <div
                data-theme="light"
                style={{
                    backgroundColor: "var(--jkl-color-background-page)",
                    minHeight: "100vh",
                    ...activeVars,
                }}
            >
                <Flex
                    direction="column"
                    gap="l"
                    style={{
                        padding: "var(--jkl-unit-20)",
                        maxWidth: "680px",
                        marginInline: "auto",
                    }}
                >
                    <Flex
                        alignItems="center"
                        style={{
                            paddingBlock: "var(--jkl-unit-8)",
                            borderBottom:
                                "1px solid var(--jkl-color-border-separator)",
                        }}
                    >
                        <h1 className="jkl-heading-3">Komponenteksempel</h1>
                    </Flex>

                    <Card variant="low" padding="xl">
                        <Flex direction="column" gap="l">
                            <Flex as="hgroup" direction="column" gap="s">
                                <p
                                    className="jkl-small"
                                    style={{
                                        color: "var(--jkl-color-text-subdued)",
                                    }}
                                >
                                    Reiseforsikring
                                </p>
                                <h2 className="jkl-heading-2">
                                    Min forsikring
                                </h2>
                            </Flex>

                            <Flex gap="s">
                                <Tag>Aktiv</Tag>
                                <Tag>Familie</Tag>
                            </Flex>

                            <Flex direction="column" gap="m">
                                <TextInput
                                    label="Fullt navn"
                                    defaultValue="Kari Nordmann"
                                />
                                <TextInput
                                    label="E-postadresse"
                                    defaultValue="kari@example.no"
                                />
                            </Flex>

                            <Flex gap="m">
                                <Button variant="primary">
                                    Lagre endringer
                                </Button>
                                <Button variant="secondary">Avbryt</Button>
                            </Flex>
                        </Flex>
                    </Card>

                    <Flex direction="column" gap="s">
                        <InfoMessage title="Informasjon">
                            Forsikringen din gjelder for hele familien ved
                            reiser opptil 45 dager.
                        </InfoMessage>
                        <SuccessMessage title="Alt er i orden">
                            Betalingen din er registrert for denne måneden.
                        </SuccessMessage>
                        <WarningMessage title="Viktig merknad">
                            Forsikringen utløper om 30 dager. Husk å fornye den.
                        </WarningMessage>
                        <ErrorMessage title="Noe gikk galt">
                            Vi klarte ikke å hente forsikringsdetaljer. Prøv
                            igjen senere.
                        </ErrorMessage>
                    </Flex>

                    <Flex gap="m" justifyContent="end">
                        <Button variant="ghost">Avslutt forsikring</Button>
                    </Flex>
                </Flex>
            </div>
        );
    },
};
