import clsx from "clsx";
import React, {type ComponentProps, type FC, type MouseEvent, useId,} from "react";
import {TrashCanIcon} from "../../components/icon/index.js";
import {SupportLabel} from "../../components/input-group/SupportLabel.js";
import {formatBytes} from "../../utilities/formatters/bytes/formatBytes.js";
import {Button} from "../button/index.js";
import {Link} from "../link/index.js";
import {useFileInputContext} from "./internal/fileInputContext.js";
import type {FileInputFileState} from "./types.js";

export type FileProps = {
    fileName: string;
    fileType: string;
    fileSize: number;
    path?: string;
    file?: File;
    supportLabel?: string;
    supportLabelType?: "help" | "error" | "warning" | "success";
    state?: FileInputFileState;
    onRemove?: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: "list" | "card";
};

export const File: FC<FileProps & ComponentProps<"div">> = (props) => {
    const {
        children,
        className,
        fileName,
        fileType,
        fileSize,
        path,
        file,
        supportLabel,
        supportLabelType,
        state,
        onRemove,
        variant = "list",
        ...rest
    } = props;

    const id = `jkl-file-preview-${useId()}`;
    const supportId = `${id}-support`;

    const context = useFileInputContext();

    const hasErrorOrWarning =
        supportLabelType === "error" || supportLabelType === "warning";
    const hasSuccess = supportLabelType === "success";

    const imageSrc =
        fileType.startsWith("image/") &&
        (file ? URL.createObjectURL(file) : path);

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

        return null;
    };

    const fileComponent = (
        <div
            id={id}
            className={clsx(className, "jkl-file", `jkl-file--${variant}`)}
            {...rest}
        >
            {imageSrc ? (
                <img src={imageSrc} alt="" className="jkl-file__thumbnail"/>
            ) : (
                <div className="jkl-file__thumbnail" data-filetype={fileType}/>
            )}
            <div className={"jkl-file__text"}>
                {path ? (
                    <Link href={path} className="jkl-file__name">
                        {fileName} (<span>{formatBytes(fileSize)})</span>
                    </Link>
                ) : (
                    <p className="jkl-file__name">
                        {fileName} (<span>{formatBytes(fileSize)})</span>
                    </p>
                )}
                <p className="jkl-file__description">
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
            {onRemove && (
                <Button
                    variant={"ghost"}
                    className="jkl-file__delete"
                    onClick={onRemove}
                    title={`Fjern ${fileName}`}
                    icon={<TrashCanIcon/>}
                />
            )}
        </div>
    );

    return context ? <li>{fileComponent}</li> : fileComponent;
};
