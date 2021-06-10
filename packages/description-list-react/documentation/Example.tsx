import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { DescriptionList, DescriptionTerm, DescriptionDetails } from "../src";
import "./Example.scss";

export const Example: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="description-list-example">
            <DescriptionList>
                <DescriptionTerm>Forsikring</DescriptionTerm>

                <DescriptionDetails>Livsforsikring</DescriptionDetails>
                <DescriptionDetails>Barneforsikring</DescriptionDetails>


                <DescriptionTerm>Frukt</DescriptionTerm>
                <DescriptionDetails>Appelsin</DescriptionDetails>

            </DescriptionList>
        </div>
    );
};

export default Example;
