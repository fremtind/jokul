import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
// @ts-ignore
import ContributeMarkdown from "!raw-loader!../../../../CONTRIBUTING.md";
// @ts-ignore
import PullRequestGuideMarkdown from "!raw-loader!../../../../guides/PullRequestGuide.md";
// @ts-ignore
import CodeGuideMarkdown from "!raw-loader!../../../../guides/CodeGuide.md";
import "./contribute.scss";

export default function Contribute() {
    return (
        <Layout isComponent>
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
