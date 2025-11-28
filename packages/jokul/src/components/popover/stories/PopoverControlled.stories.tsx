import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useEffect, useState } from "react";
import { Button } from "../../button/Button.js";
import { Popover as PopoverComponent } from "../Popover.js";
import "../../button/styles/_index.scss";
import "../styles/_index.scss";

const meta: Meta = {
    title: "Komponenter/Popover/PopoverControlled",
    component: PopoverComponent,
} satisfies Meta<typeof PopoverComponent>;

export default meta;

type Story = StoryObj<typeof PopoverComponent>;

type PopoverProps = React.ComponentProps<typeof PopoverComponent>;

const PopoverControlledComponent = (args: PopoverProps) => {
    const { open: openArg, ...props } = args;
    const [open, setOpen] = useState(openArg);

    useEffect(() => {
        setOpen(openArg);
    }, [openArg]);

    return (
        <PopoverComponent {...props} open={open} onOpenChange={setOpen}>
            <PopoverComponent.Trigger
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                asChild
            >
                <Button variant="primary">Åpne popover</Button>
            </PopoverComponent.Trigger>
            <PopoverComponent.Content padding={24}>
                Dette er innholdet i Popover
            </PopoverComponent.Content>
        </PopoverComponent>
    );
};

export const PopoverControlled: Story = {
    args: {
        open: false,
        onOpenChange: () => {},
        roleOptions: { role: "menu" },
    },
    render: (args) => <PopoverControlledComponent {...args} />,
};
