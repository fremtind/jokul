import type { Meta, StoryObj } from "@storybook/nextjs";
import { PopupTip as PopuptipComponent } from "../PopupTip.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Popuptip",
    component: PopuptipComponent,
    args: {
        content: (
            <p>
                Avtalen er betalt av arbeidsgiveren din. Du betaler ingenting.
            </p>
        ),
        delay: 0,
        initialOpen: false,
        placement: "top",
    },
    decorators: (Story) => (
        <p>
            Avtalepris: 0 kr/mnd. <Story />
        </p>
    ),
    argTypes: {
        delay: { control: "number" },
        initialOpen: { control: "boolean" },
        placement: {
            control: "select",
            options: ["top", "top-start", "top-end", "left", "right"],
        },
    },
} satisfies Meta<typeof PopuptipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Popuptip: Story = {};
