import { formatBytes } from "@fremtind/jkl-formatters-util";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import { SupportLabel } from "@fremtind/jkl-input-group-react";
import { Loader } from "@fremtind/jkl-loader-react";
import { useId } from "@fremtind/jkl-react-hooks";
import React, { FC, MouseEvent } from "react";
import { FileUploadState } from "./FileUploaderBox";

interface FileUploaderPreviewProps {
    fileState: FileUploadState;
    onRemoveFile: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const FileUploaderPreview: FC<FileUploaderPreviewProps> = (props) => {
    const { fileState, onRemoveFile } = props;

    const id = useId("jkl-file-preview");
    const errorId = id + "_error";

    return (
        <div
            id={id}
            className={`jkl-file-uploader-preview ${fileState.validation ? "jkl-file-uploader-preview--invalid" : ""}`}
        >
            <div className="jkl-file-uploader-preview__info-wrapper">
                {!fileState.uploading && fileState.file.type.startsWith("image/") ? (
                    <img
                        className="jkl-file-uploader-preview__img"
                        src={URL.createObjectURL(fileState.file)}
                        alt={fileState.file.name}
                    />
                ) : (
                    <div className="jkl-file-uploader-preview__file-thumbnail">
                        {fileState.uploading ? (
                            <div>
                                <Loader variant="small" textDescription={"Laster opp filer"} />
                            </div>
                        ) : (
                            <div>{fileState.file.name.split(".")[fileState.file.name.split(".").length - 1]}</div>
                        )}
                    </div>
                )}
                <div className="jkl-file-uploader-preview__file-info">
                    <div className="jkl-file-uploader-preview__file-name">{fileState.file.name}</div>
                    <p>{formatBytes(fileState.file.size)}</p>
                </div>
                <IconButton onClick={onRemoveFile} className="jkl-file-uploader-preview__close-button">
                    <CloseIcon />
                </IconButton>
            </div>
            {fileState.validation && (
                <div className="jkl-file-uploader-preview__error-message">
                    <SupportLabel id={errorId} errorLabel={fileState.validation.message} />
                </div>
            )}
        </div>
    );
};
