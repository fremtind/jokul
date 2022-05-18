import React, { FC } from "react";
import { Frontmatter } from "../../Header/useNavigationLinks";

export const BlogPageHeader: FC<Frontmatter> = ({ title, author, publishDate }) => {
    if (!author) {
        return null;
    }
    return (
        <>
            <h1 className="jkl-title">{title}</h1>
            <div className="jkl-spacing-l--top jkl-spacing-l--bottom">
                <p data-testid="blog-author">{author}</p>
                {publishDate && <p data-testid="blog-publishDate">{publishDate}</p>}
            </div>
        </>
    );
};
