import React, { FC } from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { PrimaryButton } from "../../button-react";
import { ToastContent, ToastProvider, useToast } from "../src";
import { ToastOptions } from "../src/types";

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
    const { add } = useToast();
    return (
        <PrimaryButton
            onClick={() => {
                const [content, options] =
                    examples[Math.floor(Math.random() * examples.length)];
                add(content, options);
            }}
        >
            Vis toast i kontekst
        </PrimaryButton>
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
