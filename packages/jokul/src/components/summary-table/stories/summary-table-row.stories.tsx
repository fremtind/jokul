import type { Meta, StoryObj } from "@storybook/nextjs";
import { SummaryTableRow } from "../SummaryTableRow.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/SummaryTable/Summary Table Row",
    component: SummaryTableRow,
    args: {
        header: "Uførepensjon",
        content: "340,00 kr/mnd",
    },
    argTypes: {
        header: {
            control: "text",
        },
        content: {
            control: "text",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof SummaryTableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _SummaryTableRow: Story = {};
