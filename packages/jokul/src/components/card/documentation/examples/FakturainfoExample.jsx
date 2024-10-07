import React from "react";
import { formatValuta } from "../../../../utilities/formatters";
import { ErrorTag } from "../../../tag";
import { Card, CARD_PADDINGS, CARD_VARIANTS } from "../../Card";

export const knobs = [
    {
        type: "bool",
        label: "Clickable",
        boolOptions: {
            trueValue: true,
            falseValue: false,
        },
    },
    {
        type: "choice",
        label: "Padding",
        choiceOptions: CARD_PADDINGS.map((p) => ({ label: p, value: p })),
        defaultValue: 0,
    },
    {
        type: "choice",
        label: "Type",
        choiceOptions: CARD_VARIANTS.map((v) => ({ label: v, value: v })),
        defaultValue: 0,
    },
];

export const FakturainfoExample = () => {
    /* -- EXAMPLE CODE START -- */
    const padding = choiceKnob("Padding");
    const type = choiceKnob("Type");

    return (
        <div className="flex">
            <Card asChild clickable={!!boolKnob("Clickable")} padding={padding} variant={type}>
                <a href="#test" className="flex gap-x-40">
                    <div className="flex flex-column gap-4">
                        <p className="jkl-heading-2">
                            {formatValuta(18856)}
                            <span aria-hidden> →</span>
                        </p>
                        <p className="jkl-body">Frist 20.03.2023</p>
                    </div>
                    <div className="flex flex-column gap-12">
                        <ErrorTag>Ubetalt</ErrorTag>
                        <p className="jkl-body">Purring</p>
                    </div>
                </a>
            </Card>
        </div>
    );
    /* -- EXAMPLE CODE END -- */
};
