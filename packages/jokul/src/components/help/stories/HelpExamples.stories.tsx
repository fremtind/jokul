import type { Meta, StoryObj } from "@storybook/nextjs";
import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "../../description-list/index.js";
import { Flex } from "../../flex/index.js";
import { Link } from "../../link/index.js";
import { BETA_Help as Help } from "../Help.js";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../description-list/styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/Help/Eksempler",
    args: { position: "top" },
    component: Help,
} satisfies Meta<typeof Help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Help1: Story = {
    name: "Knyttet til tekst",
    args: {
        position: "bottom",
        showButtonText: false,
        buttonText: "Pris på tjenesten",
        children:
            "Reise SMS er en gratistjeneste levert av telefonoperatøren din.",
    },
    render: (args) => (
        <Flex gap="m" direction="column" style={{ maxWidth: "40ch" }}>
            <Flex gap="2xs" alignItems="center">
                <h1 className="jkl-heading-1">Reise SMS</h1>
                <Help {...args} />
            </Flex>
            <p>
                Når du kommer til et nytt land, vil du få en SMS med påminnelse
                om hva du skal gjøre når noe skjer, og hvor du kan få hjelp.
                Døgnet rundt i hele verden.
            </p>
        </Flex>
    ),
};

export const Help2: Story = {
    name: "I Description List",
    args: {
        position: "right",
        showButtonText: false,
        buttonText: "Hva er unntakene?",
        iconPosition: "right",
        children: (
            <p>
                Reiseforsikringen gjelder i hele verden, unntatt i land som{" "}
                <Link href="https://www.regjeringen.no/no/tema/utenrikssaker/reiseinformasjon/reiserad_land/id2589040/">
                    Utenriksdepartementet fraråder å reise til
                </Link>
                .
            </p>
        ),
    },
    render: (args) => (
        <DescriptionList>
            <DescriptionTerm>Område</DescriptionTerm>
            <DescriptionDetail data-layout-density="compact">
                <Flex gap="xs">
                    <p>Hele verden</p>
                    <Help {...args} />
                </Flex>
            </DescriptionDetail>
        </DescriptionList>
    ),
};
