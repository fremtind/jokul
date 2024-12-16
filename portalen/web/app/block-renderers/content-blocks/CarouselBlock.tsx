import React, { type FC } from "react";
import type { ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";
import { Image } from "~/components/media";
import { ExampleStep, SteppedExample } from "~/components/stepped-example";

export const CarouselBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs("carousel", contentBlock);

    return (
        <SteppedExample>
            {contentBlock.steps.map((step) => (
                <ExampleStep
                    key={step.id}
                    headline={step.title}
                    description={step.description}
                >
                    {typeof step.image === "undefined" ? (
                        <div />
                    ) : (
                        <Image src={step.image} alt="" />
                    )}
                </ExampleStep>
            ))}
        </SteppedExample>
    );
};
