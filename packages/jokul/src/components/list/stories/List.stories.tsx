import type { Meta, StoryObj } from "@storybook/nextjs";
import { List } from "../List.js";
import { CheckListItem, CrossListItem } from "../ListItem.js";
import "../styles/_index.scss";
import "../../link/styles/_index.scss";

const meta = {
    title: "Komponenter/List/List",
    component: List,
    subcomponents: {
        CheckListItem,
        CrossListItem,
    },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const coveredList = ["Hund", "Katt"];
const uncoveredList = ["Hest", "Fisk"];

export const _List: Story = {
    args: {
        "aria-label": "Dekningsliste",
        children: [
            ...coveredList.map((item) => (
                <CheckListItem key={item}>{item}</CheckListItem>
            )),
            ...uncoveredList.map((item) => (
                <CrossListItem key={item}>{item}</CrossListItem>
            )),
        ],
    },
};
