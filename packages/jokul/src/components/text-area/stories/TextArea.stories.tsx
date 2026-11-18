import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import {
    configure,
    expect,
    fireEvent,
    userEvent,
    waitFor,
    within,
} from "storybook/test";
import { Button } from "../../button/index.js";
import { TextInput } from "../../text-input/index.js";
import { TextArea as TextAreaComponent } from "../TextArea.js";
import "../styles/_index.scss";

// Gir tregere maskiner mer tid til å rendre mellom tastetrykk
configure({ asyncUtilTimeout: 5000 });

const meta = {
    title: "Komponenter/TextArea",
    component: TextAreaComponent,
    args: {
        label: "Tilleggsinformasjon",
        description: "Legg til relevant informasjon som kan påvirke saken.",
        counter: {
            maxLength: 200,
            hideProgress: false,
        },
        autoExpand: false,
        inline: false,
        rows: 7,
        startOpen: true,
        readOnly: false,
        disabled: false,
        errorLabel: "",
    },
    argTypes: {
        rows: {
            control: { type: "select" },
            options: [3, 4, 5, 6, 7, 8, 9, 10],
        },
    },
} satisfies Meta<typeof TextAreaComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const hoyde = (el: HTMLElement) => el.getBoundingClientRect().height;
const teller = (root: HTMLElement) =>
    root.querySelector(".jkl-text-area__counter-count");

/** Tilbakemeldingsskjema der telleren viser hvor mye plass brukeren har igjen. */
export const TextArea: Story = {
    args: {
        label: "Har du noen tilbakemeldinger til oss?",
        description: "Din tilbakemelding hjelper oss å bli bedre.",
    },
    play: async ({ canvasElement }) => {
        const felt = within(canvasElement).getByRole("textbox");
        await userEvent.type(felt, "Fin tjeneste!");
        await waitFor(() =>
            expect(teller(canvasElement)).toHaveTextContent("13 / 200"),
        );
    },
};

/** Antall rader styres av `rows`. Endre tallet for å se feltet tilpasse seg. */
export const Rows: Story = {
    args: {
        label: "Beskriv skaden",
        description: "Fortell hva som skjedde, hvor og når.",
    },
    render: (args) => {
        const [rows, setRows] = useState(4);
        return (
            <div style={{ display: "grid", gap: 24 }}>
                <TextInput
                    label="Antall rader"
                    type="number"
                    min={3}
                    max={10}
                    value={rows}
                    onChange={(e) =>
                        setRows(
                            Math.min(
                                10,
                                Math.max(3, Number(e.target.value) || 3),
                            ),
                        )
                    }
                />
                <TextAreaComponent {...args} rows={rows} />
            </div>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const felt = canvas.getByLabelText("Beskriv skaden");
        const antall = canvas.getByLabelText("Antall rader");
        const fire = hoyde(felt);

        fireEvent.change(antall, { target: { value: "9" } });
        await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(fire));
    },
};

/** Felt som starter lukket og åpner seg når brukeren begynner å skrive. */
export const ApnesVedFokus: Story = {
    args: {
        label: "Kommentar til saksbehandler",
        description: "Valgfritt",
        startOpen: false,
        rows: 5,
        counter: undefined,
    },
    play: async ({ canvasElement }) => {
        const felt = within(canvasElement).getByRole("textbox");
        const lukket = hoyde(felt);

        await userEvent.click(felt);
        await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(lukket));

        await userEvent.tab();
        await waitFor(() => expect(hoyde(felt)).toBe(lukket));

        await userEvent.type(felt, "Ring meg etter kl. 15");
        await userEvent.tab();
        await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(lukket));
    },
};

/** Feltet følger DOM-verdien: det blir åpent igjen når form.reset() gjenoppretter teksten. */
export const Tilbakestilling: Story = {
    args: {
        label: "Kommentar til saksbehandler",
        startOpen: false,
        rows: 5,
        counter: undefined,
        defaultValue: "Ring meg etter kl. 15",
    },
    render: (args) => (
        <form style={{ display: "grid", gap: 16, justifyItems: "start" }}>
            <TextAreaComponent {...args} />
            <Button type="reset" variant="secondary">
                Tilbakestill
            </Button>
        </form>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const felt = canvas.getByRole("textbox");
        const apen = hoyde(felt);

        await userEvent.clear(felt);
        await userEvent.tab();
        await waitFor(() => expect(hoyde(felt)).toBeLessThan(apen));

        await userEvent.click(
            canvas.getByRole("button", { name: "Tilbakestill" }),
        );
        await waitFor(() => expect(hoyde(felt)).toBe(apen));
    },
};

/** Utfylt felt som låses for redigering etter innsending. */
export const Disabled: Story = {
    args: {
        label: "Beskrivelse av skaden",
        disabled: true,
        defaultValue: "Bilen ble påkjørt bakfra i et veikryss.",
    },
    play: async ({ canvasElement }) => {
        const felt = within(canvasElement).getByRole("textbox");
        expect(felt).toBeDisabled();
        expect(felt).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.");
    },
};

/** Innsendt beskrivelse som vises som lesbar tekst i en oppsummering. */
export const ReadOnly: Story = {
    args: {
        label: "Beskrivelse av skaden",
        readOnly: true,
        defaultValue: "Bilen ble påkjørt bakfra i et veikryss.",
        counter: {
            maxLength: 400,
            hideProgress: false,
        },
    },
    play: async ({ canvasElement }) => {
        const felt = within(canvasElement).getByRole("textbox");
        await userEvent.type(felt, "mer tekst");
        expect(felt).toHaveValue("Bilen ble påkjørt bakfra i et veikryss.");
    },
};

/** Beskrivelse av et hendelsesforløp der lengden er ukjent på forhånd. */
export const AutoExpand: Story = {
    args: {
        label: "Beskriv hendelsesforløpet",
        autoExpand: true,
        rows: 3,
        counter: undefined,
    },
    play: async ({ canvasElement }) => {
        const felt = within(canvasElement).getByRole("textbox");
        const start = hoyde(felt);

        await userEvent.type(
            felt,
            "Først kom bilen fra høyre{Enter}så bremset jeg{Enter}og så smalt det{Enter}ingen ble skadet{Enter}politiet kom",
        );

        // Uten støtte for field-sizing beholder feltet fast høyde og vanlig scrolling
        if (CSS.supports("field-sizing", "content")) {
            await waitFor(() => expect(hoyde(felt)).toBeGreaterThan(start));
        } else {
            expect(hoyde(felt)).toBe(start);
        }

        await userEvent.clear(felt);
        await waitFor(() => expect(hoyde(felt)).toBe(start));
    },
};

/** Når en integrasjon håndhever en bytegrense, teller æ, ø og å som to. */
export const ByteCounter: Story = {
    args: {
        label: "Melding til ekstern tjeneste",
        description: "Brukes når en integrasjon håndhever en bytegrense.",
        counter: {
            maxLength: 4096,
            strategy: "bytes",
            hideProgress: false,
        },
    },
    play: async ({ canvasElement }) => {
        await userEvent.type(within(canvasElement).getByRole("textbox"), "æøå");
        await waitFor(() =>
            expect(teller(canvasElement)).toHaveTextContent("6 / 4096"),
        );
    },
};

/** Feilmelding når beskrivelsen mangler. */
export const _Error: Story = {
    args: {
        label: "Beskriv skaden",
        errorLabel: "Du må beskrive skaden for å fortsette",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        expect(canvas.getByRole("textbox")).toHaveAttribute(
            "aria-invalid",
            "true",
        );
        expect(
            canvas.getByText("Du må beskrive skaden for å fortsette"),
        ).toBeVisible();
    },
};

/** Feltet markeres som ugyldig når brukeren skriver mer enn grensen. */
export const OverGrensen: Story = {
    args: {
        label: "Skriv en kort oppsummering",
        counter: { maxLength: 200, hideProgress: false },
    },
    play: async ({ canvasElement }) => {
        const felt = within(canvasElement).getByRole("textbox");
        await userEvent.click(felt);
        await userEvent.paste("Dette er for langt. ".repeat(11));
        await waitFor(() =>
            expect(felt).toHaveAttribute("aria-invalid", "true"),
        );
    },
};

/** Kontrollert felt, for eksempel et utkast som kan nullstilles. */
export const Kontrollert: Story = {
    args: { label: "Utkast til melding", counter: { maxLength: 50 } },
    render: (args) => {
        const [verdi, setVerdi] = useState("Hei, jeg lurer på noe");
        return (
            <div style={{ display: "grid", gap: 16, justifyItems: "start" }}>
                <TextAreaComponent
                    {...args}
                    value={verdi}
                    onChange={(e) => setVerdi(e.target.value)}
                />
                <Button variant="secondary" onClick={() => setVerdi("")}>
                    Nullstill
                </Button>
            </div>
        );
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await waitFor(() =>
            expect(teller(canvasElement)).toHaveTextContent("21 / 50"),
        );
        await userEvent.click(
            canvas.getByRole("button", { name: "Nullstill" }),
        );
        await waitFor(() => {
            expect(canvas.getByRole("textbox")).toHaveValue("");
            expect(teller(canvasElement)).toHaveTextContent("0 / 50");
        });
    },
};
