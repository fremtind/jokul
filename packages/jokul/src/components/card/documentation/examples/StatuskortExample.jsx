import React from "react";
import { Image } from "../../../image";
import { SuccessTag } from "../../../tag";
import { Card, CARD_PADDINGS, CARD_VARIANTS } from "../../Card";
import { CardImage } from "../../CardImage";

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

export const StatuskortExample = () => {
    /* -- EXAMPLE CODE START -- */
    const imageProps = {
        src: "/img/grass-400.jpg",
        srcSet: `/img/grass-400.jpg 400w, /img/grass-800.jpg 800w`,
        placeholder: "/img/grass-thumbnail.jpg",
        alt: "Nærbilde av strå, med en åker i bakgrunnen",
    };

    const padding = choiceKnob("Padding");
    const type = choiceKnob("Type");

    return (
        <Card
            as="a"
            href="#"
            clickable={boolKnob("Clickable")}
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
    /* -- EXAMPLE CODE END -- */
};
