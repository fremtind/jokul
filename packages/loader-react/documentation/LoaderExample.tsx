import React, { FC } from "react";
import { CodeExample, ExampleComponentProps } from "../../../doc-utils";
import { Loader, LoaderVariant } from "../src";
import "./styles.scss";

export const LoaderExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    return (
        <div className="jkl-loader-example">
            <div>
                <Loader
                    role="none presentation" // Kun for eksempelet, ellers blir det mange alerts på siden
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
