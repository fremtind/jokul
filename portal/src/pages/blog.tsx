import { InfoBlock, NavCard } from "@fremtind/jkl-card-react";
import { motion } from "framer-motion";
import { graphql, Link, PageProps } from "gatsby";
import React, { FC } from "react";
import "./blog.scss";
import { Helmet } from "react-helmet";

const IndexPage: FC<PageProps<PageData>> = ({ data }) => {
    const posts = data.allMdx.nodes;

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="jkl-portal__main"
        >
            <Helmet>
                <title>Blogg | Jøkul Designsystem</title>
            </Helmet>
            <h1 className="jkl-title jkl-spacing-2xl--bottom">Blogg</h1>
            <p className="jkl-portal-paragraph">Velkommen til Jøkul — design­systemet til Fremtind.</p>
            <h2 className="jkl-heading-1 jkl-spacing-xl--top jkl-spacing-l--bottom">Alt fra bloggen</h2>
            <ul className="jkl-portal-blog__post-list">
                {posts.map((post) => {
                    const title = post.frontmatter.title || post.fields.path;
                    return (
                        <li key={post.fields.path} className="jkl-portal-blog__post">
                            <NavCard
                                component={Link}
                                title={title}
                                to={post.fields.path}
                                description={post.frontmatter.description || post.excerpt}
                            >
                                <InfoBlock>
                                    {post.frontmatter.publishDate} av {post.frontmatter.author}
                                </InfoBlock>
                            </NavCard>
                        </li>
                    );
                })}
            </ul>
        </motion.main>
    );
};

export default IndexPage;

type BlogPostSummary = {
    excerpt: string;
    fields: {
        path: string;
    };
    frontmatter: {
        publishDate: string;
        title: string;
        description: string;
        author: string;
    };
};

type PageData = {
    allMdx: {
        nodes: Array<BlogPostSummary>;
    };
};

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___publishDate], order: DESC },
      filter: { fileAbsolutePath: {regex: "/\\/portal\\/src\\/texts\\/blog\\/.*\\.mdx$/"} },
    ) {
      nodes {
        excerpt(pruneLength: 140)
        fields {
          path
        }
        frontmatter {
          title
          description
          author
          publishDate
        }
      }
    }
  }
`;
