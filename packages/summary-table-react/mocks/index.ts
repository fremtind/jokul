const SOFT_HYPHEN = "\u00AD";

export const mockColumnDescriptions = ["Product", "Price"] as [string, string];

export const mockItems = [
    { label: "Person", value: "", bold: true },
    { label: `Barne${SOFT_HYPHEN}forsikring`, value: `200 ${SOFT_HYPHEN}kr/mnd` },
    { label: `Behandlings${SOFT_HYPHEN}forsikring`, value: `200 ${SOFT_HYPHEN}kr/mnd` },
    { label: "Skade", value: "", bold: true },
    { label: "Innboforsikring", value: "100 kr/mnd" },
    { label: "Reiseforsikring", value: "100 kr/mnd" },
];

export const mockFooter = { label: "Total sum", value: "600 kr/mnd" };

export const mockProps = {
    columnDescriptions: mockColumnDescriptions,
    items: mockItems,
    footer: mockFooter,
};
