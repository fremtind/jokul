import cn from "classnames";
import React, { FC, MouseEvent } from "react";
import { TrashCanIcon, SuccessIcon } from "../../components/icon/index.js";
import { IconButton } from "../../components/icon-button/IconButton.js";
import { SupportLabel } from "../../components/input-group/SupportLabel.js";
import { type WithOptionalChildren } from "../../core/types.js";
import { useId } from "../../hooks/useId/useId.js";
import { formatBytes } from "../../utilities/formatters/bytes/formatBytes.js";
import { useFileInputContext } from "./internal/fileInputContext.js";
import { Thumbnail } from "./internal/Thumbnail.js";
import { FileInputFileState } from "./types.js";

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
    const {
        children,
        fileName,
        fileType,
        fileSize,
        path,
        file,
        supportLabel,
        supportLabelType,
        state,
        onRemove,
    } = props;

    const id = useId("jkl-file-preview");
    const supportId = id + "-support";

    const context = useFileInputContext();

    const Component = path ? "a" : "div";

    const hasErrorOrWarning =
        supportLabelType === "error" || supportLabelType === "warning";
    const hasSuccess = supportLabelType === "success";

    const renderFeedbackElement = () => {
        if (!hasErrorOrWarning && !hasSuccess) {
            return (
                <SupportLabel
                    className="jkl-file__support-label jkl-body"
                    id={supportId}
                    label={supportLabel}
                    labelType={supportLabelType}
                />
            );
        }

        if (hasSuccess)
            return (
                <SuccessIcon
                    variant="small"
                    aria-label="Filen ble lastet opp uten feil"
                />
            );

        return null;
    };

    const fileComponent = (
        <div id={id} className="jkl-file">
            <Component
                className={cn("jkl-file__content", {
                    "jkl-file__content--error": supportLabelType === "error",
                    "jkl-file__content--warning":
                        supportLabelType === "warning",
                })}
                href={path}
                target={path ? "_blank" : undefined}
            >
                <Thumbnail
                    fileName={fileName}
                    fileType={fileType}
                    file={file}
                    path={path}
                    state={state}
                >
                    {children}
                </Thumbnail>
                <div>
                    <p className="jkl-file__name">{fileName}</p>
                    <p className="jkl-file__description">
                        <span>{formatBytes(fileSize)}</span>
                        {renderFeedbackElement()}
                    </p>
                    {supportLabel && hasErrorOrWarning && (
                        <SupportLabel
                            className="jkl-file__support-label"
                            id={supportId}
                            label={supportLabel}
                            labelType={supportLabelType}
                        />
                    )}
                </div>
            </Component>
            {onRemove && (
                <IconButton
                    className="jkl-file__delete"
                    onClick={onRemove}
                    title={`Fjern ${fileName}`}
                >
                    <TrashCanIcon />
                </IconButton>
            )}
        </div>
    );

    return context ? <li>{fileComponent}</li> : fileComponent;
};