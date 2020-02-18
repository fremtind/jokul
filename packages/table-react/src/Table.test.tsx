import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Table, TableRowType } from "./index";
import { axe } from "jest-axe";

afterEach(cleanup);

describe("Table", () => {
    it("renders to the DOM", () => {
        const cols = ["Dato", "Saksnummer", "Kundenummer"];
        const rows = [
            ["24.02.2020", "20-1234567", "010203 99887"],
            ["13.04.2019", "20-8382811", "010203 99887"],
        ];

        render(<Table columns={cols} rows={rows} />);
    });

    it("renders all column headings", () => {
        const cols = ["Dato", "Saksnummer"];
        const rows = [["24.02.2020", "20-1234567"]];

        const { getByText } = render(<Table columns={cols} rows={rows} />);

        expect(getByText("Dato")).toBeInTheDocument;
        expect(getByText("Saksnummer")).toBeInTheDocument;
    });

    it("renders all row content", () => {
        const cols = ["Dato", "Saksnummer"];
        const rows = [["24.02.2020", "20-1234567"]];

        const { getByText } = render(<Table columns={cols} rows={rows} />);

        expect(getByText("24.02.2020")).toBeInTheDocument;
        expect(getByText("20-1234567")).toBeInTheDocument;
    });

    it("renders a link element with correct href in anchor rows", () => {
        const cols = ["Dato", "Saksnummer"];
        const rows = [
            {
                type: TableRowType.Anchor,
                rowData: ["24.02.2020", "20-1234567"],
                href: "/relative/path",
                hrefLabel: "Se detaljer",
            },
        ];

        const { getByTestId } = render(<Table columns={cols} rows={rows} />);

        expect(getByTestId("jkl-table__screenreader-link")).toHaveAttribute("href", "/relative/path");
    });

    it("calls the provided onRowClick function on row click", () => {
        const handleClick = jest.fn();
        const cols = ["Dato", "Saksnummer"];
        const rows = [
            {
                type: TableRowType.Anchor,
                rowData: ["24.02.2020", "20-1234567"],
                href: "/relative/path",
                hrefLabel: "Se detaljer",
                onRowClick: handleClick,
            },
        ];

        const { getByText } = render(<Table columns={cols} rows={rows} />);
        getByText("20-1234567").click();

        expect(handleClick).toHaveBeenCalled();
    });
});

describe("a11y", () => {
    test("table should be a11y compliant", async () => {
        const cols = ["Dato", "Saksnummer"];
        const rows = [
            {
                type: TableRowType.Anchor,
                rowData: ["24.02.2020", "20-1234567"],
                href: "/relative/path",
                hrefLabel: "Se detaljer",
                onRowClick: jest.fn(),
            },
        ];

        const { container } = render(<Table columns={cols} rows={rows} />);
        const results = await axe(container);

        expect(results).toHaveNoViolations();
    });
});
