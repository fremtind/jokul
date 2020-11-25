import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Checkbox } from "@fremtind/jkl-checkbox-react";
import { FormatProvider } from "../Typography";

type Tag =
    | "skjema"
    | "bilder"
    | "tabell"
    | "tekstinnhold"
    | "media"
    | "modal"
    | "innlogging"
    | "animasjon"
    | "navigasjon";

interface MDXNode {
    id: string;
    slug: string;
    frontmatter: {
        title: string;
        tags: Tag[];
        wcagRules: string[];
    };
    body: string;
}

export const UU = () => {
    const data = useStaticQuery<{
        allMdx: {
            nodes: MDXNode[];
        };
    }>(graphql`
        {
            allMdx(filter: { fileAbsolutePath: { regex: "/.*/texts/uu/.*/" } }) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        tags
                        wcagRules
                    }
                    fields {
                        waduuu
                    }
                    body
                }
            }
        }
    `);

    const availableForTags: Tag[] = useMemo(() => {
        if (!data) {
            return [];
        }

        const tagsForFilter = data.allMdx.nodes.map((node) => node.frontmatter.tags);

        // create a unique array of tags
        return Array.from(new Set(tagsForFilter.flat()));
    }, [data]);

    console.log(availableForTags);

    return (
        <>
            <h2>Velg innhold</h2>

            {availableForTags.map((tag) => (
                <Checkbox name={tag} key={tag}>
                    {tag.toUpperCase()}
                </Checkbox>
            ))}

            {data &&
                data?.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <FormatProvider>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </FormatProvider>
                    </article>
                ))}
        </>
    );
};
