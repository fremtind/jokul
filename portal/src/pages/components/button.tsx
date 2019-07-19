import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout/Layout";
import { Example } from "../../components/Example/Example";
import { Changelog } from "../../components/Changelog/Changelog";
import { renderer } from "../../presentation/markdownRenderer";

/* Import readme fil with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-button/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-button/CHANGELOG.md";
/* Import code to be rendered as example */
import { buttonExample } from "../../examples/ButtonExample";
/* Import components used in the example, and expose them in an object */
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";
// @ts-ignore
import buttonType from "!raw-loader!@fremtind/jkl-button-react/build/Button.d.ts";

export default function ButtonPage() {
    return (
        <Layout
            title="Knapper"
            mainExample={
                <Example
                    exampleComponents={{ PrimaryButton, SecondaryButton, TertiaryButton }}
                    exampleCode={buttonExample}
                    type={buttonType}
                />
            }
        >
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
            <Changelog changelog={changelog} />
        </Layout>
    );
}
