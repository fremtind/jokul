import {
    DescriptionDetail,
    DescriptionList,
    DescriptionTerm,
} from "@fremtind/jokul";
import React, { type FC } from "react";
import type { ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";
import { hex, rgb, cmyk } from "~/utils/colors";

export const ColorCardBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs("color-card", contentBlock);

    if (!contentBlock.cards || contentBlock.cards.length === 0) {
        return null;
    }

    return (
        <div className="cards-container">
            {contentBlock.cards.map((card) => {
                if (!card.color) {
                    return null;
                }

                return (
                    <div className="card-wrapper" key={card.id}>
                        <div className="card-swatch-container">
                            <div className={`card-swatch--${card.color}`} />
                        </div>

                        <DescriptionList>
                            <DescriptionTerm>HEX</DescriptionTerm>
                            <DescriptionDetail>
                                {hex[card.color]?.toUpperCase()}
                            </DescriptionDetail>
                            <DescriptionTerm>RGB</DescriptionTerm>
                            <DescriptionDetail>
                                {rgb[card.color]}
                            </DescriptionDetail>
                            <DescriptionTerm>CMYK</DescriptionTerm>
                            <DescriptionDetail>
                                {cmyk[card.color]}
                            </DescriptionDetail>
                        </DescriptionList>
                    </div>
                );
            })}
        </div>
    );
};
