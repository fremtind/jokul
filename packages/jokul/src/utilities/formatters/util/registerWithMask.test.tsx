import { render, screen } from "@testing-library/react";
import UserEventModule from "@testing-library/user-event";
import React from "react";
import { useForm } from "react-hook-form";
import { describe, expect, it } from "vitest";
import { registerWithMasks } from "./registerWithMask.js";

// https://github.com/testing-library/user-event/issues/1146
// @ts-ignore typecheck liker ikke at default muligens ikke finnes
const userEvent = UserEventModule.default ?? UserEventModule;

type SkjemaMedTallmaske = {
    belop: string;
};

type TallmaskeInputProps = {
    defaultValue?: string;
};

const TallmaskeInput = ({ defaultValue = "1 200" }: TallmaskeInputProps) => {
    const form = useForm<SkjemaMedTallmaske>({
        defaultValues: {
            belop: defaultValue,
        },
    });
    const { registerWithNumber } = registerWithMasks(form);

    return <input aria-label="Beløp" {...registerWithNumber("belop")} />;
};

describe("registerWithMasks", () => {
    it("beholder markøren på slutten når et tall formateres mens brukeren skriver", async () => {
        render(<TallmaskeInput defaultValue="" />);

        const input = screen.getByLabelText("Beløp") as HTMLInputElement;
        input.focus();

        await userEvent.type(input, "1000", { skipClick: true });

        expect(input).toHaveValue("1\u00A0000");
        expect(input.selectionStart).toBe(5);
        expect(input.selectionEnd).toBe(5);
    });

    it("beholder markørposisjonen når brukeren sletter og skriver inni et formatert tall", async () => {
        render(<TallmaskeInput />);

        const input = screen.getByLabelText("Beløp") as HTMLInputElement;
        input.focus();
        input.setSelectionRange(4, 4);

        await userEvent.type(input, "{backspace}5", { skipClick: true });

        expect(input).toHaveValue("1\u00A0250");
        expect(input.selectionStart).toBe(4);
        expect(input.selectionEnd).toBe(4);
    });

    it("flytter markøren forbi tusenskillet når brukeren sletter et formattert mellomrom", async () => {
        render(<TallmaskeInput defaultValue="1 000" />);

        const input = screen.getByLabelText("Beløp") as HTMLInputElement;
        input.focus();
        input.setSelectionRange(2, 2);

        await userEvent.type(input, "{backspace}", { skipClick: true });

        expect(input).toHaveValue("1\u00A0000");
        expect(input.selectionStart).toBe(1);
        expect(input.selectionEnd).toBe(1);
    });

    it("beholder gyldig markørposisjon når første siffer slettes foran et tusenskille", async () => {
        render(<TallmaskeInput defaultValue="1 200" />);

        const input = screen.getByLabelText("Beløp") as HTMLInputElement;
        input.focus();
        input.setSelectionRange(1, 1);

        await userEvent.type(input, "{backspace}", { skipClick: true });

        expect(input).toHaveValue("200");
        expect(input.selectionStart).toBe(0);
        expect(input.selectionEnd).toBe(0);
    });
});
