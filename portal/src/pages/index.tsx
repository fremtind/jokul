import React from "react";
import { Layout } from "../components";
import ReactMarkdown from "react-markdown";
import { renderer } from "../presentation/markdownRenderer";
// @ts-ignore
import frontPageMarkdown from "!raw-loader!../texts/FrontPage.md";
import "@fremtind/jkl-core/core.min.css";

const IndexPage = () => (
    <Layout>
        <ReactMarkdown renderers={renderer} source={frontPageMarkdown} />
    </Layout>
);

export default IndexPage;
