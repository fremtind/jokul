import React, { VFC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Loader, LoaderVariant } from "../src";
import "./styles.scss";

export const LoaderExample: VFC<ExampleComponentProps> = ({ choiceValues }) => {
    return (
        <div className="jkl-loader-example">
            <div>
                <Loader
                    variant={String(choiceValues?.["Variant"]).toLowerCase() as LoaderVariant}
                    textDescription="Eksempelbeskrivelse for en loader"
                />
            </div>
        </div>
    );
};

export const loaderExampleCode: CodeExample = ({ choiceValues }) => `
<Loader
    variant="${String(choiceValues?.["Variant"]).toLowerCase()}"
    textDescription="Eksempelbeskrivelse for en loader"
/>
`;
