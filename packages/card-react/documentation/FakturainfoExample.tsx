import React from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { formatValuta } from "../../formatters-util/src";
import { ErrorTag } from "../../tag-react/src";
import { Card, CARD_PADDINGS, CONTAINER_COLORS, type CardPadding, type ContainerColor } from "../src/Card";

export const FakturainfoExample = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const padding = choiceValues?.["Padding"] as CardPadding | undefined;
    const background = choiceValues?.["Background"] as ContainerColor | undefined;

    return (
        <Card asChild clickable={!!boolValues?.["Clickable"]} padding={padding} background={background}>
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

export const fakturainfoExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps) => `
// Her bruker vi asChild-propen for å erstatte Card med child-elementet sitt
<Card
    asChild
    clickable={${!!boolValues?.["Clickable"]}}
    padding="${choiceValues?.["Padding"]}"
    background="${choiceValues?.["Background"]}"
>
    {/* Siden vi bruker asChild er det denne lenken som blir rendret.
    Den får også satt alle egenskapene fra Card-komponenten på seg */}
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
</Card>`;

export const fakturainfoExampleProps: ExampleKnobsProps = {
    boolProps: [{ prop: "Clickable", defaultValue: true }],
    choiceProps: [
        {
            name: "Padding",
            values: [...CARD_PADDINGS],
            defaultValue: 3,
        },
        {
            name: "Background",
            values: [...CONTAINER_COLORS],
            defaultValue: 1,
        },
    ],
};
