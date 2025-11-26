import React from "react";
import { DescriptionList } from "../DescriptionList.js";

export const DescriptionListExample: React.FC = () => {
    return (
        <DescriptionList>
            <DescriptionList.Item terms="Dekning" details="Kasko" />
            <DescriptionList.Item
                terms="Egenandel"
                details="2 000 kr for glass"
                supportText="6 000 kr for øvrige skader"
            />
            <DescriptionList.Item terms="Sjåfør under 23 år" details="Nei" />
        </DescriptionList>
    );
};
