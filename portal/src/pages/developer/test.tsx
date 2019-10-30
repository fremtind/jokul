import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import TestGuideMarkdown from "!raw-loader!../../../../guides/TestGuide.md";

const GettingStarted = () => {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={TestGuideMarkdown} />
        </Layout>
    );
};

export default GettingStarted;
