import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import "../styles/_index.scss";
import { Toast as ToastComponent } from "../Toast.js";
import "../../button/styles/button.scss";

const meta = {
    title: "Komponenter/Toast",
    component: ToastComponent,
    tags: ["autodocs"],
    argTypes: {
        toast: {
            description:
                "Obs: Dette er en forenklet versjon av 'toast'-propen for å vise variantene.",
            options: ["Info", "Error", "Success", "Warning", "Ingen"],
            mapping: {
                Info: {
                    content: "Hei verden",
                    key: "",
                    variant: "info",
                },
                Error: {
                    content: "Hei verden",
                    key: "",
                    variant: "error",
                },
                Success: {
                    content: "Hei verden",
                    key: "",
                    variant: "success",
                },
                Warning: {
                    content: "Hei verden",
                    key: "",
                    variant: "warning",
                },
                Ingen: {
                    content: "Hei verden",
                    key: "",
                },
            },
        },
    },
    args: {
        state: {
            add: () => "e",
            close: () => "",
            pauseAll: () => "",
            remove: () => "",
            resumeAll: () => "",
            visibleToasts: [
                { content: "Hei verden", key: Date.now().toString() },
            ],
        },
        toast: {
            content: "Saken går til automatisk behandling",
            key: "",
            variant: "info",
            action: {
                label: "Lukk",
                onClick: () => {},
            },
        },
    },
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Toast: Story = {
    render: (args) => <ToastComponent {...args} />,
};
