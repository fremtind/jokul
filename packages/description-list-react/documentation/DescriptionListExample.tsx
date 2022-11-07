import React from "react";
import { CodeExample } from "../../../doc-utils";
import { DescriptionList, DescriptionDetail as DD, DescriptionTerm as DT } from "../src";

export const DescriptionListExample: React.FC = () => {
    return (
        <DescriptionList>
            <DT>Dekning</DT>
            <DD>Kasko</DD>

            <DT>Egenandel</DT>
            <DD>2 000 kr for glass</DD>
            <DD>6 000 kr for øvrige skader</DD>

            <DT>Sjåfør under 23 år</DT>
            <DD>Nei</DD>
        </DescriptionList>
    );
};

export const descriptionListExampleCode: CodeExample = () => `
<DescriptionList>
    <DescriptionTerm>Dekning</DescriptionTerm>
    <DescriptionDetail>Kasko</DescriptionDetail>

    <DescriptionTerm>Egenandel</DescriptionTerm>
    <DescriptionDetail>2 000 kr for glass</DescriptionDetail>
    <DescriptionDetail>6 000 kr for øvrige skader</DescriptionDetail>

    <DescriptionTerm>Sjåfør under 23 år</DescriptionTerm>
    <DescriptionDetail>Nei</DescriptionDetail>
</DescriptionList>
`;
