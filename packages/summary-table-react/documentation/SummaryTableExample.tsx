import React from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { mockProps } from "../mocks";
import { SummaryTable } from "../src";
import "./summary-table-example.scss";

export const SummaryTableExample: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="summary-table-example">
            <SummaryTable {...mockProps} />
        </div>
    );
};

const SOFT_HYPHEN = "\u00AD";

export const summaryTableExampleCode: CodeExample = `
<SummaryTable
    caption="Informasjon om produkter og pris i handlekurven"
    header={["Produkt", "Pris"]}
    body={
        <>
            <SummaryTableRow header={\`Uføre${SOFT_HYPHEN}pensjon\`} content="340,00 kr/mnd" />
            <SummaryTableRow
                className="summary-table-example__custom-row"
                header={\`Livs${SOFT_HYPHEN}forsikring\`}
                content="Tatt ut av tilbudet"
            />
            <SummaryTableRow header={\`Innbo${SOFT_HYPHEN}forsikring\`} content="122,00 kr/mnd" />
            <SummaryTableRow header={\`Reise${SOFT_HYPHEN}forsikring\`} content="249,00 kr/mnd" />
            <SummaryTableRow className="summary-table-example__custom-row" header="Rabatt" content="- 17,50 kr/mnd" />
        </>
    }
    footer={
        <>
            <SummaryTableRow header="Total sum" content="693,50 kr/mnd" />
            <SummaryTableRow header={<span className="jkl-sr-only">Total sum per år</span>} content="8322,50 kr/år" />
        </>
    }
/>
`;
