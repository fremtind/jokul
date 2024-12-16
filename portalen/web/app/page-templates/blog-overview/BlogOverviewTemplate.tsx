import { useElementDimensions } from "@fremtind/jokul";
import { type Blog } from "@org/cms";
import { BlogCard } from "app/components/blog-card";
import React, { type CSSProperties, type FC, useEffect, useState } from "react";
import { useFadingContent } from "~/hooks";
import { AnimatedPageWrapper } from "~/page-templates/AnimatedPageWrapper";

const CARD_WIDTH = 355;
const CARD_GAP = 24;

export const BlogOverviewTemplate: FC<{ docs: Blog[] }> = ({
    docs,
    ...rest
}) => {
    useFadingContent();

    const [columnCount, setColumnCount] = useState(1);
    const [columns, setColumns] = useState<Blog[][]>([]);
    const [contentRef, dimensions] = useElementDimensions(100);

    useEffect(() => {
        if (contentRef.current) {
            setColumnCount(
                Math.floor(
                    (contentRef.current.clientWidth - CARD_GAP * 2) /
                        CARD_WIDTH,
                ),
            );
        }
    }, [dimensions.width, contentRef]);

    useEffect(() => {
        const nextColumns: Blog[][] = Array.from(
            { length: columnCount },
            () => [],
        );
        let index = 0;
        [...docs]
            .sort((a, b) => {
                if (
                    a.published_date === b.published_date ||
                    !a.published_date ||
                    !b.published_date
                )
                    return 0;
                return a.published_date > b.published_date ? -1 : 1;
            })
            .forEach((doc) => {
                nextColumns[index].push(doc);
                index = ++index % columnCount;
            });
        setColumns(nextColumns);
    }, [columnCount, docs]);

    return (
        <AnimatedPageWrapper className={"jkl-portal-blog-overview"} {...rest}>
            <div>
                <h1 className={"jkl-portal-blog-overview-heading"}>Blogg</h1>
            </div>
            <span
                className={"jkl-portal-overview-visually-hidden"}
                id={"list-label"}
                aria-hidden={true}
            >
                Liste over bloggposter
            </span>
            <section
                aria-labelledby={"list-label"}
                style={
                    {
                        "--card-gap": `${CARD_GAP}px`,
                        "--max-width": `${dimensions.width}px`,
                        "--card-width": `${CARD_WIDTH}px`,
                    } as CSSProperties
                }
                ref={contentRef}
            >
                <div className={"jkl-portal-blog-overview-list"}>
                    {columns.map((column, index) => (
                        <div
                            key={`${columnCount}-${index}`}
                            className={"jkl-portal-blog-overview-list__column"}
                        >
                            {column.map((blog) => (
                                <div
                                    key={blog.id}
                                    className={
                                        "jkl-portal-blog-overview-list__item"
                                    }
                                >
                                    <BlogCard {...blog} />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedPageWrapper>
    );
};
