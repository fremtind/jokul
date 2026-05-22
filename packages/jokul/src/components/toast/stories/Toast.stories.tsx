import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { fn } from "storybook/test";
import "../../button/styles/button.scss";
import "../styles/_index.scss";
import { Toast as ToastComponent } from "../Toast.js";
import type { ToastContent, ToastOptions } from "../types.js";

type ToastStoryArgs = Omit<ToastOptions, "timeout"> & {
    content: ToastContent;
    key: string;
    timeout?: number;
};

const state = {
    add: fn(() => "toast-story"),
    close: fn(),
    pauseAll: fn(),
    remove: fn(),
    resumeAll: fn(),
    visibleToasts: [],
};

const neutralToast = {
    key: "toast-neutral",
    content: {
        title: "Informasjon",
        content: "Her kommer relevant informasjon.",
    },
} satisfies ToastStoryArgs;

const infoToast = {
    key: "toast-info",
    variant: "info",
    content: {
        title: "Dokumentasjon lagt til",
        content: "Dokumentet er lagret på saken.",
    },
} satisfies ToastStoryArgs;

const successToast = {
    key: "toast-success",
    variant: "success",
    content: {
        title: "Dekningen din er oppdatert",
        content: "Endringene blir aktive etter 31.01.2025",
    },
} satisfies ToastStoryArgs;

const warningToast = {
    key: "toast-warning",
    variant: "warning",
    content: {
        title: "Du blir snart logget ut",
        content: "Lagre arbeidet ditt før økten avsluttes.",
    },
} satisfies ToastStoryArgs;

const errorToast = {
    key: "toast-error",
    variant: "error",
    content: {
        title: "Kunne ikke lagre endringen",
        content:
            "Prøv igjen, eller kontakt kundeservice hvis problemet vedvarer.",
    },
} satisfies ToastStoryArgs;

const progressToast = {
    key: "toast-progress",
    variant: "success",
    timeout: 5000,
    content: {
        title: "Dekningen din er oppdatert",
        content: "Endringene blir aktive etter 31.01.2025",
    },
} satisfies ToastStoryArgs;

const actionToast = {
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
} satisfies ToastStoryArgs;

const toastWithoutTitle = {
    key: "toast-without-title",
    variant: "success",
    content: "Endringene blir aktive etter 31.01.2025",
} satisfies ToastStoryArgs;

const variants = [
    neutralToast,
    infoToast,
    successToast,
    warningToast,
    errorToast,
];

const meta = {
    title: "Komponenter/Toast",
    component: ToastComponent,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        state: { table: { disable: true } },
    },
    args: {
        state,
        toast: successToast,
    },
} satisfies Meta<typeof ToastComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
    args: {
        toast: neutralToast,
    },
};

export const Info: Story = {
    args: {
        toast: infoToast,
    },
};

export const Success: Story = {
    args: {
        toast: successToast,
    },
};

export const Warning: Story = {
    args: {
        toast: warningToast,
    },
};

export const ErrorToast: Story = {
    name: "Error",
    args: {
        toast: errorToast,
    },
};

export const MedProgress: Story = {
    args: {
        toast: progressToast,
    },
};

export const MedHandling: Story = {
    args: {
        toast: actionToast,
    },
};

export const UtenTittel: Story = {
    args: {
        toast: toastWithoutTitle,
    },
};

export const AlleVarianter: Story = {
    render: (args) => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "min(480px, 100%)",
            }}
        >
            {variants.map((toast) => (
                <ToastComponent
                    {...args}
                    key={toast.key}
                    state={state}
                    toast={toast}
                />
            ))}
        </div>
    ),
};
