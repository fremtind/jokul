import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import React from "react";
import { Combobox, type ComboboxValuePair } from ".";

const items: ComboboxValuePair[] = [
    { value: "google pixel", label: "Google Pixel", tagLabel: "GP" },
    { value: "apple", label: "Apple" },
    { value: "samsung", label: "Samsung" },
    { value: "lg", label: "LG" },
    { value: "huawei", label: "Huawei" },
    { value: "oneplus", label: "OnePlus" },
    { value: "nokia", label: "Nokia" },
    { value: "sony", label: "Sony" },
    { value: "doro", label: "Doro" },
];

describe("Combobox", () => {
    it("should render", () => {
        render(
            <Combobox
                label="Test"
                name="test"
                onChange={() => {
                    return;
                }}
                items={items}
            >
                Edit me!
            </Combobox>,
        );

        screen.getByText("Edit me!");
    });
});

describe("a11y", () => {
    test("Combobox should be a11y compliant", async () => {
        const { container } = render(
            <Combobox
                label="Test"
                name="test"
                onChange={() => {
                    return;
                }}
                items={items}
            >
                I am special
            </Combobox>,
        );
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
