import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import React, { type FC } from "react";
import { Loader } from "../Loader.js";
import type { LoaderVariant } from "../types.js";

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
                {/* biome-ignore lint/a11y/useValidAriaRole: Kun for eksempelet, ellers blir det mange alerts på siden */}
                <Loader
                    role="none presentation"
                    variant={
                        String(
                            choiceValues?.["Variant"],
                        ).toLowerCase() as LoaderVariant
                    }
                    textDescription="Eksempelbeskrivelse for en loader"
                />
            </div>
        </div>
    );
};
