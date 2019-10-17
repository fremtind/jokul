import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import PortalGuideMarkdown from "!raw-loader!../../../../guides/PortalGuide.md";

const GettingStarted = () => {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={PortalGuideMarkdown} />
        </Layout>
    );
};

export default GettingStarted;
