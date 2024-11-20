import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React, { FC, useId, useState } from "react";
import { SecondaryButton } from "../../button/Button.js";
import { TextInput } from "../../text-input/TextInput.js";
import { ExpandablePanel } from "../ExpandablePanel.js";
import { Expander } from "../Expander.js";

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
