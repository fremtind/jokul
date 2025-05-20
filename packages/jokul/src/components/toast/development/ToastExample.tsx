import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useState } from "react";
import { PrimaryButton, SecondaryButton } from "../../button/Button.js";
import { ToastContent, ToastProvider, useToast } from "../index.js";
import { ToastOptions } from "../types.js";
import { Flex } from "../../flex/Flex.js";

export const toastExampleKnobs: ExampleKnobsProps = {
    boolProps: [],
    choiceProps: [
        {
            name: "Plassering",
            values: ["Sentrert", "Venstre"],
            defaultValue: 0,
        },
    ],
};

const examples: Array<[ToastContent, ToastOptions]> = [
    [
        {
            title: "Nytt i Jøkul",
            content: (
                <p className="jkl-body">
                    Les mer om{" "}
                    <a className="jkl-link" href="/komponenter/toast/">
                        Toast
                    </a>{" "}
                    på komponentsiden.
                </p>
            ),
        },
        {},
    ],
    [{ content: "Saken går til automatisk behandling" }, { variant: "info" }],
    [
        { content: "Navn Navnesen er fjernet som reell rettighetshaver" },
        { variant: "success" },
    ],
    [
        {
            title: "Mistet internettforbindelsen",
            content:
                "Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.",
        },
        { variant: "warning" },
    ],
    [
        {
            title: "Ingen internettforbindelse",
            content: "Du får ikke lagret før forbindelsen er tilbake.",
        },
        { variant: "error" },
    ],
];

function ToastUsageExample() {
    const { add, close } = useToast();
    const [keys, setKeys] = useState<string[]>([]);

    return (
        <Flex direction="column" rowGap={24}>
            <PrimaryButton
                onClick={() => {
                    const [content, options] =
                        examples[Math.floor(Math.random() * examples.length)];
                    setKeys([...keys, add(content, options)]);
                }}
            >
                Vis toast i kontekst
            </PrimaryButton>
            <SecondaryButton onClick={() => keys.forEach((key) => close(key))}>
                Lukk alle åpne toasts
            </SecondaryButton>
        </Flex>
    );
}

export const ToastExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const placement =
        choiceValues?.["Plassering"] === "Venstre" ? "left" : "center";
    return (
        <ToastProvider placement={placement}>
            <ToastUsageExample />
        </ToastProvider>
    );
};
