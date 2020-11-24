import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { FormatProvider } from "../Typography";
import { Checkbox } from "@fremtind/jkl-checkbox-react";

export const UU = () => {
    const data = useStaticQuery(graphql`
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

    const tags: string[] = useMemo(() => {
        if (!data) {
            return [];
        }

        return Array.from(new Set(data.allMdx.nodes.map((node) => node.frontmatter.tags).flat()));
    }, [data]);

    console.log(tags);

    return (
        <>
            <h2>Velg innhold</h2>

            {tags.map((tag) => (
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
