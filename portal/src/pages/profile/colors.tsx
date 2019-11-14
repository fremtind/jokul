import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";

import markdown from "!raw-loader!../../texts/profile/colors.md";
import "./colors.scss";

export default function Colors() {
    return (
        <Layout>
            <ReactMarkdown renderers={renderer} source={markdown} />
            <div className="demo-wrapper">
                {[...Array(14)].map((_, idx) => (
                    <div key={idx} className={`demo-color--${idx + 1}`} />
                ))}
            </div>
        </Layout>
    );
}
