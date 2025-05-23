import clsx from "clsx";
import React, { type FC } from "react";
import type { WithOptionalChildren } from "../../../core/types.js";
import type { FileInputFileState } from "../types.js";

export interface ThumbnailProps extends WithOptionalChildren {
    fileName: string;
    fileType: string;
    path?: string;
    file?: File;
    state?: FileInputFileState;
}

export const Thumbnail: FC<ThumbnailProps> = (props) => {
    const { fileName, fileType, path, file, state, children } = props;

    const classNames = clsx("jkl-file__thumbnail", {
        "jkl-file__thumbnail--selected": state === "SELECTED",
        "jkl-file__thumbnail--uploading": state === "UPLOADING",
    });

    if (fileType.startsWith("image/")) {
        return (
            <div className="jkl-file__thumbnail-wrapper">
                <img
                    className={classNames}
                    src={file ? URL.createObjectURL(file) : path}
                    alt=""
                />
                {children}
            </div>
        );
    }

    return (
        <div className={classNames}>
            <p>{fileName.split(".").at(-1)}</p>
        </div>
    );
};
