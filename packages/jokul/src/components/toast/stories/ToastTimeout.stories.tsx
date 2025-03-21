import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../radio-button/styles/_index.scss";
import "../../text-area/styles/_index.scss";
import { ToastProvider } from "../index.js";
import { Toast } from "../Toast.js";
import { ToastTimeoutExample } from "./ToastTimeout.js";

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

const meta: Meta<typeof Toast> = {
    title: "komponenter/Toast",
    component: Toast,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        toast: {
            key: "",
            content: "",
            table: {
                disable: true,
            },
        },
        state: {
            state: mockState,
            table: {
                disable: true,
            },
        },
        className: {
            table: {
                disable: true,
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const ToastTimeout: Story = {
    name: "Timeout",
    render: (args) => (
        <ToastProvider placement="center" maxVisibleToasts={1}>
            <ToastTimeoutExample {...args} />
        </ToastProvider>
    ),
};
