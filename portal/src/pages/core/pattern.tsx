import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import markdown from "!raw-loader!../../texts/core/pattern.md";

export default function Pattern() {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={markdown} />
        </Layout>
    );
}
