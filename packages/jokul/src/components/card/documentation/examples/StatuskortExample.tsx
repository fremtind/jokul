import { ExampleComponentProps, ExampleKnobsProps } from "doc-utils/index.js";
import React from "react";
import grass400 from "/img/grass-400.jpg";
import grass800 from "/img/grass-800.jpg";
import grassThumbnail from "/img/grass-thumbnail.jpg";
import { SuccessTag } from "../../../tag/Tag.js";
import { Card, CARD_PADDINGS, CARD_VARIANTS, CardPadding, CardVariant } from "../../Card.js";
import { CardImage } from "../../CardImage.js";

const imageProps = {
    src: grass400,
    srcSet: `${grass400} 400w, ${grass800} 800w`,
    placeholder: grassThumbnail,
    alt: "Nærbilde av strå, med en åker i bakgrunnen",
};

export const StatuskortExample = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const padding = choiceValues?.["Padding"] as CardPadding | undefined;
    const type = choiceValues?.["Type"] as CardVariant | undefined;

    return (
        <Card
            as="a"
            href="#"
            clickable={!!boolValues?.["Clickable"]}
            padding={padding}
            variant={type}
            style={{ maxWidth: "350px" }}
            className="flex flex-column gap-24 items-start"
        >
            <CardImage as={Image} placement="top" {...imageProps} />
            <SuccessTag>Behandles</SuccessTag>
            <div className="flex flex-column gap-4">
                <p className="jkl-heading-2">
                    Behandlings- og veterinærutgifter
                    <span aria-hidden> →</span>
                </p>
                <p className="jkl-body">Balder</p>
            </div>
            <hr
                style={{
                    margin: 0,
                    width: "100%",
                    border: 0,
                    borderBottom: "1px solid var(--jkl-color-border-separator)",
                }}
            />
            <p className="jkl-small">
                Skadedato
                <br />
                24.01.2024
            </p>
        </Card>
    );
};

export const statuskortExampleProps: ExampleKnobsProps = {
    boolProps: [{ prop: "Clickable", defaultValue: true }],
    choiceProps: [
        {
            name: "Padding",
            values: [...CARD_PADDINGS],
            defaultValue: 2,
        },
        {
            name: "Type",
            values: [...CARD_VARIANTS],
            defaultValue: 0,
        },
    ],
};
