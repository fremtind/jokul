import type { Meta, StoryObj } from "@storybook/nextjs";
import { LogoStamp as LogoStampComponent } from "../LogoStamp.js";
import { FraSB1ogDNB } from "../text-paths/FraSB1ogDNB.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Logo/LogoStamp",
    component: LogoStampComponent,
} satisfies Meta<typeof LogoStampComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoStamp: Story = {
    args: {
        children: <FraSB1ogDNB />,
        title: "Fra SB1 og DNB",
    },
    render: ({ ...args }) => (
        <LogoStampComponent {...args} style={{ width: "100%" }} />
    ),
};
