import type { Meta, StoryObj } from "@storybook/nextjs";
import type React from "react";
import { useState } from "react";
import { Popover as PopoverComponent } from "../Popover.js";
import "../../button/styles/_index.scss";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Popover/PopoverUncontrolled",
    component: PopoverComponent,
} satisfies Meta<typeof PopoverComponent>;

export default meta;

type Story = StoryObj<typeof PopoverComponent>;

type PopoverProps = React.ComponentProps<typeof PopoverComponent>;

const PopoverUncontrolledComponent = (args: PopoverProps) => {
    const [open, setOpen] = useState(false);

    return (
        <PopoverComponent {...args} open={open} onOpenChange={setOpen}>
            <PopoverComponent.Trigger
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                asChild
            >
                Åpne popover
            </PopoverComponent.Trigger>
            <PopoverComponent.Content padding={24}>
                Dette er innholdet i Popover
            </PopoverComponent.Content>
        </PopoverComponent>
    );
};

export const PopoverUncontrolled: Story = {
    args: {
        open: false,
        onOpenChange: () => {},
        roleOptions: { role: "menu" },
    },
    render: (args) => <PopoverUncontrolledComponent {...args} />,
};
