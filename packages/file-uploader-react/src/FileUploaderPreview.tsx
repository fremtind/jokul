import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CloseIcon, WarningIcon } from "@fremtind/jkl-icons-react";
import { Loader } from "@fremtind/jkl-loader-react";
import React, { MouseEvent } from "react";
import { bytesToReadable, FileUploadState } from "./FileUploaderBox";

export function FileUploaderPreview({
    fileState,
    onRemoveFile,
}: {
    fileState: FileUploadState;
    onRemoveFile: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
    return (
        <div
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
                    <p>{bytesToReadable(fileState.file.size)}</p>
                </div>
                <IconButton onClick={onRemoveFile} className="jkl-file-uploader-preview__close-button" type="button">
                    <CloseIcon />
                </IconButton>
            </div>
            {fileState.validation && (
                <div className="jkl-file-uploader-preview__error-message">
                    <WarningIcon /> {fileState.validation.message}
                </div>
            )}
        </div>
    );
}
