import React, {type FC} from "react";
import type {WithOptionalChildren} from "../../../core/types.js";

export interface ThumbnailProps extends WithOptionalChildren {
    fileName: string;
    fileType: string;
    path?: string;
    file?: File;
}

export const Thumbnail: FC<ThumbnailProps> = (props) => {
    const {fileName, fileType, path, file, children} = props;

    if (fileType.startsWith("image/")) {
        return (
            <div className="jkl-file__thumbnail">
                <img
                    src={file ? URL.createObjectURL(file) : path}
                    alt={`Bilde av ${fileName}`}
                />
                {children}
            </div>
        );
    }

    return (
        <div className="jkl-file__thumbnail">
            <p>{fileName.split(".").at(-1)}</p>
        </div>
    );
};
