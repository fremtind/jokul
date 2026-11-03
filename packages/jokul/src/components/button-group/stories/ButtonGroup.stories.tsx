import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "../../card/Card.jsx";
import { Flex } from "../../flex/Flex.jsx";
import { ButtonGroup } from "../ButtonGroup.jsx";

const meta = {
    title: "Komponenter/Button Group",
    args: {
        mainAction: {
            children: "Fortsett",
        },
    },
    decorators: (Story) => (
        <Card
            as={Flex}
            style={{
                minWidth: "max(90vw, 100%)",
                maxWidth: "60ch",
                minHeight: "40ex",
            }}
            alignItems="end"
            padding="l"
        >
            <Story />
        </Card>
    ),
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleAction: Story = {
    name: "Én handling",
    render: (args) => <ButtonGroup {...args} />,
};

export const TwoActions: Story = {
    name: "Hovedhandling og sekundærhandling",
    args: {
        mainAction: { children: "Bekreft endringer" },
        secondaryAction: { children: "Avbryt" },
    },
    render: (args) => <ButtonGroup {...args} />,
};
