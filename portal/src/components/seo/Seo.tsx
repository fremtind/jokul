import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment } from "react";

interface Props {
    title?: string;
}

export const Seo: React.FC<Props> = ({ title }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `,
    );

    const metaDescription: string = site.siteMetadata.description;
    const siteTitle: string = site.siteMetadata.title;
    const pageTitle: string =
        title && siteTitle ? `${title} | ${siteTitle}` : title || siteTitle;

    return (
        <Fragment>
            <title id="head-title">{pageTitle}</title>
            <meta
                id="description"
                name="description"
                content={metaDescription}
            />
            <meta id="twitter:card" name="twitter:card" content="summary" />
            <meta id="twitter:title" name="twitter:title" content={pageTitle} />
            <meta
                id="twitter:description"
                name="twitter:description"
                content={metaDescription}
            />
            <meta id="og:title" name="og:title" content={pageTitle} />
            <meta
                id="og:description"
                name="og:description"
                content={metaDescription}
            />
            <meta id="og:type" name="og:type" content="website" />
        </Fragment>
    );
};
