import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../../components/flex/Flex.js";
import { Link } from "../../../components/link/Link.js";
import { Logo } from "../../../components/logo/Logo.js";
import { tokens } from "../../../core/index.js";
import { Center } from "../../center/Center.jsx";
import { Prose } from "../../prose/Prose.jsx";
import { Cover } from "../Cover.jsx";

import "../../../components/link/styles/_index.scss";
import "../../prose/styles/_index.scss";
import "../../center/styles/_index.scss";
import "../styles/_index.scss";

const meta = {
    title: "Layout/Primitives/Cover",
    component: Cover,
    subcomponents: { Content: Cover.Content },
    tags: ["autodocs"],
    argTypes: {
        minHeight: {
            table: {
                defaultValue: {
                    summary: "100dvh",
                },
            },
            control: {
                type: "text",
            },
        },
        padding: {
            table: {
                defaultValue: { summary: "16" },
            },
            options: [...Object.keys(tokens.spacing), undefined],
            control: {
                type: "select",
            },
        },
        gap: {
            table: {
                defaultValue: { summary: "undefined" },
            },
            options: [...Object.keys(tokens.spacing), undefined],
            control: {
                type: "select",
            },
        },
        ref: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
        className: {
            table: { disable: true },
        },
        style: {
            table: { disable: true },
        },
    },
    args: {
        minHeight: "100dvh",
        padding: 16,
        gap: undefined,
    },
} satisfies Meta<typeof Cover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    parameters: {
        layout: "fullscreen",
    },
    args: {
        padding: undefined,
    },
    render: (props) => {
        return (
            <Cover {...props}>
                <Flex
                    as="header"
                    wrap
                    gap={16}
                    justifyContent="space-between"
                    alignItems="center"
                    // Vi trenger en (semantisk?) padding-prop for Flex
                    style={{ padding: "var(--jkl-unit-30)" }}
                >
                    <Logo style={{ height: "20px", flexShrink: 0 }} />
                    <Flex wrap gap={16}>
                        <Link href="#">Skadesaker</Link>
                        <Link href="#">Forsikringer</Link>
                        <Link href="#">Min side</Link>
                    </Flex>
                </Flex>
                <Cover.Content as="main">
                    <Center position="center" as={Prose}>
                        <h1>Velkommen 👋</h1>
                        <p>
                            For å dokumentere endringer på en måte som
                            automatiserer versjonering og generering av
                            changelogs, bruker vi verktøyet Changesets.
                        </p>
                        <p>
                            Changesets lar oss definere nøyaktig hvilke pakker
                            som er påvirket av en endring og hva slags
                            versjonsoppdatering (major, minor, eller patch)
                            endringen medfører.
                        </p>
                    </Center>
                </Cover.Content>
                <Flex
                    as="footer"
                    direction="column"
                    gap={24}
                    // Vi trenger en (semantisk?) padding-prop for Flex
                    style={{
                        padding: "var(--jkl-unit-30)",
                        backgroundColor:
                            "var(--jkl-color-background-container-high)",
                    }}
                >
                    <p>
                        Denne siden er laget av Jøkul designsystem for å vise
                        hvordan Cover kan brukes.
                    </p>
                    <Flex gap={16}>
                        <Link href="#">Bruk av informasjonskapsler</Link>
                        <Link external href="#">
                            Personverneklæring
                        </Link>
                    </Flex>
                </Flex>
            </Cover>
        );
    },
};
