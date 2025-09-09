import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flex } from "../../flex/index.js";
import { BETA_Select } from "../BETA_Select.js";
import "../styles/_index.scss";

const options = [
    "Apple iPhone 12 Pro Max",
    "Apple iPhone 12 Pro",
    "Apple iPhone 12",
    "Apple iPhone 12 Plus",
    "Apple iPhone 13 Pro Max",
    "Apple iPhone 13 Pro",
    "Apple iPhone 13",
    "Apple iPhone 13 Plus",
    "Apple iPhone 14 Pro Max",
    "Apple iPhone 14 Pro",
    "Apple iPhone 14",
    "Apple iPhone 14 Plus",
    "Apple iPhone 15 Pro Max",
    "Apple iPhone 15 Pro",
    "Apple iPhone 15",
    "Apple iPhone 15 Plus",
    "Apple iPhone 16 Pro Max",
    "Apple iPhone 16 Pro",
    "Apple iPhone 16",
    "Apple iPhone 16 Plus",
    "Apple iPhone 17 Pro Max",
    "Apple iPhone 17 Pro",
    "Apple iPhone 17",
    "Apple iPhone 17 Plus",
    "Google Pixel 6",
    "Google Pixel 6 XL",
    "Google Pixel 6a",
    "Google Pixel 7",
    "Google Pixel 7 XL",
    "Google Pixel 7a",
    "Google Pixel 8",
    "Google Pixel 8 XL",
    "Google Pixel 8a",
    "Google Pixel 9",
    "Google Pixel 9 XL",
    "Google Pixel 9a",
    "Samsung Galaxy A21",
    "Samsung Galaxy A22",
    "Samsung Galaxy A23",
    "Samsung Galaxy A24",
    "Samsung Galaxy A25",
    "Samsung Galaxy S20",
    "Samsung Galaxy S21",
    "Samsung Galaxy S22",
    "Samsung Galaxy S23",
    "Samsung Galaxy S24",
    "Samsung Galaxy S25",
    "Samsung Galaxy S26",
    "Huawei Mate 10",
    "Huawei Mate 20",
    "Huawei Mate 30",
    "Huawei P20",
    "Huawei P30",
    "Huawei P40",
    "Huawei P50",
    "HTC Thunderbolt",
].sort((a, b) => a.localeCompare(b));

const meta: Meta = {
    title: "Komponenter/Select/BETA Select",
    component: BETA_Select,
    parameters: {
        layout: "centered",
    },
    args: {
        name: "Select",
        label: "Mobil",
        placeholder: "Velg mobil",
        description: "Velg kun én mobil, takk 🙏",
        required: false,
        inline: false,
        expressive: true,
        children: options.map((option) => (
            <option key={option}>{option}</option>
        )),
    },
    decorators: [
        (Story) => (
            <div
                style={{
                    resize: "horizontal",
                    overflow: "scroll",
                    padding: "24px",
                }}
            >
                {" "}
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs", "beta"],
};

export default meta;

type Story = StoryObj<typeof BETA_Select>;

export const BETASelect: Story = {
    name: "Select",
};

export const BETASelectGrouped: Story = {
    name: "Select med grupperte valg",
    render: (args) => {
        // Kun for å vise mulighetene med JS for å lage en god gruppert select uten mye markup og logikk :D
        const groupedOptions = Object.groupBy(options, (value) => {
            switch (value.includes(value)) {
                case value.includes("Apple"):
                    return "Apple";

                case value.includes("Samsung"):
                    return "Samsung";

                case value.includes("Google"):
                    return "Google";

                default:
                    return "Annet";
            }
        });

        return (
            <BETA_Select {...args}>
                <optgroup label="Apple">
                    {groupedOptions.Apple?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </optgroup>

                <optgroup label="Samsung">
                    {groupedOptions.Samsung?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </optgroup>

                <optgroup label="Google">
                    {groupedOptions.Google?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </optgroup>

                <optgroup label="Andre">
                    {groupedOptions.Annet?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </optgroup>
            </BETA_Select>
        );
    },
};

export const BETA_IN_FORM_Select: Story = {
    name: "Select i skjema (bak)",
    parameters: {
        layout: "fullscreen",
    },
    render: (args) => (
        <Flex direction="column" gap={24} style={{ padding: "24px" }}>
            <h2 id="question-title">Hvilket merke er mobilen din?</h2>
            <BETA_Select {...args} aria-labelledby="question-title" />
        </Flex>
    ),
};
