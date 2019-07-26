import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

// @ts-ignore
import GettingStaredMarkdown from "!raw-loader!../../../../guides/GettingStarted.md";

const GettingStarted = () => {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={GettingStaredMarkdown} />
        </Layout>
    );
};

export default GettingStarted;
