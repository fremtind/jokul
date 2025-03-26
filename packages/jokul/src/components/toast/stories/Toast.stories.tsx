import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/Flex.js";
import { Toast as ToastComponent } from "../Toast.js";
import "../styles/_index.scss";

const getKey = () => String(Date.now());

const mockState = {
    add: () => {
        return getKey();
    },
    remove: () => {},
    close: () => {},
    pauseAll() {},
    resumeAll() {},
    visibleToasts: [],
};

const meta = {
    title: "komponenter/Toast",
    component: ToastComponent,
    parameters: {
        layout: "centered",
    },
    args: {
        toast: {
            key: getKey(),
            content: "e",
            variant: "warning",
        },
        state: mockState,
    },
    argTypes: {
        className: {
            table: {
                disable: true,
            },
        },
        state: {
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
        toast: {
            table: {
                defaultValue: {
                    summary: undefined,
                },
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof ToastComponent>;

export const Toast: Story = {
    name: "Toast",
    args: {
        toast: {
            key: getKey(),
            content: "En kortvarig varsling",
        },
        state: mockState,
    },
};

export const ToastVariants: Story = {
    name: "Varianter",
    args: {
        toast: {
            key: getKey(),
            content: "Test",
        },
        state: mockState,
    },
    render: (args) => {
        return (
            <Flex gap={24} direction="column">
                <ToastComponent {...args} />
                <ToastComponent
                    {...args}
                    toast={{ ...args.toast, variant: "info" }}
                />
                <ToastComponent
                    {...args}
                    toast={{ ...args.toast, variant: "error" }}
                />
                <ToastComponent
                    {...args}
                    toast={{ ...args.toast, variant: "success" }}
                />
                <ToastComponent
                    {...args}
                    toast={{ ...args.toast, variant: "warning" }}
                />
            </Flex>
        );
    },
};
