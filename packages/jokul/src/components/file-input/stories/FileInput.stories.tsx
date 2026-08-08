import type { Meta, StoryObj } from "@storybook/nextjs";
import { FileInput } from "../FileInput.js";

const meta = {
    title: "Komponenter/File Input",
    component: FileInput,
    args: {
        label: "Last opp dokumenter",
        description: "Tillatte formater: JPG, PNG",
        children: "Velg fil",
        accept: "image/*,.pdf",
        multiple: false,
    },
} satisfies Meta<typeof FileInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FileInputStory: Story = {
    name: "File Input",
};
