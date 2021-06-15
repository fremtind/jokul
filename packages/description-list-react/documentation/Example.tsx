import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import React from "react";
import { DescriptionList } from "../src";
import "./Example.scss";

const items = [
    {
        term: `Forsikringer`,
        details: [
            "SAGA Dødsrisiko Grunndekning Hovedforsikret",
            "SAGA Dødsrisiko Tilleggsdekning Hovedforsikret",
            "SAGA Dødsrisiko Utvidet dekning Hovedforsikret",
            "SAGA Uførekapital Grunndekning Hovedforsikret ",
            "SAGA Uførekapital Tilleggsdekning Hovedforsikret ",
            "SAGA Uførekapital Utvidet dekning Hovedforsikret",
            "SAGA Uførerente 4 år Grunndekning Hovedforsikret",
            "SAGA Uførerente 4 år Tilleggsdekning Hovedforsikret",
        ],
    },
    {
        term: "Mat",
        details: ["Sushi", "Carbonara"],
    },
];

export const Example: React.FC<ExampleComponentProps> = () => {
    return (
        <div className="description-list-example">
            <DescriptionList items={items} />
        </div>
    );
};

export default Example;
