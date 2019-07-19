import React from "react";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout/Layout";
import { Example } from "../../components/Example/Example";
import { Changelog } from "../../components/Changelog/Changelog";
import { renderer } from "../../presentation/markdownRenderer";

/* Import readme fil with !raw-loader! */
// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-datepicker/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-datepicker/CHANGELOG.md";
/* Import code to be rendered as example */
import { datepickerExample } from "../../examples/DatepickerExample";
/* Import components used in the example, and expose them in an object */
import { DatePicker } from "@fremtind/jkl-datepicker-react";
import "@fremtind/jkl-datepicker/datepicker.min.css";
// @ts-ignore
import datepickerType from "!raw-loader!@fremtind/jkl-datepicker-react/build/DatePicker.d.ts";

export default function DatePickerPage() {
    return (
        <Layout
            title="Datovelger"
            mainExample={
                <Example exampleComponents={{ DatePicker }} exampleCode={datepickerExample} type={datepickerType} />
            }
        >
            <div style={{ margin: "2rem 0" }}>
                <ReactMarkdown renderers={renderer} source={readmeContents} />
            </div>
            <Changelog changelog={changelog} />
        </Layout>
    );
}
