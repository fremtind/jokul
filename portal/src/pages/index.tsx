import React from "react";
import Image, { FluidObject } from "gatsby-image";
import { graphql } from "gatsby";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";
import { renderer } from "../presentation/markdownRenderer";
// @ts-ignore
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
// @ts-ignore
import HeroMarkdown from "!raw-loader!../texts/frontpage/Hero.md";
import "@fremtind/jkl-core/core.min.css";
import "./style.scss";

interface Query {
    data: {
        file: {
            childImageSharp: {
                fluid: FluidObject;
            };
        };
    };
}

const IndexPage = ({ data }: Query) => (
    <Layout>
        <Image className="portal-main__background" fluid={data.file.childImageSharp.fluid} alt="Fjell illustasjon" />
        <div className="portal-main__hero">
            <ReactMarkdown renderers={renderer} source={HeroMarkdown} />{" "}
        </div>
        <div className="portal-main__content">
            <ReactMarkdown renderers={renderer} source={frontPageMarkdown} />
        </div>
    </Layout>
);

export const query = graphql`
  query {
    file(absolutePath: {
      regex: "/\\/images\\/mountains\\.jpg/"
    }) {
      childImageSharp {
        fluid(maxWidth: 10000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
