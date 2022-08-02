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
    const pageTitle: string = title && siteTitle ? `${title} | ${siteTitle}` : title || siteTitle;

    return (
        <Fragment>
            <title>{pageTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="og:title" content={pageTitle} />
            <meta name="og:description" content={metaDescription} />
            <meta name="og:type" content="website" />
        </Fragment>
    );
};
