import type { WithChildren } from "@fremtind/jkl-core";
import cn from "classnames";
import React, { FC } from "react";

export interface FileUploaderPreviewListItemProps extends WithChildren {
    className?: string;
    id?: string;
}

export const FileUploaderPreviewListItem: FC<FileUploaderPreviewListItemProps> = ({ className, children }) => (
    <li className={cn("jkl-file-uploader-previews__item", className)}>{children}</li>
);
