import { formatBytes } from "@fremtind/jkl-formatters-util";
import { IconButton } from "@fremtind/jkl-icon-button-react";
import { CloseIcon } from "@fremtind/jkl-icons-react";
import { SupportLabel } from "@fremtind/jkl-input-group-react";
import { Loader } from "@fremtind/jkl-loader-react";
import { useId } from "@fremtind/jkl-react-hooks";
import React, { FC, MouseEvent } from "react";

export interface FileUploaderPreviewProps {
    file: File;
    isUploading: boolean;
    errorLabel?: string;
    onRemove: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const FileUploaderPreview: FC<FileUploaderPreviewProps> = (props) => {
    const { file, errorLabel, isUploading, onRemove } = props;

    const id = useId("jkl-file-preview");
    const errorId = id + "_error";

    return (
        <div id={id} className={`jkl-file-uploader-preview ${errorLabel ? "jkl-file-uploader-preview--invalid" : ""}`}>
            <div className="jkl-file-uploader-preview__info-wrapper">
                {!isUploading && file.type.startsWith("image/") ? (
                    <img className="jkl-file-uploader-preview__img" src={URL.createObjectURL(file)} alt={file.name} />
                ) : (
                    <div className="jkl-file-uploader-preview__file-thumbnail">
                        {isUploading ? (
                            <div>
                                <Loader variant="small" textDescription={"Laster opp filer"} />
                            </div>
                        ) : (
                            <div>{file.name.split(".")[file.name.split(".").length - 1]}</div>
                        )}
                    </div>
                )}
                <div className="jkl-file-uploader-preview__file-info">
                    <div className="jkl-file-uploader-preview__file-name">{file.name}</div>
                    <p>{formatBytes(file.size)}</p>
                </div>
                <IconButton onClick={onRemove} className="jkl-file-uploader-preview__close-button">
                    <CloseIcon />
                </IconButton>
            </div>
            {errorLabel && (
                <div className="jkl-file-uploader-preview__error-message">
                    <SupportLabel id={errorId} errorLabel={errorLabel} />
                </div>
            )}
        </div>
    );
};
