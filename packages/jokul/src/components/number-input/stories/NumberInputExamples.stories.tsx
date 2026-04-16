import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, fn, within } from "storybook/test";
import { Button } from "../../button/Button.js";
import { Flex } from "../../flex/index.js";
import { RadioButton } from "../../radio-button/RadioButton.js";
import { RadioButtonGroup } from "../../radio-button/index.js";
import { NativeSelect } from "../../select/NativeSelect.js";
import { TextArea } from "../../text-area/TextArea.js";
import { TextInput } from "../../text-input/TextInput.js";
import { NumberInput as NumberInputComponent } from "../NumberInput.js";
import type { NumberInputProps } from "../types.js";

import "../../button/styles/_index.scss";
import "../../flex/styles/_index.scss";
import "../../input-group/styles/_index.scss";
import "../styles/_index.scss";
import "../../radio-button/styles/_index.scss";
import "../../select/styles/_index.scss";
import "../../text-area/styles/_index.scss";
import "../../text-input/styles/_index.scss";

const meta = {
    title: "Komponenter/NumberInput/Eksempler",
    component: NumberInputComponent,
    parameters: {
        layout: "padded",
        controls: {
            include: [
                "defaultValue",
                "min",
                "max",
                "step",
                "stepper",
                "disabled",
                "readOnly",
            ],
        },
        docs: {
            description: {
                component:
                    "Eksempel som viser `NumberInput` brukt i et større skjemabilde for å legge til en skadet eller tapt gjenstand.",
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "32rem" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        label: "Antall",
        defaultValue: 1,
        min: 1,
        max: 20,
        step: 1,
        stepper: true,
        disabled: false,
        readOnly: false,
        onChange: fn(),
    },
    tags: ["!autodocs"],
} satisfies Meta<typeof NumberInputComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LeggTilTing: Story = {
    name: "Legg til ting",
    render: (args) => <AddThingExample {...args} />,
    play: async ({ canvasElement, step, userEvent }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText("Antall");
        const increment = canvas.getByRole("button", { name: "Øk verdien" });

        await step("Oppdater antall med stepper", async () => {
            await userEvent.click(increment);
            await expect(input).toHaveValue(2);
        });
    },
};

function AddThingExample(args: NumberInputProps) {
    const [quantity, setQuantity] = React.useState<string | number>(() =>
        getInitialValue(args.defaultValue, 1),
    );

    React.useEffect(() => {
        setQuantity(getInitialValue(args.defaultValue, 1));
    }, [args.defaultValue]);

    return (
        <form
            onSubmit={(event) => event.preventDefault()}
            style={{ margin: 0 }}
        >
            <Flex direction="column" gap="xl" style={{ maxWidth: "20rem" }}>
                <Flex direction="column" gap="2xs">
                    <h1
                        style={{
                            margin: 0,
                            fontSize: "2rem",
                            fontWeight: 500,
                            lineHeight: 1.1,
                        }}
                    >
                        Legg til ting
                    </h1>
                </Flex>

                <Flex direction="column" gap="l">
                    <Flex direction="column" gap="2xs">
                        <span style={{ fontSize: "0.875rem" }}>
                            Hva er skade/tapt?
                        </span>
                        <Flex
                            alignItems="center"
                            justifyContent="space-between"
                            gap="m"
                            style={{
                                minHeight: "2.75rem",
                                paddingInline: "12px",
                                border: "1px solid var(--jkl-color-border-input)",
                                borderRadius: "0.25rem",
                                background: "var(--jkl-color-background-page)",
                            }}
                        >
                            <span>TV</span>
                            <button
                                type="button"
                                aria-label="Fjern ting"
                                style={{
                                    border: 0,
                                    padding: 0,
                                    background: "transparent",
                                    fontSize: "1rem",
                                    lineHeight: 1,
                                    cursor: "pointer",
                                }}
                            >
                                ×
                            </button>
                        </Flex>
                    </Flex>

                    <TextInput
                        label="Modell, merke eller kort beskrivelse"
                        labelProps={{ variant: "small" }}
                        placeholder="Skriv her"
                    />

                    <Flex direction="column" alignItems="start" gap="2xs">
                        <NumberInputComponent
                            {...args}
                            label="Antall"
                            labelProps={{ variant: "small" }}
                            value={quantity}
                            defaultValue={undefined}
                            onChange={(event) => {
                                const nextValue = event.target.value;

                                setQuantity(
                                    nextValue === "" ? "" : Number(nextValue),
                                );
                                args.onChange?.(event);
                            }}
                        />
                    </Flex>

                    <NativeSelect
                        label="Hvordan fikk du tingen?"
                        labelProps={{ variant: "small" }}
                        items={[
                            { value: "kjopt-ny", label: "Kjøpt ny" },
                            { value: "kjopt-brukt", label: "Kjøpt brukt" },
                            { value: "gave", label: "Fått i gave" },
                            { value: "arvet", label: "Arvet" },
                        ]}
                        placeholder="Velg"
                    />

                    <RadioButtonGroup
                        legend="Hadde du begynt å bruke tingen?"
                        inline
                    >
                        <RadioButton
                            defaultChecked
                            name="begynt-a-bruke"
                            value="ja"
                        >
                            Ja
                        </RadioButton>
                        <RadioButton name="begynt-a-bruke" value="nei">
                            Nei
                        </RadioButton>
                    </RadioButtonGroup>

                    <NativeSelect
                        label="Alder"
                        labelProps={{ variant: "small" }}
                        items={[
                            { value: "0-1", label: "0-1 år" },
                            { value: "2-4", label: "2-4 år" },
                            { value: "5-7", label: "5-7 år" },
                            { value: "8-plus", label: "8 år eller eldre" },
                        ]}
                        placeholder="Velg"
                    />

                    <TextInput
                        label="Hvor mye betalte du for tingen?"
                        labelProps={{ variant: "small" }}
                        helpLabel="Oppgi totalverdi hvis du har flere av samme type."
                        placeholder="Skriv her"
                        unit="NOK"
                    />

                    <TextArea
                        label="Tilleggsinformasjon (valgfritt)"
                        labelProps={{ variant: "small" }}
                        placeholder="Skriv her"
                    />

                    <Flex direction="column" gap="2xs">
                        <span style={{ fontSize: "0.875rem" }}>
                            Bilder, kvittering eller annen dokumentasjon
                            (valgfritt)
                        </span>
                        <Flex
                            alignItems="center"
                            gap="s"
                            wrap="wrap"
                            style={{
                                padding: "12px",
                                border: "1px dashed var(--jkl-color-border-separator)",
                                borderRadius: "0.5rem",
                            }}
                        >
                            <Button type="button" variant="secondary">
                                Legg til fil
                            </Button>
                            <span
                                style={{
                                    color: "var(--jkl-color-text-subdued)",
                                    fontSize: "0.875rem",
                                }}
                            >
                                eller slipp filer her
                            </span>
                        </Flex>
                    </Flex>

                    <Flex gap="s" wrap="wrap">
                        <Button type="submit" variant="primary">
                            Legg til
                        </Button>
                        <Button type="button" variant="ghost">
                            Avbryt
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </form>
    );
}

function getInitialValue(
    value: NumberInputProps["defaultValue"],
    fallback: number,
) {
    if (typeof value === "number" || typeof value === "string") {
        const parsedValue = Number(value);

        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }

    return fallback;
}
