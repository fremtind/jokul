import React, { type FC } from "react";
import { ExpandedFunctionalColorsTableBlock } from "../ExpandedFunctionalColorsTableBlock";
import { FunctionalColorsTableBlock } from "./FunctionalColorsTableBlock";
import { MainColorsTableBlock } from "./MainColorsTableBlock";
import { SpacingTableBlock } from "./SpacingTableBlock";
import { type ContentBlockProps } from "./types";
import { assertBlockIs } from "./types";
import { TypographyTableBlock } from "./TypographyTableBlock";
import { TypographySmallTableBlock } from "~/block-renderers/content-blocks/TypographySmallTableBlock";

export const TableBlock: FC<ContentBlockProps> = ({ contentBlock }) => {
    assertBlockIs("table", contentBlock);

    if (!contentBlock.rows || contentBlock.rows.length === 0) {
        return null;
    }

    return (
        <>
            {contentBlock.rows?.map((row) => {
                switch (row.type) {
                    case "mainColors":
                        return <MainColorsTableBlock key={row.type} />;
                    case "functionalColors":
                        return <FunctionalColorsTableBlock key={row.type} />;
                    case "expandedFunctionalColors":
                        return (
                            <ExpandedFunctionalColorsTableBlock
                                key={row.type}
                            />
                        );
                    case "spacing":
                        return <SpacingTableBlock key={row.type} />;
                    case "typo":
                        return <TypographyTableBlock key={row.type} />;
                    case "typo-small":
                        return <TypographySmallTableBlock key={row.type} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};
