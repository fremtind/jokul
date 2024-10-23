import React from "react";
import { DescriptionDetail as DD, DescriptionList, DescriptionTerm as DT } from "../DescriptionList.js";

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
