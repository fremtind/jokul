import { SecondaryButton } from "@fremtind/jkl-button-react";
import { TextInput } from "@fremtind/jkl-text-input-react";
import React, { FC, useId, useState } from "react";
import {
    ExampleComponentProps,
    CodeExample,
    ExampleKnobsProps,
} from "../../../doc-utils";
import { ExpandablePanel } from "../src/ExpandablePanel";
import { Expander } from "../src/Expander";

export const knobs: ExampleKnobsProps = {};

export const CustomWidgetExample: FC<ExampleComponentProps> = () => {
    const [open, setOpen] = useState(false);
    const id = useId();

    return (
        <ExpandablePanel as="div" variant="stroke" open={open}>
            <Expander
                as="button"
                aria-controls={`${id}-content`}
                aria-expanded={open}
                onClick={() => setOpen((open) => !open)}
            >
                Rediger kontakinformasjon
            </Expander>
            <ExpandablePanel.Content id={`${id}-content`}>
                <div
                    aria-hidden={!open}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        width: "fit-content",
                    }}
                >
                    <TextInput
                        defaultValue={"foo.bar@fremtind.no"}
                        label="E-post"
                    />
                    <SecondaryButton>Lagre</SecondaryButton>
                </div>
            </ExpandablePanel.Content>
        </ExpandablePanel>
    );
};

export const code: CodeExample = () => {
    const id = Math.random();
    return `
        <ExpandablePanel as="div" variant="stroke" open={open}>
            <Expander
                as="button"
                aria-controls={"${id}-content"}
                aria-expanded={open}
                onClick={() => setOpen((open) => !open)}
            >
                Rediger kontakinformasjon
            </Expander>
            <ExpandablePanel.Content id={"${id}-content"}>
                <div
                    aria-hidden={!open}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        width: "fit-content",
                    }}
                >
                    <TextInput
                        defaultValue={"foo.bar@fremtind.no"}
                        label="E-post"
                    />
                    <SecondaryButton>Lagre</SecondaryButton>
                </div>
            </ExpandablePanel.Content>
        </ExpandablePanel>
`;
};
