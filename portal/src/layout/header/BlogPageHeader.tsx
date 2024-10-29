import React, { FC } from "react";
import type { Frontmatter } from "./useNavigationLinks";

export const BlogPageHeader: FC<Frontmatter> = ({
    title,
    author,
    publishDate,
}) => {
    if (!author) {
        return null;
    }
    return (
        <>
            <h1 className="title">{title}</h1>
            <div className="my-24">
                <p data-testid="blog-author">{author}</p>
                {publishDate && (
                    <p data-testid="blog-publishDate">{publishDate}</p>
                )}
            </div>
        </>
    );
};
