import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import React from "react";
import { DescriptionList, DescriptionDetail, DescriptionTerm } from "../src";
import "./Example.scss";

export const Example: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="description-list-example">
            <DescriptionList>
                <DescriptionTerm>Forsikringer</DescriptionTerm>
                <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
                <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
                <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
                <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>
                <DescriptionDetail>SAGA Dødsrisiko Grunndekning Hovedforsikret</DescriptionDetail>

                <DescriptionTerm>Mat</DescriptionTerm>
                <DescriptionDetail>Sushi</DescriptionDetail>
                <DescriptionDetail>Carbonara</DescriptionDetail>
            </DescriptionList>
        </div>
    );
};

export default Example;
