import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { fn } from "storybook/test";
import { Button } from "../../button/index.js";
import { Card } from "../../card/index.js";
import { Flex } from "../../flex/index.js";
import { GreenCheckIcon } from "../../icon/index.js";
import { FieldGroup } from "../../input-group/index.js";
import { ScreenReaderOnly } from "../../screen-reader-only/index.js";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../table/index.js";
import { DateInput } from "../DateInput.js";
import { toNorwegianDateFormat } from "../utils.js";
import "../styles/_index.scss";

const meta = {
    title: "Komponenter/Date Input/Eksempler",
    component: DateInput,
    args: {
        label: "Når skal du reise?",
        name: "hei",
        labelProps: {
            srOnly: false,
        },
        onChange: fn(),
    },
    parameters: { layout: "padded" },
    tags: ["!autodocs"],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

type Agreement = {
    id: number;
    renewalDate: string;
    agreementNumber: string;
    insuranceName: string;
    caseWorker: string;
    autoRenew: boolean;
};

const caseWorkers = [
    "Pio Rasch-Halvorsen",
    "Ole Jørgen Bakken",
    "Jonas Haraldson Hiorthøy",
    "Heidi Stormoen",
    "Kristian Ulvund",
    "Maria Eilertsen",
    "Elise Brenna",
];

const insuranceNames = [
    "Reiseforsikring",
    "Innboforsikring",
    "Bilforsikring",
    "Husforsikring",
    "Båtforsikring",
    "Uføreforsikring",
];

const rangeStart = new Date(2024, 0, 1).getTime();
const rangeEnd = new Date(2026, 5, 30).getTime();

const exampleAgreements: Agreement[] = Array.from(
    { length: 50 },
    (_, index) => {
        const randomTime = rangeStart + Math.random() * (rangeEnd - rangeStart);

        return {
            id: index,
            renewalDate: new Date(randomTime).toISOString().slice(0, 10),
            agreementNumber: String(
                1000000 + Math.floor(Math.random() * 9000000),
            ),
            insuranceName:
                insuranceNames[
                    Math.floor(Math.random() * insuranceNames.length)
                ],
            caseWorker:
                caseWorkers[Math.floor(Math.random() * caseWorkers.length)],
            autoRenew: Math.random() < 0.5,
        };
    },
).sort((a, b) => a.renewalDate.localeCompare(b.renewalDate));

export const DateInputRange: Story = {
    name: "Filtrering av saksliste etter fornyelsesdato",
    render: () => {
        const [fromDate, setFromDate] = useState<string>("2025-01-01");
        const [toDate, setToDate] = useState<string>("2025-12-31");

        const earliestDate = exampleAgreements[0].renewalDate;
        const latestDate =
            exampleAgreements[exampleAgreements.length - 1].renewalDate;

        // ISO-strenger (yyyy-mm-dd) sorterer likt kronologisk og alfabetisk,
        // så datoene kan sammenlignes direkte uten å parse dem først.
        const filteredAgreements = exampleAgreements.filter(
            (agreement) =>
                (!fromDate || agreement.renewalDate >= fromDate) &&
                (!toDate || agreement.renewalDate <= toDate),
        );

        return (
            <Card padding="xl">
                <Flex direction="column" gap="l">
                    <FieldGroup legend="Vis avtaler som fornyes i perioden">
                        <Flex gap="m" alignItems="end">
                            <DateInput
                                label="Fornyes fra og med"
                                value={fromDate}
                                min={earliestDate} // ikke før første fornyelse
                                max={toDate || latestDate} // ikke etter sluttdato, ev. siste fornyelse
                                onChange={(e) => setFromDate(e.target.value)}
                            />
                            <DateInput
                                label="Fornyes til og med"
                                value={toDate}
                                min={fromDate || earliestDate} // ikke før startdato, ev. første fornyelse
                                max={latestDate} // ikke etter siste fornyelse
                                onChange={(e) => setToDate(e.target.value)}
                            />
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setFromDate("");
                                    setToDate("");
                                }}
                                disabled={!fromDate && !toDate}
                            >
                                Nullstill
                            </Button>
                        </Flex>
                    </FieldGroup>

                    <Table
                        caption={
                            <TableCaption srOnly>
                                Avtaler som fornyes i valgt periode
                            </TableCaption>
                        }
                    >
                        <TableHead>
                            <TableRow>
                                <TableHeader>Fornyelsesdato</TableHeader>
                                <TableHeader>Avtalenummer</TableHeader>
                                <TableHeader>Forsikring</TableHeader>
                                <TableHeader>Saksbehandler</TableHeader>
                                <TableHeader>Fornyes automatisk?</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredAgreements.length > 0 ? (
                                filteredAgreements.map((agreement) => (
                                    <TableRow key={agreement.id}>
                                        <TableCell>
                                            {toNorwegianDateFormat(
                                                agreement.renewalDate,
                                                "nb-NO",
                                                {
                                                    day: "2-digit",
                                                    month: "2-digit",
                                                    year: "numeric",
                                                },
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.agreementNumber}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.insuranceName}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.caseWorker}
                                        </TableCell>
                                        <TableCell>
                                            {agreement.autoRenew ? (
                                                <>
                                                    <GreenCheckIcon />
                                                    <ScreenReaderOnly>
                                                        Ja
                                                    </ScreenReaderOnly>
                                                </>
                                            ) : (
                                                "Nei"
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        Ingen avtaler fornyes i valgt periode
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={5}>
                                    Totalt: {filteredAgreements.length} avtaler
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </Flex>
            </Card>
        );
    },
};
