import React from "react";
import ReactMarkdown from "react-markdown";

import { Layout, Changelog } from "../../components";
import { renderer } from "../../presentation/markdownRenderer";
import { DatepickerExample } from "../../examples";

// @ts-ignore
import readmeContents from "!raw-loader!@fremtind/jkl-datepicker/README.md";
// @ts-ignore
import changelog from "!raw-loader!@fremtind/jkl-datepicker/CHANGELOG.md";
// @ts-ignore
import changelogReact from "!raw-loader!@fremtind/jkl-datepicker-react/CHANGELOG.md";

export default function DatePickerPage() {
    return (
        <Layout title="Datovelger" mainExample={<DatepickerExample />}>
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </Layout>
    );
}
