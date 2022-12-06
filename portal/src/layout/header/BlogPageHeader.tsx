import React, { FC } from "react";
import type { Frontmatter } from "./useNavigationLinks";

export const BlogPageHeader: FC<Frontmatter> = ({ title, author, publishDate }) => {
    if (!author) {
        return null;
    }
    return (
        <>
            <h1 className="jkl-title">{title}</h1>
            <div className="jkl-spacing-24--top jkl-spacing-24--bottom">
                <p data-testid="blog-author">{author}</p>
                {publishDate && <p data-testid="blog-publishDate">{publishDate}</p>}
            </div>
        </>
    );
};
