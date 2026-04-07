import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { expect, fn, screen, waitFor, within } from "storybook/test";
import { DatePicker as DatePickerComponent } from "../DatePicker.js";
import { formatInput } from "../utils.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/DatePicker",
    component: DatePickerComponent,
    args: {
        action: {
            disabled: false,
        },
        days: ["M", "T", "O", "T", "F", "L", "S"],
        defaultShow: false,
        defaultValue: formatInput(new Date()),
        disableBeforeDate: formatInput(
            new Date(new Date().setDate(new Date().getDate() - 14)),
        ),
        disableAfterDate: formatInput(
            new Date(new Date().setDate(new Date().getDate() + 14)),
        ),
        description: "Kortet er gyldig i 3 måneder fra denne datoen",
        label: "Når skal du reise?",
        labelProps: {
            srOnly: false,
            variant: "small",
        },
        hideCalendarLabel: "Lukk kalender",
        showCalendarLabel: "Åpne kalender",
        invalid: false,
        months: [
            "Januar",
            "Februar",
            "Mars",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Desember",
        ],
        monthLabel: "Måned",
        placeholder: "dd.mm.åååå",
        yearsToShow: new Date().getFullYear(),
        yearLabel: "År",
        textInputProps: {
            disabled: false,
            readOnly: false,
        },
    },
} satisfies Meta<typeof DatePickerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

function DatePickerApiCompatibilityExample({
    args,
    initialValue = "",
}: {
    args: React.ComponentProps<typeof DatePickerComponent>;
    initialValue?: string;
}) {
    const [value, setValue] = React.useState(initialValue);
    const [lastDate, setLastDate] = React.useState("");
    const [lastMetaValue, setLastMetaValue] = React.useState("");

    return (
        <div style={{ display: "grid", gap: "16px", width: "20rem" }}>
            <DatePickerComponent
                {...args}
                value={value}
                defaultValue={undefined}
                disableBeforeDate={undefined}
                disableAfterDate={undefined}
                onChange={(e, date, meta) => {
                    setValue(e.target.value);
                    setLastDate(date ? formatInput(date) : "");
                    setLastMetaValue(meta.value);
                    args.onChange?.(e, date, meta);
                }}
            />
            <dl
                style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gap: "4px 12px",
                    margin: 0,
                }}
            >
                <dt>event.target.value</dt>
                <dd data-testid="event-target-value" style={{ margin: 0 }}>
                    {value || "(tom)"}
                </dd>
                <dt>date</dt>
                <dd data-testid="date-value" style={{ margin: 0 }}>
                    {lastDate || "(tom)"}
                </dd>
                <dt>meta.value</dt>
                <dd data-testid="meta-value" style={{ margin: 0 }}>
                    {lastMetaValue || "(tom)"}
                </dd>
            </dl>
        </div>
    );
}

export const DatePicker: Story = {
    args: {},
    render: (args) => (
        <DatePickerComponent
            {...args}
            disableBeforeDate={args.disableBeforeDate}
            disableAfterDate={args.disableAfterDate}
        />
    ),
};

export const CalendarSelectionApiCompatibility: Story = {
    name: "API ved kalenderklikk",
    args: {
        onChange: fn(),
    },
    render: (args) => (
        <DatePickerApiCompatibilityExample
            args={args}
            initialValue="10.11.2022"
        />
    ),
    play: async ({ args, canvasElement, userEvent, step }) => {
        const canvas = within(canvasElement);

        await step("Velg dato i kalenderen", async () => {
            await userEvent.click(
                canvas.getByRole("button", { name: /åpne kalender/i }),
            );
            await waitFor(() => {
                expect(screen.getByTestId("jkl-calendar")).toBeInTheDocument();
            });
            await userEvent.click(screen.getByLabelText("11. november"));
        });

        await step("Vis at vanlig onChange-bruk fortsatt fungerer", async () => {
            await expect(
                canvas.getByTestId("event-target-value"),
            ).toHaveTextContent("11.11.2022");
            await expect(canvas.getByTestId("date-value")).toHaveTextContent(
                "11.11.2022",
            );
            await expect(canvas.getByTestId("meta-value")).toHaveTextContent(
                "11.11.2022",
            );
            await expect(args.onChange).toHaveBeenCalled();
        });
    },
};

export const CompactInputApiCompatibility: Story = {
    name: "API ved kompakt input",
    args: {
        onChange: fn(),
    },
    render: (args) => <DatePickerApiCompatibilityExample args={args} />,
    play: async ({ args, canvasElement, userEvent, step }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole("textbox", { name: /når skal du reise/i });

        await step('Skriv "11112022" i feltet', async () => {
            await userEvent.clear(input);
            await userEvent.type(input, "11112022");
        });

        await step("Vis at kontrollert bruk via event.target.value er uendret", async () => {
            await expect(input).toHaveValue("11.11.2022");
            await expect(
                canvas.getByTestId("event-target-value"),
            ).toHaveTextContent("11.11.2022");
            await expect(canvas.getByTestId("date-value")).toHaveTextContent(
                "11.11.2022",
            );
            await expect(canvas.getByTestId("meta-value")).toHaveTextContent(
                "11.11.2022",
            );
            await expect(args.onChange).toHaveBeenCalled();
        });
    },
};
