import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components/Layout/Layout";
import { renderer } from "../../presentation/markdownRenderer";
// @ts-ignore
import markdown from "!raw-loader!../../texts/core/pattern.md";

export default function Pattern() {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={markdown} />
        </Layout>
    );
}
