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

    const C = isInFileInputContext ? "li" : path ? "a" : "div";

    return (
        <>
            <C
                id={id}
                key={fileName}
                className={cn("jkl-file", {
                    "jkl-file--error": supportLabelType === "error",
                    "jkl-file--warning": supportLabelType === "warning",
                })}
                href={path}
                target={path ? "_blank" : undefined}
            >
                <Thumbnail fileName={fileName} fileType={fileType} file={file} path={path} state={state} />
                <div className="jkl-file__file-info">
                    <div className="jkl-file__title">{fileName}</div>
                    <p className="jkl-file__description">
                        <span>{formatBytes(fileSize)}</span>
                        {children}
                    </p>
                </div>
                {onRemove && (
                    <IconButton onClick={onRemove} title={`Fjern ${fileName}`}>
                        <CloseIcon />
                    </IconButton>
                )}
            </C>
            {supportLabel && <SupportLabel id={supportId} label={supportLabel} labelType={supportLabelType} />}
        </>
    );
};
