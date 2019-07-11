import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout } from "../../components/Layout";
import { Example } from "../../components/Example";
import { renderer } from "../../presentation/markdownRenderer";

/* Import readme file of component here with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-button/README.md";

/* Import each example here both with and without !raw-loader! */
/* These are then used with the Example-component to show an example with expandable code */
// @ts-ignore
import ButtonExampleCode from "!raw-loader!../../examples/ButtonExample";
import { ButtonExample } from "../../examples/ButtonExample";

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Knapper</h2>
            <Example exampleComponent={<ButtonExample />} exampleCode={ButtonExampleCode} />
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
        </Layout>
    );
}
