import React from "react";
import { DevExample } from "../../../doc-utils";
import { FileUploaderExample, fileUploaderExampleCode, fileUploaderExampleKnobs } from "./FileUploaderExample";
import "../../file-uploader/file-uploader.scss";
import "../../button/button.scss";
import "../../icon-button/icon-button.scss";
import "../../icons/icons.scss";
import "../../input-group/input-group.scss";
import "../../loader/loader.scss";

export default function Example() {
    return (
        <DevExample
            component={FileUploaderExample}
            codeExample={fileUploaderExampleCode}
            knobs={fileUploaderExampleKnobs}
        />
    );
}
