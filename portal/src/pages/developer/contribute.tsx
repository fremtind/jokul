import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import ContributeMarkdown from "!raw-loader!../../../../CONTRIBUTING.md";
import PullRequestGuideMarkdown from "!raw-loader!../../../../guides/PullRequestGuide.md";
import CodeGuideMarkdown from "!raw-loader!../../../../guides/CodeGuide.md";
import "./contribute.scss";

export default function Contribute() {
    return (
        <Layout isComponentPage>
            <div className="portal-contribute">
                <section className="portal-contribute__section portal-contribute__section-1">
                    <ReactMarkdown renderers={renderer} source={ContributeMarkdown} />
                </section>
                <section className="portal-contribute__section portal-contribute__section-2">
                    <ReactMarkdown renderers={renderer} source={CodeGuideMarkdown} />
                </section>
                <section className="portal-contribute__section portal-contribute__section-3">
                    <ReactMarkdown renderers={renderer} source={PullRequestGuideMarkdown} />
                </section>
            </div>
        </Layout>
    );
}
