import React from "react";
import { SummaryTableRow } from "../src/SummaryTableRow";

const SOFT_HYPHEN = "\u00AD";

export const mockHeader = ["Product", "Price"] as [string, string];
export const mockBody = (
    <>
        <SummaryTableRow
            header={`Uføre${SOFT_HYPHEN}pensjon`}
            content="340,00 kr/mnd"
        />
        <SummaryTableRow
            className="summary-table-example__custom-row"
            header={`Livs${SOFT_HYPHEN}forsikring`}
            content="Tatt ut av tilbudet"
        />
        <SummaryTableRow
            header={`Innbo${SOFT_HYPHEN}forsikring`}
            content="122,00 kr/mnd"
        />
        <SummaryTableRow
            header={`Reise${SOFT_HYPHEN}forsikring`}
            content="249,00 kr/mnd"
        />
        <SummaryTableRow
            className="summary-table-example__custom-row"
            header="Rabatt"
            content="- 17,50 kr/mnd"
        />
    </>
);
export const mockFooter = (
    <>
        <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />
        <SummaryTableRow
            header={<span className="jkl-sr-only">Total sum per år</span>}
            content="8322,50 kr/mnd"
        />
    </>
);

export const mockProps = {
    header: mockHeader,
    body: mockBody,
    footer: mockFooter,
    caption: "Informasjon om produkter og pris i handlekurven",
};
