import React from "react";
import type {
    ExampleComponentProps,
    ExampleKnobsProps,
} from "utils/dev-example/index.js";
import { formatValuta } from "../../../../utilities/formatters/valuta/formatValuta.js";
import { ErrorTag } from "../../../tag/Tag.js";
import { Card } from "../../Card.js";
import { CARD_PADDINGS, type CardPadding } from "../../types.js";

export const FakturainfoExample = ({
    boolValues,
    choiceValues,
}: ExampleComponentProps) => {
    const padding = choiceValues?.["Padding"] as CardPadding | undefined;
    const outlined = !!boolValues?.["Outlined"];

    return (
        <Card
            asChild
            clickable={!!boolValues?.["Clickable"]}
            padding={padding}
            outlined={outlined}
        >
            <a href="#test" style={{ display: "flex", gap: "40px" }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    }}
                >
                    <p className="jkl-heading-2">
                        {formatValuta(18856)}
                        <span aria-hidden> →</span>
                    </p>
                    <p className="jkl-body">Frist 20.03.2023</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <ErrorTag>Ubetalt</ErrorTag>
                    <p className="jkl-body">Purring</p>
                </div>
            </a>
        </Card>
    );
};

export const fakturainfoExampleProps: ExampleKnobsProps = {
    boolProps: [
        { prop: "Clickable", defaultValue: true },
        { prop: "Outlined", defaultValue: false },
    ],
    choiceProps: [
        {
            name: "Padding",
            values: [...CARD_PADDINGS],
            defaultValue: 1,
        },
    ],
};
