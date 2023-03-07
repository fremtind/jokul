import type { WithChildren } from "@fremtind/jkl-core";
import React, { FC } from "react";

export interface FileUploaderProps extends WithChildren {
    className?: string;
    id?: string;
}

export const FileUploader: FC<FileUploaderProps> = ({ children, ...rest }) => <div {...rest}>{children}</div>;
