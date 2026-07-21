import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";
import { DateInput } from "./DateInput.js";

describe("DateInput med react-hook-form", () => {
    it("registrerer verdien via register() og sender den inn ved submit", async () => {
        const onSubmit = vi.fn();

        const Form = () => {
            const { register, handleSubmit } = useForm<{ dato: string }>({
                defaultValues: { dato: "" },
            });
            return (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DateInput label="Dato" {...register("dato")} />
                    <button type="submit">Lagre</button>
                </form>
            );
        };

        render(<Form />);
        fireEvent.change(screen.getByTestId("jkl-date-input__input"), {
            target: { value: "2020-01-15" },
        });
        fireEvent.click(screen.getByRole("button", { name: "Lagre" }));

        await waitFor(() => expect(onSubmit).toHaveBeenCalled());
        expect(onSubmit.mock.calls[0][0].dato).toBe("2020-01-15");
    });

    it("reflekterer reset() i det native feltet", () => {
        const Form = () => {
            const { register, reset } = useForm<{ dato: string }>({
                defaultValues: { dato: "2020-01-10" },
            });
            return (
                <form>
                    <DateInput label="Dato" {...register("dato")} />
                    <button
                        type="button"
                        onClick={() => reset({ dato: "2021-06-15" })}
                    >
                        Nullstill
                    </button>
                </form>
            );
        };

        render(<Form />);
        const input = screen.getByTestId(
            "jkl-date-input__input",
        ) as HTMLInputElement;

        expect(input.value).toBe("2020-01-10");
        fireEvent.click(screen.getByRole("button", { name: "Nullstill" }));
        expect(input.value).toBe("2021-06-15");
    });

    it("synker kalendervalget når feltet åpnes etter setValue()", () => {
        const Form = () => {
            const { register, setValue } = useForm<{ dato: string }>({
                defaultValues: { dato: "2020-01-10" },
            });
            return (
                <form>
                    <DateInput label="Dato" {...register("dato")} />
                    <button
                        type="button"
                        onClick={() => setValue("dato", "2020-01-20")}
                    >
                        Sett
                    </button>
                </form>
            );
        };

        render(<Form />);
        fireEvent.click(screen.getByRole("button", { name: "Sett" }));
        // Åpne kalenderen for å synke intern state fra feltet
        fireEvent.click(screen.getByTestId("jkl-date-input__trigger"));

        expect(
            document.querySelector('input[type="radio"][value="2020-01-20"]'),
        ).toBeChecked();
    });

    it("fungerer som kontrollert felt med Controller", () => {
        const Form = () => {
            const { control } = useForm<{ dato: string }>({
                defaultValues: { dato: "" },
            });
            return (
                <Controller
                    name="dato"
                    control={control}
                    render={({ field }) => (
                        <DateInput
                            label="Dato"
                            value={field.value}
                            name={field.name}
                            ref={field.ref}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                        />
                    )}
                />
            );
        };

        render(<Form />);
        const input = screen.getByTestId(
            "jkl-date-input__input",
        ) as HTMLInputElement;

        fireEvent.change(input, { target: { value: "2022-03-03" } });
        expect(input.value).toBe("2022-03-03");
    });
});
