import { ExampleComponentProps } from "doc-utils/index.js";
import { formatValuta } from "packages/formatters-util/src/index.js";
import React, { FC } from "react";
import { PopupTip } from "../PopupTip.js";
import { TooltipPlacement } from "../Tooltip.js";
import { getPlacement } from "./getPlacement.js";

export const PopupTipExample: FC<ExampleComponentProps> = ({ choiceValues }) => {
    const initialPlacement: TooltipPlacement = getPlacement(choiceValues?.["Plassering"]);

    return (
        <p>
            Du betaler 348 kr/mnd{" "}
            <PopupTip
                placement={initialPlacement}
                content={`Månedsprisen vil variere på fakturaen din gjennom året. Årsprisen er ${formatValuta(4176)}.`}
                triggerProps={{
                    onClick: () => console.log("PopupTip clicked"),
                }}
            />
        </p>
    );
};
