import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Button } from "../../button/index.js";
import { Toast as ToastComponent, type ToastProps } from "../Toast.js";
import { ToastProvider, useToast } from "../toastContext.js";

import "../styles/_index.scss";
import "../../button/styles/_index.scss";

const meta = {
    title: "Komponenter/Toast",
    component: ToastComponent,
    tags: ["autodocs"],
    argTypes: {
        state: { table: { disable: true } },
        toast: {
            name: "eksempel",
            description:
                "Obs: Dette er en forenklet versjon av 'toast'-propen for å vise variantene.",
            options: [
                "Med timeout",
                "Med handling",
                "Info",
                "Error",
                "Success",
                "Warning",
                "Uten variant",
            ],
            mapping: {
                "Med handling": {
                    content: "Søknad sendt",
                    key: "",
                    variant: "success",
                    action: {
                        label: "Lukk",
                        onClick: () => {},
                    },
                },
                "Med timeout": {
                    content: "Søknad sendt",
                    key: "",
                    variant: "success",
                    timeout: 5000,
                },
                Info: {
                    content: {
                        title: "En infomelding",
                        content: "Lenger tekst om infomeldinga",
                    },
                    key: "",
                    variant: "info",
                    timeout: 0,
                },
                Error: {
                    content: {
                        title: "Kunne ikke sende søknaden",
                        content:
                            "Sjekk internettforbindelsen din og prøv igjen senere.",
                    },
                    key: "",
                    variant: "error",
                    timeout: 0,
                },
                Success: {
                    content: "Søknad sendt",
                    key: "",
                    variant: "success",
                    timeout: 0,
                },
                Warning: {
                    content: "Du blir snart logget ut",
                    key: "",
                    variant: "warning",
                    timeout: 0,
                },
                "Uten variant": {
                    content: "Hei verden",
                    key: "",
                    timeout: 0,
                },
            },
        },
    },
    args: {
        state: {
            add: () => "",
            close: () => "",
            pauseAll: () => "",
            remove: () => "",
            resumeAll: () => "",
            visibleToasts: [
                { content: "Hei verden", key: Date.now().toString() },
            ],
        },
        toast: {
            content: {
                title: "Her kommer en tittel",
                content: "Her kommer en lenger tekst.",
            },
            key: "",
        },
    },
} satisfies Meta<typeof ToastComponent>;

export default meta;
type ToastStory = StoryObj<typeof meta>;

export const ToastInContext: ToastStory = {
    render: (args) => {
        const example: ToastProps<any> = { ...args };

        function ToastUsageExample() {
            const { add } = useToast();
            const [keys, setKeys] = useState<string[]>([]);

            return (
                <Button
                    variant="primary"
                    onClick={() => {
                        setKeys([
                            ...keys,
                            add(example.toast.content, example.toast),
                        ]);
                    }}
                >
                    Vis toast
                </Button>
            );
        }

        return (
            <ToastProvider>
                <ToastUsageExample />
            </ToastProvider>
        );
    },
};
