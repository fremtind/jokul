import React from "react";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";
import { jokulRenderer } from "../presentation/markdownRenderer";
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
import HeroMarkdown from "!raw-loader!../texts/frontpage/Hero.md";
import "@fremtind/jkl-core/core.min.css";
import "./style.scss";

const IndexPage = () => (
    <Layout showFooter={false}>
        <img className="portal-main__background" src="mountains.jpg" alt="Fjell illustasjon" />
        <div className="portal-main__hero">
            <ReactMarkdown renderers={jokulRenderer} source={HeroMarkdown} />{" "}
        </div>
        <div className="portal-main__content">
            <ReactMarkdown renderers={jokulRenderer} source={frontPageMarkdown} />
        </div>
    </Layout>
);

export default IndexPage;
