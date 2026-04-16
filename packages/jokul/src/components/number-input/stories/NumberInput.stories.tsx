import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, fn, within } from "storybook/test";
import { NumberInput as NumberInputComponent } from "../NumberInput.js";
import type { NumberInputProps } from "../types.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/NumberInput",
    component: NumberInputComponent,
    parameters: {
        layout: "padded",
        controls: {
            include: [
                "label",
                "description",
                "helpLabel",
                "errorLabel",
                "placeholder",
                "defaultValue",
                "min",
                "max",
                "step",
                "width",
                "align",
                "stepper",
                "disabled",
                "readOnly",
                "required",
            ],
        },
        docs: {
            description: {
                component:
                    'Skjemakomponent for numeriske verdier basert på native `input type="number"`. Bruk `stepper` når du vil vise egne knapper for stepping.',
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: "min(100%, 24rem)" }}>
                <Story />
            </div>
        ),
    ],
    args: {
        label: "Antall",
        placeholder: "0",
        min: 0,
        step: 1,
        width: "",
        stepper: false,
        align: "left",
        disabled: false,
        readOnly: false,
        description: "",
        onChange: fn(),
    },
    argTypes: {
        max: {
            control: "number",
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof NumberInputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberInput: Story = {};

export const Stepper: Story = {
    name: "Med stepper",
    args: {
        label: "Antall personer",
        max: 8,
        defaultValue: 2,
        stepper: true,
    },
};

export const Reiseforsikring: Story = {
    name: "Reiseforsikring med stepper",
    args: {
        label: "Antall reisende",
        description: "Velg hvor mange som skal være med på samme bestilling.",
        helpLabel: "Du kan legge til opptil 8 personer.",
        max: 8,
        defaultValue: 2,
        stepper: true,
    },
    render: (args) => <TravelInsuranceExample {...args} />,
    play: async ({ args, canvasElement, userEvent, step }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText("Antall reisende");
        const increment = canvas.getByRole("button", { name: "Øk verdien" });
        const decrement = canvas.getByRole("button", { name: "Senk verdien" });

        await step("Øk og senk antall reisende", async () => {
            await userEvent.click(increment);
            await userEvent.click(increment);
            await userEvent.click(decrement);
        });

        await step("Vis oppdatert oppsummering", async () => {
            await expect(input).toHaveValue(3);
            await expect(
                canvas.getByTestId("travel-summary"),
            ).toHaveTextContent("3 reisende dekkes");
            await expect(
                canvas.getByTestId("travel-summary"),
            ).toHaveTextContent("387 kr per måned");
            await expect(args.onChange).toHaveBeenCalled();
        });
    },
};

export const EgenandelVedSkade: Story = {
    name: "Egenandel ved skade",
    args: {
        label: "Egenandel",
        description: "Oppgi ønsket egenandel for å sammenligne alternativer.",
        helpLabel: "Beløpet må være mellom 0 og 15 000 kroner.",
        max: 15_000,
        step: 500,
        defaultValue: 4_000,
    },
    render: (args) => <DeductibleExample {...args} />,
    play: async ({ args, canvasElement, userEvent, step }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByLabelText("Egenandel");

        await step("Oppdater egenandelen", async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "6000");
        });

        await step("Vis oppdatert valgt beløp", async () => {
            await expect(input).toHaveValue(6000);
            await expect(
                canvas.getByTestId("deductible-summary"),
            ).toHaveTextContent(/6.?000 kr/);
            await expect(args.onChange).toHaveBeenCalled();
        });
    },
};

export const UgyldigAntall: Story = {
    name: "Ugyldig verdi",
    args: {
        label: "Antall unge førere",
        description:
            "Oppgi hvor mange førere under 23 år som skal stå i avtalen.",
        errorLabel: "Du kan maksimalt legge til 4 unge førere per avtale.",
        max: 4,
        defaultValue: 5,
        stepper: true,
    },
};

function TravelInsuranceExample(args: NumberInputProps) {
    const [value, setValue] = React.useState(() =>
        getInitialValue(args.defaultValue, 2),
    );

    return (
        <div style={{ display: "grid", gap: "16px" }}>
            <NumberInputComponent
                {...args}
                value={value}
                defaultValue={undefined}
                onChange={(event) => {
                    const nextValue = event.target.valueAsNumber;

                    if (!Number.isNaN(nextValue)) {
                        setValue(nextValue);
                    }

                    args.onChange?.(event);
                }}
            />
            <SummaryBox testId="travel-summary">
                <strong>{value} reisende dekkes</strong>
                <span>
                    Estimert pris: {formatNumber(value * 129)} kr per måned
                </span>
            </SummaryBox>
        </div>
    );
}

function DeductibleExample(args: NumberInputProps) {
    const [value, setValue] = React.useState<string | number>(() =>
        getInitialValue(args.defaultValue, 4_000),
    );

    return (
        <div style={{ display: "grid", gap: "16px" }}>
            <NumberInputComponent
                {...args}
                value={value}
                defaultValue={undefined}
                onChange={(event) => {
                    const nextValue = event.target.value;

                    setValue(nextValue === "" ? "" : Number(nextValue));
                    args.onChange?.(event);
                }}
            />
            <SummaryBox testId="deductible-summary">
                <strong>Valgt egenandel</strong>
                <span>
                    {value === ""
                        ? "Ikke valgt ennå"
                        : `${formatNumber(Number(value))} kr`}
                </span>
            </SummaryBox>
        </div>
    );
}

function SummaryBox({
    children,
    testId,
}: React.PropsWithChildren<{ testId: string }>) {
    return (
        <div
            data-testid={testId}
            style={{
                display: "grid",
                gap: "4px",
                padding: "16px",
                borderRadius: "12px",
                background: "var(--jkl-color-background-container-low)",
            }}
        >
            {children}
        </div>
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

function formatNumber(value: number) {
    return new Intl.NumberFormat("nb-NO").format(value);
}
