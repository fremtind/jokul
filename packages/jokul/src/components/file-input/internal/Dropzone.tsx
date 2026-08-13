import React from "react";
import { Button } from "../../button/Button.js";
import { UploadIcon } from "../../icon/icons/UploadIcon.jsx";

type DropzoneProps = {
    buttonText: string;
    "data-drag-over"?: boolean;
    multiple: boolean;
};

export const Dropzone = ({ buttonText, multiple, ...rest }: DropzoneProps) => (
    <div {...rest} className="jkl-file-input__dropzone" aria-hidden="true">
        <div className="jkl-file-input__call-to-action">
            <Button
                as="div"
                variant="secondary"
                icon={<UploadIcon aria-hidden="true" />}
                className="jkl-file-input__button"
            >
                {buttonText}
            </Button>

            <span className="jkl-file-input__dropzone-text">
                {multiple ? "eller slipp filer her" : "eller slipp fil her"}
            </span>
        </div>
    </div>
);
