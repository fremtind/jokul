import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState } from "react";
import { fn } from "storybook/test";
import { Button } from "../../button/index.js";
import { Flex } from "../../flex/Flex.js";
import { Toast as ToastComponent } from "../Toast.js";
import { ToastProvider, useToast } from "../toastContext.js";
import type { ToastContent, ToastOptions } from "../types.js";

import "../../button/styles/_index.scss";
import "../../flex/styles/_index.scss";
import "../styles/_index.scss";

type StoryToast = Omit<ToastOptions, "timeout"> & {
    content: ToastContent;
    key: string;
    timeout?: number;
};

const toastExamples = [
    {
        key: "toast-success",
        variant: "success",
        timeout: 5000,
        content: {
            title: "Dekningen din er oppdatert",
            content: "Endringene blir aktive etter 31.01.2025",
        },
    },
    {
        key: "toast-warning",
        variant: "warning",
        content: {
            title: "Du blir snart logget ut",
            content: "Lagre arbeidet ditt før økten avsluttes.",
        },
    },
    {
        key: "toast-error",
        variant: "error",
        content: {
            title: "Kunne ikke lagre endringen",
            content:
                "Prøv igjen, eller kontakt kundeservice hvis problemet vedvarer.",
        },
    },
    {
        key: "toast-action",
        variant: "success",
        content: {
            title: "Utkastet er slettet",
            content: "Du kan angre handlingen i noen sekunder.",
        },
        action: {
            label: "Angre",
            onClick: fn(),
        },
    },
] satisfies StoryToast[];

const state = {
    add: fn(() => "toast-story"),
    close: fn(),
    pauseAll: fn(),
    remove: fn(),
    resumeAll: fn(),
    visibleToasts: [],
};

const meta = {
    title: "Komponenter/Toast",
    component: ToastComponent,
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <ToastProvider>
                <Story />
            </ToastProvider>
        ),
    ],
    argTypes: {
        state: { table: { disable: true } },
        toast: { table: { disable: true } },
    },
    args: {
        state,
        toast: toastExamples[0],
    },
} satisfies Meta<typeof ToastComponent>;

export default meta;
type ToastStory = StoryObj<typeof meta>;

function ToastUsageExample() {
    const { add, close } = useToast();
    const [keys, setKeys] = useState<string[]>([]);

    const showToast = (toast: StoryToast) => {
        const { content, ...options } = toast;
        setKeys((currentKeys) => [...currentKeys, add(content, options)]);
    };

    return (
        <Flex gap="m" wrap="wrap">
            {toastExamples.map((toast) => (
                <Button
                    key={toast.key}
                    variant={
                        toast.variant === "error" ? "secondary" : "primary"
                    }
                    onClick={() => showToast(toast)}
                >
                    {toast.content && typeof toast.content === "object"
                        ? toast.content.title
                        : "Vis toast"}
                </Button>
            ))}
            <Button
                variant="secondary"
                onClick={() => {
                    for (const key of keys) {
                        close(key);
                    }
                    setKeys([]);
                }}
            >
                Lukk alle
            </Button>
        </Flex>
    );
}

export const IKontekst: ToastStory = {
    name: "I kontekst",
    render: () => <ToastUsageExample />,
};
