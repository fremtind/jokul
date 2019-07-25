import React from "react";
import ReactMarkdown from "react-markdown";
import WebComponentInfo from "../../components/Info/WebComponentInfo";
import { ComponentLayout, Changelog } from "../../components";
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
        <ComponentLayout title="Datovelger" mainExample={<DatepickerExample />}>
            <WebComponentInfo />
            <ReactMarkdown renderers={renderer} source={readmeContents} />
            <Changelog changelog={changelog} changelogReact={changelogReact} />
        </ComponentLayout>
    );
}
