import { ExampleComponentProps } from "doc-utils/index.js";
import React, { FC } from "react";
import { formatValuta } from "../../../utilities/formatters/valuta/formatValuta.js";
import { PopupTip } from "../PopupTip.js";
import { TooltipPlacement } from "../types.js";
import { getPlacement } from "./getPlacement.js";

export const PopupTipExample: FC<ExampleComponentProps> = ({
    choiceValues,
}) => {
    const initialPlacement: TooltipPlacement = getPlacement(
        choiceValues?.["Plassering"],
    );

    return (
        <p style={{ marginTop: 40 }}>
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
