"use client";

import type { BlogPostsQueryResult } from "@/sanity/types";
import { Card } from "@fremtind/jokul/card";
import { Link } from "@fremtind/jokul/link";
import { formatDate } from "@fremtind/jokul/utilities";
import NextLink from "next/link";

import { clsx } from "clsx";
import styles from "./ArticleCard.module.scss";

export const ArticleCard = (post: BlogPostsQueryResult[number]) => {
    return (
        <Card padding={"l"} variant={"outlined"} className={styles.articleCard}>
            <header>
                <h2 className={clsx("jkl-heading-1", styles.title)}>
                    <Link
                        as={NextLink}
                        href={`/blog/${post.slug?.current || ""}`}
                    >
                        {post.name}
                    </Link>
                </h2>
                <p className="date jkl-heading-2">
                    {formatDate(new Date(post.date))}
                </p>
            </header>
            <p className="jkl-body">{post.short_description}</p>
        </Card>
    );
};
