import type { Meta, StoryObj } from "@storybook/nextjs";
import React, { useState, useEffect } from "react";
import { Flex } from "../../flex/Flex.jsx";
import { FieldGroup } from "../../input-group/index.js";
import { Chip as ChipComponent } from "../Chip.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Chip",
    component: ChipComponent,
    argTypes: {
        children: {
            control: "text",
            description: "Teksten som vises i chip-en.",
        },
        variant: {
            control: "select",
            options: ["input", "filter"],
            description:
                "Bestemmer stilen og funksjonaliteten. `input` brukes for fjerning, `filter` for valg.",
        },
        selected: {
            control: "boolean",
            description:
                "Brukes med `filter`-varianten for å vise om en chip er valgt.",
        },
        onClick: {
            action: "clicked",
            description: "Callback som kjøres når chip-en klikkes.",
        },
    },
} satisfies Meta<typeof ChipComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Chip: Story = {
    name: "Chip",
    args: {
        children: "Husforsikring",
        variant: "input",
    },
};

export const Filter: Story = {
    name: "Filter",
    args: {
        variant: "filter",
    },
    render: ({ variant, ...args }) => {
        const insuranceProducts = [
            {
                id: "bil-pluss",
                name: "Bil Pluss",
                category: "Kjøretøy",
                description:
                    "Vår mest omfattende bilforsikring med leiebil og maskinskadedekning.",
            },
            {
                id: "hus-standard",
                name: "Hus Standard",
                category: "Bolig",
                description:
                    "Solid grunndekning for huset ditt mot brann, vannskader og naturskader.",
            },
            {
                id: "reise-verden",
                name: "Reise Verden",
                category: "Person",
                description:
                    "Gir deg trygghet med dekning for sykdom, ulykke og tap av reisegods i hele verden.",
            },
            {
                id: "innbo-pluss",
                name: "Innbo Pluss",
                category: "Bolig",
                description:
                    "Dekker innbo og løsøre mot skader og tyveri, inkludert uflaksdekning.",
            },
            {
                id: "hund-standard",
                name: "Hund Standard",
                category: "Dyr",
                description:
                    "Dekker veterinærutgifter ved sykdom eller ulykke for din firbente venn.",
            },
            {
                id: "ulykkesforsikring",
                name: "Ulykkesforsikring",
                category: "Person",
                description:
                    "Gir økonomisk erstatning ved varig medisinsk invaliditet etter en ulykke.",
            },
        ];

        const [selectedProductIds, setSelectedProductIds] = useState([
            "car-plus",
            "travel-worldwide",
        ]);

        const toggleSelection = (productId: string) => {
            setSelectedProductIds((currentSelectedProductIds) =>
                currentSelectedProductIds.includes(productId)
                    ? currentSelectedProductIds.filter((id) => id !== productId)
                    : [...currentSelectedProductIds, productId],
            );
        };

        return (
            <FieldGroup legend="Velg forsikringer du ønsker tilbud på">
                <Flex
                    as="ul"
                    gap="xs"
                    style={{
                        listStyle: "none",
                        padding: 0,
                        marginBottom: "var(--a-spacing-8)",
                    }}
                >
                    {insuranceProducts.map((product) => (
                        <li key={product.id}>
                            <ChipComponent
                                {...args}
                                variant="filter"
                                selected={selectedProductIds.includes(
                                    product.id,
                                )}
                                onClick={() => toggleSelection(product.id)}
                            >
                                {product.name}
                            </ChipComponent>
                        </li>
                    ))}
                </Flex>
            </FieldGroup>
        );
    },
};

export const Input: Story = {
    name: "Input",
    args: {
        variant: "input",
    },
    parameters: {
        docs: {
            description: {
                story: "Dette eksemplet viser hvordan `Chip` med `input`-varianten kan brukes for å vise en liste med valgte elementer, for eksempel tilleggsdekninger, som brukeren kan fjerne.",
            },
        },
    },
    render: (args) => {
        const initialCoverages = ["Leiebil", "Førerulykke", "Utvidet veihjelp"];
        const [selectedCoverages, setSelectedCoverages] =
            useState(initialCoverages);

        useEffect(() => {
            if (selectedCoverages.length === 0) {
                setTimeout(() => {
                    setSelectedCoverages(initialCoverages);
                }, 1000);
            }
        }, [selectedCoverages]);

        const removeCoverage = (coverageToRemove: string) => {
            setSelectedCoverages((currentCoverages) =>
                currentCoverages.filter(
                    (coverage) => coverage !== coverageToRemove,
                ),
            );
        };

        return (
            <FieldGroup legend="Valgte tilleggsdekninger">
                <Flex
                    as="ul"
                    gap="xs"
                    style={{
                        listStyle: "none",
                        padding: 0,
                        marginBottom: "var(--a-spacing-8)",
                    }}
                >
                    {selectedCoverages.map((coverage) => (
                        <li key={coverage}>
                            <ChipComponent
                                {...args}
                                onClick={() => removeCoverage(coverage)}
                            >
                                {coverage}
                            </ChipComponent>
                        </li>
                    ))}
                </Flex>
            </FieldGroup>
        );
    },
};
