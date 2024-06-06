import type { WithOptionalChildren } from "@fremtind/jkl-core";
import { formatBytes } from "@fremtind/jkl-formatters-util";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import { SupportLabel } from "@fremtind/jkl-input-group-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FC, MouseEvent } from "react";
import { useFileInputContext } from "./internal/fileInputContext";
import { Thumbnail } from "./internal/Thumbnail";
import { FileInputFileState } from "./types";

export interface FileProps extends WithOptionalChildren {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    file?: File;
    supportLabel?: string;
    supportLabelType?: "help" | "error" | "warning" | "success";
    state?: FileInputFileState;
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const File: FC<FileProps> = (props) => {
    const { children, fileName, fileType, fileSize, path, file, supportLabel, supportLabelType, state, onRemove } =
        props;

    const id = useId("jkl-file-preview");
    const supportId = id + "-support";

    const context = useFileInputContext();
    const isInFileInputContext = context !== null;

    const TitleComponent = path ? "a" : "div";
    const f = (
        <div
            id={id}
            className={cn("jkl-file", {
                "jkl-file--error": supportLabelType === "error",
                "jkl-file--warning": supportLabelType === "warning",
            })}
        >
            <Thumbnail fileName={fileName} fileType={fileType} file={file} path={path} state={state} />
            <div className="jkl-file__file-info">
                <TitleComponent href={path} target={path ? "_blank" : undefined} className="jkl-file__title">
                    {fileName}
                </TitleComponent>
                <p className="jkl-file__description">
                    <span>{formatBytes(fileSize)}</span>
                    <span className="jkl-file__description-slot">{children}</span>
                </p>
            </div>
            {onRemove && (
                <IconButton onClick={onRemove} title={`Fjern ${fileName}`}>
                    <CloseIcon />
                </IconButton>
            )}
        </div>
    );

    if (isInFileInputContext) {
        return (
            <li>
                {f}
                {supportLabel && <SupportLabel id={supportId} label={supportLabel} labelType={supportLabelType} />}
            </li>
        );
    }

    return f;
};
