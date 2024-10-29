import { InfoBlock, NavCard } from "@fremtind/jkl-card-react";
import { type Blog, type BlogTag, type User } from "@org/cms";
import { formatDate } from "payload/dist/admin/utilities/formatDate";
import React, { type FC } from "react";

export const BlogCard: FC<Blog> = ({
    title,
    slug,
    ingress,
    id,
    sections,
    tag,
    author,
    published_date,
    ...rest
}) => {
    return (
        <article>
            <NavCard
                padding={"16"}
                href={`/blogg/${slug}`}
                title={title}
                tag={{
                    type: (tag as BlogTag).type ?? undefined,
                    text: (tag as BlogTag).label,
                }}
                description={ingress}
            >
                <InfoBlock>
                    {(author as User).name} <br />{" "}
                    {formatDate(published_date ?? "", "yyyy.MM.dd")}
                </InfoBlock>
            </NavCard>
        </article>
    );
};
