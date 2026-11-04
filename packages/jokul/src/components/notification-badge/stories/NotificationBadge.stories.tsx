import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Button } from "../../button/index.js";
import { Icon } from "../../icon/index.js";
import { LinkList } from "../../link-list/index.js";
import { Tab, TabList, TabPanel, Tabs } from "../../tabs/index.js";
import { NotificationBadge } from "../NotificationBadge.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/NotificationBadge",
    component: NotificationBadge,
    args: {
        count: 3,
        max: 99,
        hideCounter: false,
        urgent: true,
    },
} satisfies Meta<typeof NotificationBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Varselbjelle: Story = {
    name: "Varselbjelle",
    parameters: {
        docs: {
            description: {
                story: "Det vanligste mønsteret: en ikonknapp (ghost, uten tekst) med varselbjelle som bærer antallet uleste varsler. Bruk `urgent` når varselet krever at brukeren gjør noe. `aria-label` på knappen sier hva knappen gjør, mens `label` på badgen sier hva tallet er og må følge `count`. Antallet vises bare visuelt, så `label` må alltid være med.",
            },
        },
    },
    render: (args) => (
        <NotificationBadge {...args} label={`${args.count} uleste varsler`}>
            <Button
                variant="ghost"
                aria-label="Varsler"
                icon={<Icon>notifications</Icon>}
            />
        </NotificationBadge>
    ),
};

export const IFaner: Story = {
    name: "I faner",
    args: { urgent: false },
    parameters: {
        docs: {
            description: {
                story: "Uten `children` ligger badgen i flyten og tar plass etter fanens tekst. Sett `label` til noe som beskriver fanen, ikke bare «varsler», slik at skjermlesere ikke får samme tekst på hver fane.",
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

export const ILinkliste: Story = {
    name: "I linkliste",
    args: { count: 120, urgent: false },
    parameters: {
        docs: {
            description: {
                story: "Inline-modusen i en linkliste. Teksten og badgen pakkes i en `span`, slik at badgen står rett etter teksten og pilen fortsatt ligger helt til høyre. Over `max` vises antallet som «99+», mens `label` kan gi skjermlesere det faktiske tallet.",
            },
        },
    },
    render: (args) => (
        <LinkList label="Min side" hideLabel={false} outlined>
            <LinkList.Link href="#">Forsikringer</LinkList.Link>
            <LinkList.Link href="#">
                <span
                    style={{
                        display: "inline-flex",
                        gap: "var(--jkl-unit-10)",
                    }}
                >
                    Innboks
                    <NotificationBadge
                        {...args}
                        label={`${args.count} uleste meldinger`}
                    />
                </span>
            </LinkList.Link>
            <LinkList.Link href="#">Fakturaer</LinkList.Link>
            <LinkList.Link href="#">Skadesaker</LinkList.Link>
            <LinkList.Link href="#">Dokumenter</LinkList.Link>
        </LinkList>
    ),
};
