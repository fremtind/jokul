import React from "react";
import { DevExample } from "../../../doc-utils";
import { FileUploaderExample, fileUploaderExampleCode, fileUploaderExampleKnobs } from "./FileUploaderExample";
import "../../file-uploader/file-uploader.scss";
import "../../button/button.scss";
import "../../icons/icons.scss";
import "../../icon-button/icon-button.scss";

export default function Example() {
    return (
        <DevExample
            component={FileUploaderExample}
            codeExample={fileUploaderExampleCode}
            knobs={fileUploaderExampleKnobs}
        />
    );
}
