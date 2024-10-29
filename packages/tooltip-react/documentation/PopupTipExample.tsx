import { ExampleComponentProps } from "doc-utils";
import React, { FC } from "react";
import { formatValuta } from "../../formatters-util/src";
import { type TooltipPlacement } from "../src";
import { PopupTip } from "../src/PopupTip";
import { getPlacement } from "./getPlacement";

export const PopupTipExample: FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const initialPlacement: TooltipPlacement = getPlacement(
        choiceValues?.["Plassering"],
    );

    return (
        <p>
            Du betaler 348 kr/mnd{" "}
            <PopupTip
                placement={initialPlacement}
                content={`Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er ${formatValuta(
                    4176,
                )}.`}
                triggerProps={{
                    onClick: () => console.log("PopupTip clicked"),
                }}
            />
        </p>
    );
};

export const popupTipExampleCode = ({
    choiceValues,
}: ExampleComponentProps): string => `<p>
    Du betaler 348 kr/mnd{" "}
    <PopupTip
        placement="${getPlacement(choiceValues?.["Plassering"])}"
        content={\`Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er \${formatValuta(4176)}.\`}
    />
</p>
);`;
