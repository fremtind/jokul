import {
    ErrorTag,
    InfoTag,
    SuccessTag,
    Tag,
    WarningTag,
} from "@fremtind/jkl-tag-react";
import { formatDate } from "payload/dist/admin/utilities/formatDate";
import type { Blog, BlogTag, User } from "payload/generated-types";
import React, { type FC } from "react";
import { renderPageSection } from "~/block-renderers/page-sections";
import { TableOfContents } from "~/components/table-of-contents";
import { useFadingContent } from "~/hooks";
import { AnimatedPageWrapper } from "~/page-templates/AnimatedPageWrapper";

export const BlogPageTemplate: FC<Blog> = ({
    title,
    ingress,
    sections,
    tag,
    author,
    published_date,
    ...rest
}) => {
    useFadingContent();

    const tags = {
        tag: Tag,
        info: InfoTag,
        warning: WarningTag,
        success: SuccessTag,
        error: ErrorTag,
    };

    const TagComponent = tags[(tag as BlogTag).type || "tag"];

    return (
        <AnimatedPageWrapper className={"jkl-portal-blog-page"} {...rest}>
            <article>
                <span
                    className={"jkl-portal-blog-visually-hidden"}
                    id={"header-label"}
                    aria-hidden={true}
                >
                    Overskrift og ingress
                </span>
                <section aria-labelledby={"header-label"}>
                    <TagComponent>
                        <span className={"jkl-portal-blog-visually-hidden"}>
                            Kategori
                        </span>
                        {(tag as BlogTag).label}
                    </TagComponent>
                    <h1 className={"jkl-portal-blog-page-heading"}>{title}</h1>
                    <p className={"jkl-portal-blog-page-ingress"}>{ingress}</p>
                    <div className={"jkl-portal-blog-meta"}>
                        <div className={"jkl-portal-blog-meta__date"}>
                            <span className={"jkl-portal-blog-visually-hidden"}>
                                Publisert dato
                            </span>
                            {formatDate(published_date ?? "", "yyyy.MM.dd")}
                        </div>
                        <span className={"jkl-portal-blog-visually-hidden"}>
                            Forfatter
                        </span>
                        {(author as User).name}
                    </div>
                </section>
                <div className={"jkl-portal-blog-main"}>
                    <hr
                        className={"jkl-portal-blog-divider"}
                        aria-hidden={true}
                    />
                    <span
                        className={"jkl-portal-blog-visually-hidden"}
                        id={"main-label"}
                        aria-hidden={true}
                    >
                        Bloggpost
                    </span>
                    <section
                        aria-labelledby={"main-label"}
                        className={"jkl-portal-blog-main__content"}
                    >
                        {sections.map((section) => {
                            return renderPageSection(section);
                        })}
                    </section>
                    <section className={"jkl-portal-blog-main__toc"}>
                        <TableOfContents />
                    </section>
                </div>
            </article>
        </AnimatedPageWrapper>
    );
};
