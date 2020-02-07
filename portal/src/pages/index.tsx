import React from "react";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";
import { jokulRenderer } from "../presentation/markdownRenderer";
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
import "@fremtind/jkl-core/core.min.css";
import "./style.scss";

const IndexPage = () => (
    <Layout>
        <div className="portal-main__content">
            <ReactMarkdown renderers={jokulRenderer} source={frontPageMarkdown} />
        </div>
    </Layout>
);

export default IndexPage;
