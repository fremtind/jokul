import type { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";

export interface FileUploaderPreviewListProps extends WithChildren {
    className?: string;
    id?: string;
}

export const FileUploaderPreviewList: FC<FileUploaderPreviewListProps> = ({ className, children }) => (
    <ul className={cn("jkl-file-uploader-previews", className)}>{children}</ul>
);
