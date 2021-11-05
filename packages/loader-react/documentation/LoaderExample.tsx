import React, { VFC } from "react";
import { ExampleComponentProps } from "../../../doc-utils";
import { Loader, LoaderVariant } from "../src";
import "./styles.scss";

type VariantChoice = "Large" | "Medium" | "Small";

export const LoaderExample: VFC<ExampleComponentProps> = ({ choiceValues }) => {
    const variantChoice = choiceValues && (choiceValues["Variant"] as VariantChoice);
    let variant: LoaderVariant = "large";
    switch (variantChoice) {
        case "Medium":
            variant = "medium";
            break;
        case "Small":
            variant = "small";
            break;
        case "Large":
        default:
            break;
    }

    return (
        <div className="jkl-loader-example">
            <div>
                <Loader variant={variant} textDescription="Eksempelbeskrivelse for en loader" />
            </div>
        </div>
    );
};
