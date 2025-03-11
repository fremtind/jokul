import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import "../../button/styles/_index.scss";
import "../../radio-button/styles/_index.scss";
import "../../text-area/styles/_index.scss";
import { Feedback } from "../../feedback/Feedback.js";
import { ToastProvider } from "../index.js";
import { Toast } from "../Toast.js";
import { ToastUsageExample } from "./FeedbackForm.js";

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
    title: "feedback/Toast",
    component: Toast,
    parameters: {
        layout: "centered",
    },
    args: {
        toast: {
            key: getKey(),
            content: "",
        },
        state: mockState,
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
} satisfies Meta<typeof Toast>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ToppoppgaverAvtale: Story = {
    name: "Toppoppgaver (avtale)",
    render: (args) => (
        <ToastProvider placement="center" maxVisibleToasts={1}>
            <ToastUsageExample />
        </ToastProvider>
    ),
};
