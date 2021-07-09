import React from "react";
import { Frontmatter } from "../../Header/useNavigationLinks";

export function BlogPageHeader({ title, author, publishDate }: Frontmatter) {
    if (!author) {
        return null;
    }
    return (
        <>
            <h1 className="jkl-title">{title}</h1>
            <div className="jkl-spacing--top-1 jkl-spacing--bottom-1">
                <p data-testid="blog-author">{author}</p>
                {publishDate && <p data-testid="blog-publishDate">{publishDate}</p>}
            </div>
        </>
    );
}
