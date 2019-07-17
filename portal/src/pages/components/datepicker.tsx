import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";
import { Example } from "../../components/Example";
import { renderer } from "../../presentation/markdownRenderer";

/* Import readme fil with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-datepicker/README.md";
/* Import code to be rendered as example */
import { datepickerExample } from "../../examples/DatepickerExample";
/* Import components used in the example, and expose them in an object */
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";

export default function Button() {
    return (
        <Layout>
            <h2 className="jkl-h1 portal-content__title">Datovelger</h2>
            <Example exampleComponents={{ DatePicker }} exampleCode={datepickerExample} />
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
        </Layout>
    );
}
