import React, { FC } from "react";
import { Loader, LoaderVariant } from "..";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../../../../utils/dev-example";

export const knobs: ExampleKnobsProps = {
    choiceProps: [
        {
            name: "Variant",
            values: ["Large", "Medium", "Small"],
            defaultValue: 0,
        },
    ],
};

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
