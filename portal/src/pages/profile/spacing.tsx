import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import markdown from "!raw-loader!../../texts/profile/spacing.md";

export default function Spacing() {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={markdown} />
        </Layout>
    );
}
