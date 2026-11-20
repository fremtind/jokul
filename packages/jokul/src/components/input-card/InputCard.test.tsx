import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import React, { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { axe } from "vitest-axe";
import { InputCard } from "./InputCard.js";
import { InputCardGroup } from "./InputCardGroup.js";

describe("InputCard", () => {
    it("bruker tittelen som navn og beskrivelsen som beskrivelse", () => {
        render(
            <InputCard
                type="radio"
                label="Medium"
                description="For små husholdninger"
                illustration={<svg data-testid="illustrasjon" />}
            />,
        );
        const radio = screen.getByRole("radio", { name: "Medium" });
        expect(radio).toHaveAccessibleDescription("For små husholdninger");
        expect(
            screen.getByTestId("illustrasjon").closest("[aria-hidden]"),
        ).toBeTruthy();
    });

    it("kan være checkbox", async () => {
        const onChange = vi.fn();
        render(
            <InputCard type="checkbox" label="Tillegg" onChange={onChange} />,
        );
        await userEvent.click(
            screen.getByRole("checkbox", { name: "Tillegg" }),
        );
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("gruppen gir name og invalid til kortene", () => {
        render(
            <InputCardGroup
                legend="Størrelse"
                name="storrelse"
                errorLabel="Velg en størrelse"
            >
                <InputCard type="radio" label="Small" value="small" />
                <InputCard type="radio" label="Large" value="large" />
            </InputCardGroup>,
        );
        const small = screen.getByRole("radio", { name: "Small" });
        expect(small).toHaveAttribute("name", "storrelse");
        expect(small).toHaveAttribute("aria-invalid", "true");
        expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    });

    it("støtter controlled radiogruppe", async () => {
        const Controlled = () => {
            const [value, setValue] = useState("small");
            return (
                <InputCardGroup
                    legend="Størrelse"
                    name="s"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                    <InputCard type="radio" label="Small" value="small" />
                    <InputCard type="radio" label="Large" value="large" />
                </InputCardGroup>
            );
        };
        render(<Controlled />);
        expect(screen.getByRole("radio", { name: "Small" })).toBeChecked();
        await userEvent.click(screen.getByRole("radio", { name: "Large" }));
        expect(screen.getByRole("radio", { name: "Large" })).toBeChecked();
        expect(screen.getByRole("radio", { name: "Small" })).not.toBeChecked();
    });

    it("har ingen axe-feil", async () => {
        const { container } = render(
            <InputCardGroup legend="Størrelse" name="s">
                <InputCard
                    type="radio"
                    label="Small"
                    value="small"
                    description="Liten"
                />
                <InputCard type="radio" label="Large" value="large" />
            </InputCardGroup>,
        );
        expect(await axe(container)).toHaveNoViolations();
    });
});
