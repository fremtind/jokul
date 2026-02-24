import { ColorItem, ColorPalette } from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj } from "@storybook/nextjs";
import * as color_tokens from "../legacy/color.brand.tokens.json" with {
    type: "json",
};

const meta: Meta = {
    title: "Tokens/Farge",
    tags: ["!autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const brandColors = Object.entries(color_tokens.default.color.brand);
console.log(brandColors);
export const Colors: Story = {
    name: "Farge-tokens",
    render: () => (
        <ColorPalette>
            {brandColors.map((color) => (
                <ColorItem
                    key={color[0]}
                    title={color[0]}
                    colors={["#f0f0f0"]}
                    subtitle={"Hei"}
                />
            ))}
        </ColorPalette>
    ),
};
