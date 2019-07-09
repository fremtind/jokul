import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout } from "../../components/layout";
import { Example } from "../../components/example";
import { renderer } from "../../presentation/markdownRenderer";
import "./example.scss";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-dropdown/README.md";

// @ts-ignore
import DropdownExampleCode from "!raw-loader!../../examples/DropdownExample";
import { DropdownExample } from "../../examples/DropdownExample";

export default function Button() {
    return (
        <Layout>
            <h2 style={{ margin: "3rem 0" }} className="jkl-h1">
                Nedtrekksliste
            </h2>
            <Example exampleComponent={<DropdownExample />} exampleCode={DropdownExampleCode} />
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
        </Layout>
    );
}
