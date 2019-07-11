import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout } from "../../components/Layout";
import { Example } from "../../components/Example";
import { renderer } from "../../presentation/markdownRenderer";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-dropdown/README.md";

// @ts-ignore
import DropdownExampleCode from "!raw-loader!../../examples/DropdownExample";
import { DropdownExample } from "../../examples/DropdownExample";

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Nedtrekksliste</h2>
            <Example exampleComponent={<DropdownExample />} exampleCode={DropdownExampleCode} />
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
        </Layout>
    );
}
