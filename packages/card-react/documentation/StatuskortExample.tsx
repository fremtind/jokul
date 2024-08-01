import React from "react";
import { ExampleComponentProps, ExampleKnobsProps } from "../../../doc-utils";
import { Image } from "../../image-react/src";
import { SuccessTag } from "../../tag-react/src";
import { Card, CARD_PADDINGS, CONTAINER_COLORS, type CardPadding, type ContainerColor } from "../src/Card";
import { CardImage } from "../src/CardImage";
import grass400 from "./img/grass-400.jpg";
import grass800 from "./img/grass-800.jpg";
import grassThumbnail from "./img/grass-thumbnail.jpg";

const imageProps = {
    src: grass400,
    srcSet: `${grass400} 400w, ${grass800} 800w`,
    placeholder: grassThumbnail,
    alt: "Nærbilde av strå, med en åker i bakgrunnen",
};

export const StatuskortExample = ({ boolValues, choiceValues }: ExampleComponentProps) => {
    const padding = choiceValues?.["Padding"] as CardPadding | undefined;
    const background = choiceValues?.["Background"] as ContainerColor | undefined;

    return (
        <Card
            as="a"
            href="#"
            clickable={!!boolValues?.["Clickable"]}
            padding={padding}
            background={background}
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

export const statuskortExampleCode = ({ boolValues, choiceValues }: ExampleComponentProps) => `
// Her bruker vi as-propen til å be React rendre Card som et
// anchor-element. Det er også mulig å rendre komponenten som en
// egenlaget React-komponent, eller som f.eks. en Link fra en router
<Card
    as="a"
    href="#"
    clickable={${!!boolValues?.["Clickable"]}}
    padding="${choiceValues?.["Padding"]}"
    background="${choiceValues?.["Background"]}"
    style={{ maxWidth: "350px" }}
    className="flex flex-column gap-24 items-start"
>
    <CardImage placement="top" {...imageProps} />
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
</Card>`;

export const statuskortExampleProps: ExampleKnobsProps = {
    boolProps: [{ prop: "Clickable", defaultValue: true }],
    choiceProps: [
        {
            name: "Padding",
            values: [...CARD_PADDINGS],
            defaultValue: 4,
        },
        {
            name: "Background",
            values: [...CONTAINER_COLORS],
            defaultValue: 1,
        },
    ],
};
