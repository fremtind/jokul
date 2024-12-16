import React, { type FC } from "react";
import { Showcase } from "../../components/showcase";
import { type ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";

export const ShowcaseContentBlock: FC<ContentBlockProps> = ({
    contentBlock,
}) => {
    assertBlockIs("showcase", contentBlock);

    if (
        !contentBlock["showcaseItem"] ||
        contentBlock["showcaseItem"].length === 0
    ) {
        return null;
    }

    return (
        <>
            {contentBlock["showcaseItem"].map((item) => (
                <Showcase
                    key={item.title}
                    title={item.title}
                    source={item.src}
                    from={item.origin}
                    example={item.example}
                >
                    {item.description}
                </Showcase>
            ))}
        </>
    );
};
