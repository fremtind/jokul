import React from "react";
import { DescriptionList } from "../DescriptionList.js";

export const DescriptionListExample: React.FC = () => {
    return (
        <DescriptionList>
            <DescriptionList.Item title="Dekning" value="Kasko" />
            <DescriptionList.Item
                title="Egenandel"
                value="2 000 kr for glass"
                supportText="6 000 kr for øvrige skader"
            />
            <DescriptionList.Item title="Sjåfør under 23 år" value="Nei" />
        </DescriptionList>
    );
};
