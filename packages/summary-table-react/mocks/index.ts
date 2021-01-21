const SOFT_HYPHEN = "\u00AD";

export const mockColumnDescriptions = ["Product", "Price"] as [string, string];

export const mockItems = [
    { label: `Barne${SOFT_HYPHEN}forsikring`, value: `200 ${SOFT_HYPHEN}kr/mnd` },
    { label: "Innboforsikring", value: "100 kr/mnd" },
];

export const mockFooter = { label: "Total sum", value: "300 kr/mnd" };

export const mockProps = {
    columnDescriptions: mockColumnDescriptions,
    items: mockItems,
    footer: mockFooter,
};
