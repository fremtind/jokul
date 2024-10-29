import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React from "react";
import { formatValuta } from "../../../../utilities/formatters/valuta/formatValuta.js";
import { ErrorTag } from "../../../tag/Tag.js";
import {
    Card,
    CARD_PADDINGS,
    CARD_VARIANTS,
    CardPadding,
    CardVariant,
} from "../../Card.js";

export const FakturainfoExample = ({
    boolValues,
    choiceValues,
}: ExampleComponentProps) => {
    const padding = choiceValues?.["Padding"] as CardPadding | undefined;
    const type = choiceValues?.["Type"] as CardVariant | undefined;

    return (
        <Card
            asChild
            clickable={!!boolValues?.["Clickable"]}
            padding={padding}
            variant={type}
        >
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
    );
};

export const fakturainfoExampleProps: ExampleKnobsProps = {
    boolProps: [{ prop: "Clickable", defaultValue: true }],
    choiceProps: [
        {
            name: "Padding",
            values: [...CARD_PADDINGS],
            defaultValue: 1,
        },
        {
            name: "Type",
            values: [...CARD_VARIANTS],
            defaultValue: 0,
        },
    ],
};
