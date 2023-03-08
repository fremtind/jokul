import { formatBytes } from "@fremtind/jkl-formatters-util";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import { SupportLabel } from "@fremtind/jkl-input-group-react";
import { Loader } from "@fremtind/jkl-loader-react";
import { useId } from "@fremtind/jkl-react-hooks";
import cn from "classnames";
import React, { FC, MouseEvent } from "react";

export interface FileUploaderPreviewProps {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    file?: File;
    helpLabel?: string;
    errorLabel?: string;
    isUploading?: boolean;
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const FileUploaderPreview: FC<FileUploaderPreviewProps> = (props) => {
    const { fileName, fileType, fileSize, path, file, helpLabel, errorLabel, isUploading, onRemove } = props;

    const id = useId("jkl-file-preview");
    const supportId = id + "support";

    const C = path ? "a" : "div";

    return (
        <C
            id={id}
            className={cn("jkl-file-uploader-preview", { "jkl-file-uploader-preview--invalid": errorLabel })}
            href={path}
            target={path ? "_blank" : undefined}
        >
            <div className="jkl-file-uploader-preview__info-wrapper">
                {!isUploading && fileType.startsWith("image/") ? (
                    <img
                        className="jkl-file-uploader-preview__img"
                        src={file ? URL.createObjectURL(file) : path}
                        alt=""
                    />
                ) : (
                    <div className="jkl-file-uploader-preview__file-thumbnail">
                        {isUploading ? (
                            <div>
                                <Loader variant="small" textDescription="Laster opp" />
                            </div>
                        ) : (
                            <div>{fileName.split(".").at(-1)}</div>
                        )}
                    </div>
                )}
                <div className="jkl-file-uploader-preview__file-info">
                    <div className="jkl-file-uploader-preview__file-name">{fileName}</div>
                    <p className="jkl-file-uploader-preview__file-size">{formatBytes(fileSize)}</p>
                </div>
                {onRemove && (
                    <IconButton
                        onClick={onRemove}
                        title={`Fjern ${fileName}`}
                        className="jkl-file-uploader-preview__close-button"
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            </div>
            {(helpLabel || errorLabel) && (
                <div className="jkl-file-uploader-preview__error-message">
                    <SupportLabel id={supportId} helpLabel={helpLabel} errorLabel={errorLabel} />
                </div>
            )}
        </C>
    );
};
