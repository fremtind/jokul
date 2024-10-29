import React, { type FC } from "react";
import { type ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";
import { DoDontExample, DoDontPair } from "~/components/do-dont-example";
import { LivePreview } from "~/components/interactive-code/LivePreview";
import { LiveProvider } from "~/components/interactive-code/LiveProvider";
import { Image } from "~/components/media";

export const DoDontContentBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs("dodont-example", contentBlock);

    if (
        !contentBlock["doDontItem"] ||
        contentBlock["doDontItem"].length === 0
    ) {
        return null;
    }

    return (
        <DoDontPair className="jkl-spacing-24-32--bottom">
            {contentBlock["doDontItem"].map((item) => (
                <DoDontExample
                    key={item.id}
                    description={item.description}
                    type={item.type}
                >
                    {item.variant === "code" && item.code && (
                        <LiveProvider
                            code={item.code}
                            noInline={item.noinline ?? false}
                        >
                            <LivePreview />
                        </LiveProvider>
                    )}
                    {item.variant === "image" && item.image && (
                        <Image src={item.image} alt="" />
                    )}
                </DoDontExample>
            ))}
        </DoDontPair>
    );
};
