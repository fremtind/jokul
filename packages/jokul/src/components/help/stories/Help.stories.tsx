import type { Meta, StoryObj } from "@storybook/nextjs";
import { Help } from "../Help.js";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../description-list/styles/_index.scss";
import { Flex } from "../../flex/index.js";

const meta = {
    title: "Komponenter/Help",
    component: Help,
    args: {
        position: "top",
        showButtonText: false,
        buttonText: "Hjelp",
        children: "Jeg er en hjelpetekst",
        iconPosition: "left",
    },
} satisfies Meta<typeof Help>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Help: Story = {};

export const TekstMedHelp: Story = {
    args: {
        buttonText: "Pris på tjenesten",
        children:
            "Reise SMS er en gratistjeneste levert av telefonoperatøren din.",
    },
    render: (args) => (
        <Flex gap="m" direction="column" style={{ maxWidth: "40ch" }}>
            skal vi dokumentere denne use casen noe mer?
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
