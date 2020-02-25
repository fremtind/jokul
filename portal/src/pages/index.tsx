import React from "react";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";
import { jokulRenderer } from "../presentation/markdownRenderer";
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
import "@fremtind/jkl-core/core.min.css";
import "./style.scss";

const IndexPage = () => (
    <Layout>
        <main className="portal-content__main">
            <ReactMarkdown renderers={jokulRenderer} source={frontPageMarkdown} />
        </main>
    </Layout>
);

export default IndexPage;
