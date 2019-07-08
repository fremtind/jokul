// @ts-ignore
import ButtonExampleCode from "!raw-loader!../../components/ButtonExample";
// @ts-ignore
import ButtonMarkdown from "!raw-loader!@fremtind/jkl-button/README.md";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ButtonExample } from "../../components/ButtonExample";
import Layout from "../../components/layout";
import { PrismHighlightedCode } from "../../components/PrismHighlightedCode";
import { renderer } from "../../presentation/markdownRenderer";

export default function Button() {
    return (
        <Layout>
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={ButtonMarkdown} />
            </div>
            <div>
                <ButtonExample />

                <PrismHighlightedCode>{ButtonExampleCode}</PrismHighlightedCode>
            </div>
        </Layout>
    );
}
