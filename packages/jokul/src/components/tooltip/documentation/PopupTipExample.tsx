import { ExampleComponentProps } from "doc-utils";
import React, { FC } from "react";
import { type TooltipPlacement } from "..";
import { formatValuta } from "../../../utilities/formatters";
import { PopupTip } from "../PopupTip";
import { getPlacement } from "./getPlacement";

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
