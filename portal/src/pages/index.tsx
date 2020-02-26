import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../components";
import { jokulRenderer } from "../presentation/markdownRenderer";
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
import "@fremtind/jkl-core/core.min.css";
import "./style.scss";

const IndexPage = () => (
    <Layout isFrontpage>
        <ReactMarkdown renderers={jokulRenderer} source={frontPageMarkdown} />
    </Layout>
);

export default IndexPage;
