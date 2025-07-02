"use client";

import type { BlogPostsQueryResult } from "@/sanity/types";
import { Flex } from "@fremtind/jokul/flex";
import { Link } from "@fremtind/jokul/link";
import { formatDate } from "@fremtind/jokul/utilities";
import NextLink from "next/link";

import styles from "./blog.module.scss";

export const ArticleCard = (post: BlogPostsQueryResult[number]) => {
    return (
        <Flex
            className={styles.articleCard}
            as="article"
            gap={16}
            direction="column"
        >
            <Flex direction="column" gap={12}>
                <h2 className="jkl-heading-1">
                    <Link
                        as={NextLink}
                        href={`/blog/${post.slug?.current || ""}`}
                    >
                        {post.name}
                    </Link>
                </h2>
                <p className={styles.date}>{formatDate(new Date(post.date))}</p>
            </Flex>
            <p className="jkl-body">{post.short_description}</p>
        </Flex>
    );
};
