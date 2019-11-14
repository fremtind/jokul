import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import principleMarkdown from "!raw-loader!../../texts/core/principle.md";

export default function Principle() {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={principleMarkdown} />
        </Layout>
    );
}
