import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { DescriptionList } from "../components-beta/description-list/DescriptionList.jsx";
import { Text } from "../components-beta/text/Text.jsx";
import { Button } from "../components/button/Button.jsx";
import { Card } from "../components/card/Card.jsx";
import { Flex } from "../components/flex/Flex.jsx";
import { PlusIcon, TrashCanIcon } from "../components/icon/index.js";
import { RadioButton } from "../components/radio-button/RadioButton.jsx";
import { RadioButtonGroup } from "../components/radio-button/RadioButtonGroup.jsx";
import { BETA_Select } from "../components/select/index.js";
import { ExpandableTableRow } from "../components/table/ExpandableTableRow.jsx";
import { ExpandableTableRowController } from "../components/table/ExpandableTableRowController.jsx";
import { Table } from "../components/table/Table.jsx";
import { TableBody } from "../components/table/TableBody.jsx";
import { TableCaption } from "../components/table/TableCaption.jsx";
import { TableCell } from "../components/table/TableCell.jsx";
import { TableHead } from "../components/table/TableHead.jsx";
import { TableHeader } from "../components/table/TableHeader.jsx";
import { TableRow } from "../components/table/TableRow.jsx";
import { TextInput } from "../components/text-input/TextInput.jsx";
import { formatNumber } from "../utilities/index.js";

const meta: Meta = {
    title: "Typography Harmonisk/Erstatningsberegner",
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Oppvaskmaskin = () => {
    return (
        <Card padding="l" asChild>
            <Flex as="section" gap="m" direction="column">
                <Text fontStyle="heading-2" size={20} weight="bold">
                    Oppvaskmaskin
                </Text>
                <Flex direction="row">
                    <BETA_Select label="Antall" defaultValue={1}>
                        <option value={1}>1</option>
                    </BETA_Select>
                    <TextInput
                        label="Gjenstand"
                        defaultValue="Oppvaskmaskin (Hvitevare - Elektronikk)"
                    />
                    <TextInput label="Modell" defaultValue="W2IHD526A" />
                    <Flex asChild alignItems="center">
                        <RadioButtonGroup legend="Kjøp">
                            <RadioButton key="ny" value="ny" name="kjop">
                                Kjøpt ny
                            </RadioButton>
                            <RadioButton key="brukt" value="brukt" name="kjop">
                                Kjøpt brukt
                            </RadioButton>
                        </RadioButtonGroup>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
};

const Aldersfradrag = () => {
    return (
        <Card padding="l" asChild>
            <Flex as="section" gap="m" direction="column">
                <Text fontStyle="heading-2" size={20} weight="bold">
                    Aldersfradrag
                </Text>
                <Flex
                    direction="column"
                    alignItems="start"
                    style={{ maxWidth: "fit-content" }}
                >
                    <BETA_Select label="Vurdert standard" defaultValue="Høy">
                        <option value="Høy">Høy</option>
                        <option value="Middels">Middels</option>
                        <option value="Lav">Lav</option>
                    </BETA_Select>
                    <TextInput label="Antatt levetid" defaultValue="10" />
                    <Flex
                        style={{
                            width: "100%",
                            justifyContent: "space-between", // Bug i flex-komponenten: justify-between -> justify-around
                        }}
                    >
                        <Text fontStyle="small">Sum aldersfradrag</Text>
                        <Text fontStyle="small">40 %</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
};

const pris = [
    {
        title: "Pris på tilsvarende",
        value: `${formatNumber(10500)} kr`,
    },
    {
        title: "Fratrekk for alder (4 år)",
        value: `${formatNumber(4200)} kr`,
    },
    {
        title: "Fratrekk for egenandel",
        value: `${formatNumber(-2000)} kr`,
    },
    {
        title: "Avkortning (40%)",
        value: `${formatNumber(-1050)} kr`,
    },
    {
        title: "Sum gavekort på Elkjøp",
        value: `${formatNumber(4300)} kr`,
    },
];

const prisUtenKortRabatt = [
    {
        title: "Uten gavekortrabatten på 9 %",
        value: `${formatNumber(-387)} kr`,
    },
    {
        title: "Sum kontant",
        value: `${formatNumber(3913)} kr`,
    },
];

const ForklaringTilKunde = () => {
    return (
        <Card padding="l">
            <Flex direction="column">
                <Text fontStyle="heading-2" size={20} weight="bold">
                    Forklaring til kunde
                </Text>
                <Text fontStyle="body">
                    Vi har funnet Samsung 55” TU55CU7105KXXC på Power og vurdert
                    den til å være tilsvarende TV-en du hadde og har basert
                    verdivurderingen på dette.
                </Text>
                <Flex direction="column">
                    <DescriptionList alignment="justified" showSeparators>
                        {pris.map((p) => (
                            <DescriptionList.Item
                                key={p.value}
                                title={p.title}
                                value={p.value}
                            />
                        ))}
                    </DescriptionList>
                    <DescriptionList alignment="justified" showSeparators>
                        {prisUtenKortRabatt.map((p) => (
                            <DescriptionList.Item
                                key={p.value}
                                title={p.title}
                                value={p.value}
                            />
                        ))}
                    </DescriptionList>
                </Flex>
                <Text>
                    Dersom du mener vi har valgt feil pris på tilsvarende for
                    det som ble skadet, kan du gjerne ta kontakt med oss. Vi
                    trenger da å vite hva du mener er feil, og hvilket produkt
                    du mener vi skal ta utgangspunkt i.
                </Text>
                <Button
                    variant="ghost"
                    icon={<PlusIcon />}
                    style={{ alignSelf: "start" }}
                >
                    Legg til nærmere forklaring
                </Button>
            </Flex>
        </Card>
    );
};

const tilsvarendegjenstand = {
    columns: ["Kilde", "Pris", "Lenke", "Butikk", "Oppgjørsform", "Info"],
    rows: [
        [
            "3. part",
            13990,
            "https://www.elkjop.no/product/tv-lyd-og-",
            "Elkjøp",
            "Gavekort Elkjøp",
            "",
        ],
    ],
};

const TilsvarendeGjenstand = () => {
    return (
        <Card as="section" padding="l">
            <Flex direction="column" alignItems="start">
                <Text fontStyle="heading-2" size={20} weight="bold">
                    Tilsvarende gjenstand
                </Text>
                <Table
                    caption={
                        <TableCaption srOnly>Fakturaoversikt</TableCaption>
                    }
                    fullWidth
                >
                    <TableHead>
                        <TableRow>
                            <TableHeader key="cta-add" bold />
                            {tilsvarendegjenstand.columns
                                .slice(0, 6)
                                .map((column) => (
                                    <TableHeader key={column} bold>
                                        {column}
                                    </TableHeader>
                                ))}
                            <TableHeader key="cta-delete" bold />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tilsvarendegjenstand.rows.map((row, rowIndex) => (
                            <TableRow key={row[rowIndex]}>
                                <TableCell key="cta-add">
                                    <RadioButton value="" />
                                </TableCell>
                                {row.slice(0, 6).map((cell, cellIndex) => (
                                    <TableCell
                                        key={row[cellIndex]}
                                        data-th={
                                            tilsvarendegjenstand.columns[
                                                cellIndex
                                            ]
                                        }
                                    >
                                        {cell.toLocaleString()}
                                    </TableCell>
                                ))}
                                <TableCell key="cta-delete">
                                    <Button
                                        variant="ghost"
                                        icon={<TrashCanIcon />}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Button variant="ghost" icon={<PlusIcon />}>
                    Ny tilsvarende gjenstand
                </Button>
            </Flex>
        </Card>
    );
};

const erstatningsberegner = {
    columns: [
        "Gjenstand",
        "Antall",
        "Modell",
        "Aldersfradrag",
        "Avkortning",
        "Kjøpt",
        "Oppgjørsform",
        "Pris",
        "Erstatningssum",
        "Status",
    ],
    rows: [
        [
            "TV",
            1,
            "TU65DU8505KXX",
            "40% (4år)",
            "0%",
            "Ny",
            "Gavekort Power",
            7000,
            "kr 4300 (kr 3913)",
            "Klar",
        ],
        [
            "TV",
            1,
            "Apple TV 4K",
            "40% (5år)",
            "0%",
            "Brukt",
            "Gavekort Power",
            3845,
            "kr 2200 (kr 1998)",
            "Klar",
        ],
    ],
};

export const ErstatningsBeregner: Story = {
    name: "Erstatningsberegner",
    parameters: {
        docs: {
            description: {
                story: "Eksempel på beregning av erstatningssum med tabell og detaljer",
            },
        },
        layout: "fullscreen",
    },
    render: ({ variant, ...args }) => {
        return (
            <Table
                fullWidth={true}
                caption={
                    <TableCaption>Eksempel på ekspanderbare rader</TableCaption>
                }
            >
                <TableHead>
                    <TableRow>
                        {erstatningsberegner.columns.map((column) => (
                            <TableHeader key={column} bold>
                                {column}
                            </TableHeader>
                        ))}
                        <TableHeader />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {erstatningsberegner.rows.map((row, rowIndex) => (
                        <ExpandableTableRow
                            {...args}
                            key={row[rowIndex]}
                            isOpen={rowIndex === 1}
                            expandedChildren={
                                <Flex direction="column">
                                    <Oppvaskmaskin />
                                    <TilsvarendeGjenstand />
                                    <Flex layout={"5.7"}>
                                        <Aldersfradrag />
                                        <ForklaringTilKunde />
                                    </Flex>
                                </Flex>
                            }
                        >
                            <ExpandableTableRowController />
                            {row.map((cell, cellIndex) => (
                                <TableCell key={row[cellIndex]}>
                                    {cell.toLocaleString()}
                                </TableCell>
                            ))}
                        </ExpandableTableRow>
                    ))}
                </TableBody>
            </Table>
        );
    },
};
